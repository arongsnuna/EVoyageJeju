import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { userAuthService } from "../services/userService.js";
import { wrapper } from "../middlewares/wrapper.js";

import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime";
import { fileURLToPath } from "url";
import { dirname } from "path";

const userAuthRouter = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 파일 저장을 위한 storage 생성
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploaded/user")); // 파일 업로드 위치 설정
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// 회원가입
userAuthRouter.post(
  "/register",
  wrapper(async (req, res, next) => {
    try {
      // req (request) 에서 데이터 가져오기
      const userId = req.body.userId;
      const userName = req.body.userName;
      const userNickname = req.body.userNickname;
      const userPassword = req.body.userPassword;

      const newUser = await userAuthService.addUser({
        userId,
        userName,
        userNickname,
        userPassword,
      });

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  })
);

// 로그인
userAuthRouter.post(
  "/login",
  wrapper(async (req, res, next) => {
    try {
      const userId = req.body.userId;
      const userPassword = req.body.userPassword;

      const user = await userAuthService.getUser({ userId, userPassword });

      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  })
);

// 유저정보 수정
userAuthRouter.put(
  "/users/:userId",
  login_required,
  upload.single("userImage"),
  wrapper(async (req, res, next) => {
    try {
      const currentUser = req.currentUserId;
      const userId = req.params.userId;
      const uploadImage = req.file ?? null;

      if (currentUser != userId) {
        throw new Error("수정할 권한이 없습니다.");
      }
      const newNickname = req.body.userNickname;
      const newPassword = req.body.userPassword;
      const confirmPassword = req.body.confirmPassword;

      if (!newNickname || !newPassword || !confirmPassword) {
        throw new Error("모든 값이 입력되지 않았습니다");
      }

      if (newPassword !== confirmPassword) {
        throw new Error("비밀번호와 확인 비밀번호가 다릅니다");
      }

      let updatedUser;

      if (uploadImage !== null) {
        // 업로드 된 파일을 서버의 파일 시스템에 저장
        const fileName = uploadImage.filename;
        const filePath = path.join(__dirname, "../uploaded/user", fileName);

        // 이미지파일의 경로를 불러와 데이터 URI로 변환(로컬 파일 시스템의 경로를 사용하기 때문)
        // 이미지 파일 읽기
        const imageData = fs.readFileSync(filePath);
        // MIME 타입을 가져오기
        const mimeType = mime.lookup(filePath);

        // 데이터 URI로 변환
        const imageUri = `data:${mimeType};base64,${imageData.toString(
          "base64"
        )}`;

        updatedUser = await userAuthService.setUserWithImage({
          userId,
          newNickname,
          newPassword,
          imageUri,
        });
      } else {
        updatedUser = await userAuthService.setUser({
          userId,
          newNickname,
          newPassword,
        });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  })
);

// 유저의 전체 목록 불러오기
userAuthRouter.get(
  "/users",
  wrapper(async (req, res, next) => {
    try {
      const users = await userAuthService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  })
);

// 특정 유저의 정보
userAuthRouter.get(
  "/users/:userId",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const currentUserInfo = await userAuthService.getUserInfo({ userId });

      console.log("유저 라우터 userId :", userId);
      console.log("유저 라우터 currentUserInfo :", currentUserInfo);
      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  })
);

// 유저정보 삭제
userAuthRouter.post(
  "/users/:userId",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const currentUser = req.currentUserId;
      const userId = req.params.userId;
      if (currentUser != userId) {
        throw new Error("삭제할 권한이 없습니다.");
      }
      const userPassword = req.body.userPassword ?? null;
      if (userPassword === (null || "")) {
        throw new Error("비밀번호를 입력해주세요");
      }
      const status = await userAuthService.deleteUser({ userId, userPassword });
      res.status(200).send(status);
    } catch (error) {
      next(error);
    }
  })
);

// 현재 로그인된 사용자 가져오기
userAuthRouter.get(
  "/current",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const user = await userAuthService.findById({ userId });

      if (!user) {
        const errorMessage = "현재 사용자를 찾을 수 없습니다.";
        throw new Error(errorMessage);
      }
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  })
);

export { userAuthRouter };
