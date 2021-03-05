import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import next from 'next';
import routes from './routes';

config();

const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev,
  dir: './src'
})

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(routes);

  server.all('*', (req: Request, resp: Response) => {
    return handle(req, resp)
  });

  server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  })
})

