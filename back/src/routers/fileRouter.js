import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";
import { downloadMiddleware } from "../middlewares/downloadMiddleware.js";

import { fileService } from '../services/fileService.js';
import jwt from "jsonwebtoken";

const fileRouter = Router();

// login_required
fileRouter.post(
  "/upload",
  uploadMiddleware.single("file"),
  async function (req, res, next) {
    try {
      if(req.errorMessage){
        res.status(200).json("잘못된 파일 확장자입니다.");  
      }
      console.log(req.fileid);
      const data = `http://${process.env.DB_HOST}:${process.env.SERVER_PORT}/download/${req.fileid}`;
      /**
       * TODO : 
       *    이미지 파일 저장 테이블 작성 필요 
       */
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

    } catch (error) {
      next(error);
    }
  }
);

export { fileRouter };
