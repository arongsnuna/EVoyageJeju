import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { communityService } from "../services/communityService.js";
import { wrapper } from "../middlewares/wrapper.js";

import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime";
import { fileURLToPath } from "url";
import { dirname } from "path";

const communityRouter = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 파일 저장을 위한 storage 생성
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploaded/community")); // 파일 업로드 위치 설정
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// 전체 글 가져오기
communityRouter.get(
  "",
  wrapper(async (req, res, next) => {
    try {
      const page = req.query.page || 1; // 요청한 페이지 번호
      const pageSize = req.query.pageSize || 10; // 페이지 크기

      const posts = await communityService.getPosts({ page, pageSize });
      res.status(200).send(posts);
    } catch (error) {
      next(error);
    }
  })
);

// 글 작성하기 (글 추가)
communityRouter.post(
  "",
  login_required,
  upload.single("postImage"),
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const postTitle = req.body.postTitle;
      const postContent = req.body.postContent;
      const postType = req.body.postType;
      const uploadImage = req.file ?? null;

      if (!userId) {
        throw new Error("글 작성을 위해선 로그인이 필요합니다.");
      }

      if (!postTitle || !postContent || !postType) {
        throw new Error("모든 값을 입력했는지 확인해주세요");
      }

      let newPost;
      if (uploadImage !== null) {
        // 업로드 된 파일을 서버의 파일 시스템에 저장
        const fileName = uploadImage.filename;
        const filePath = path.join(
          __dirname,
          "../uploaded/community",
          fileName
        );

        // 이미지파일의 경로를 불러와 데이터 URI로 변환(로컬 파일 시스템의 경로를 사용하기 때문)
        // 이미지 파일 읽기
        const imageData = fs.readFileSync(filePath);
        // MIME 타입을 가져오기
        const mimeType = mime.lookup(filePath);

        // 데이터 URI로 변환
        const imageUri = `data:${mimeType};base64,${imageData.toString(
          "base64"
        )}`;
        newPost = await communityService.writePostWithImage({
          userId,
          postTitle,
          postContent,
          postType,
          imageUri,
        });
      } else {
        newPost = await communityService.writePost({
          userId,
          postTitle,
          postContent,
          postType,
        });
      }
      res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  })
);

// 특정 글 불러오기
communityRouter.get(
  "/:postId",
  wrapper(async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const post = await communityService.getOnePost({ postId });
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  })
);

// 글 삭제하기
communityRouter.post(
  "/:postId",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const postId = req.params.postId;

      const postFound = await communityService.getOnePost({ postId });
      if (!postFound) {
        const errorMessage =
          "이 게시글은 존재하지 않습니다. 다시 한 번 확인해주세요.";
        throw new Error(errorMessage);
      }
      if (postFound.userId != userId) {
        const errorMessage = "이 게시글을 삭제할 권한이 없습니다.";
        throw new Error(errorMessage);
      }

      const status = await communityService.deletePost({ postId });

      res.status(200).send(status);
    } catch (error) {
      next(error);
    }
  })
);

// 글 수정하기
communityRouter.put(
  "/:postId",
  login_required,
  upload.single("postImage"),
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const postId = req.params.postId;
      const uploadImage = req.file ?? null;

      const postFound = await communityService.getOnePost({ postId });
      if (!postFound) {
        const errorMessage =
          "이 게시글은 존재하지 않습니다. 다시 한 번 확인해주세요.";
        throw new Error(errorMessage);
      }
      if (postFound.userId != userId) {
        const errorMessage = "이 게시글을 수정할 권한이 없습니다.";
        throw new Error(errorMessage);
      }

      const newTitle = req.body.postTitle;
      const newContent = req.body.postContent;
      const newType = req.body.postType;

      if (!newTitle || !newContent || !newType) {
        throw new Error("모든 값을 입력했는지 확인해주세요");
      }
      let updatedPost;
      if (uploadImage !== null) {
        // 업로드 된 파일을 서버의 파일 시스템에 저장
        const fileName = uploadImage.filename;
        const filePath = path.join(
          __dirname,
          "../uploaded/community",
          fileName
        );

        // 이미지파일의 경로를 불러와 데이터 URI로 변환(로컬 파일 시스템의 경로를 사용하기 때문)
        // 이미지 파일 읽기
        const imageData = fs.readFileSync(filePath);
        // MIME 타입을 가져오기
        const mimeType = mime.lookup(filePath);

        // 데이터 URI로 변환
        const imageUri = `data:${mimeType};base64,${imageData.toString(
          "base64"
        )}`;
        updatedPost = await communityService.setPostWithImage({
          postId,
          userId,
          newTitle,
          newContent,
          newType,
          imageUri,
        });
      } else {
        updatedPost = await communityService.setPost({
          postId,
          userId,
          newTitle,
          newContent,
          newType,
        });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      next(error);
    }
  })
);
