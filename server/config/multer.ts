import Multer from 'multer';
import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new Storage({ projectId: process.env.GCLOUD_PROJECT, credentials: {client_email: process.env.GCLOUD_CLIENT_EMAIL, private_key: process.env.GCLOUD_PRIVATE_KEY}})

export const multer = Multer({
  storage:  Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})

export const bucket = storage.bucket(process.env.GCS_BUCKET)