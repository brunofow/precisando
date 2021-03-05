import { Request, Response } from 'express';
import { bucket } from '../config/multer';
import { v4 as uuidv4 } from 'uuid';


export default {
  async store(req: Request, resp: Response) {
    console.log(req.file);

    const fileName = uuidv4() + '-' + req.file.originalname;

    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', err => console.log(err));

    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`

      return resp.json(publicUrl);
    })

    blobStream.end(req.file.buffer);


  }
}
