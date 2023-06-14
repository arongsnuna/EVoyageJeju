import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";
import { downloadMiddleware } from "../middlewares/downloadMiddleware.js";

// import { fileService } from '../services/fileService.js';
import jwt from "jsonwebtoken";

const fileRouter = Router();

// login_required
fileRouter.post(
  "/upload",
  uploadMiddleware.single("file"),
  async function (req, res, next) {
    try {
      console.log(req.fileid);
      const data = `http://${process.env.DB_HOST}:${process.env.SERVER_PORT}/download/${req.fileid}`;
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

fileRouter.get(
  "/download/:fileid",
  downloadMiddleware,
  async function (req, res, next) {
    try {
      // res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
);

export { fileRouter };
