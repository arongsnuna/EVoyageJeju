import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { userAuthService } from "../services/userService.js";
import { wrapper } from "../middlewares/wrapper.js";

const userAuthRouter = Router();

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

      res.status(200).json(newUser);
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
  wrapper(async (req, res, next) => {
    try {
      const currentUser = req.currentUserId;
      const userId = req.params.userId;

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

      const updatedUser = await userAuthService.setUser({
        userId,
        newNickname,
        newPassword,
      });

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
