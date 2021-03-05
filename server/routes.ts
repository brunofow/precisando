import express from 'express';
import { multer } from './config/multer';
const routes = express.Router();

import UserController from './controllers/UserController';

routes.get('/api/teste', (req, resp) => {
  return resp.json({ message: "Olá"})
})

routes.post('/api/register', multer.single('avatar'), UserController.register);

export default routes;