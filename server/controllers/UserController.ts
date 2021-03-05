import dotenv from "dotenv";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import prisma from "../db/connection";
import { bucket } from "../config/multer";
import { hashPassword, comparePassword } from "../utils/hashPassword";

dotenv.config();

export default {
  async register(req: Request, resp: Response) {
    const { name, email, password, city, state } = req.body;

    const dbUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (dbUser) {
      return resp.status(400).json({ error: "Usuário já está cadastrado" });
    }

    const fileName = uuidv4() + "-" + req.file.originalname;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream();

    blobStream.on("error", () => {
      return resp.status(400).json({ error: "Erro ao enviar arquivo" });
    });

    const hashedPassword = await hashPassword(password);

    var url = "";

    blobStream.end(req.file.buffer);

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

    try {
      await prisma.user.create({
        data: {
          avatar: publicUrl,
          name,
          email,
          password: String(hashedPassword),
          city,
          state,
        },
      });
      return resp.json({ success: "Usuário cadastrado com sucesso" });
    } catch (error) {
      console.log(error);
      return resp
        .status(400)
        .json({ error: "Não foi possível cadastrar o usuário" });
    }
  },
};
