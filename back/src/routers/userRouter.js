import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { userAuthService } from "../services/userService.js";
import jwt from "jsonwebtoken";

const userAuthRouter = Router();

// 회원가입
userAuthRouter.post("/register", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const userName = req.body.userName;
    const userNickname = req.body.userNickname;
    const userPassword = req.body.userPassword;

    const user1 = await userAuthService.findById({ userId });
    if (user1) {
      const errorMessage =
        "이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.";
      throw new Error(errorMessage);
    }
    const user2 = await userAuthService.findByNickname({ userNickname });
    if (user2) {
      const errorMessage =
        "이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해 주세요.";
      throw new Error(errorMessage);
    }

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      userId,
      userName,
      userNickname,
      userPassword,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// 로그인
userAuthRouter.post("/login", async function (req, res, next) {
  try {
    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const userPassword = req.body.userPassword;

    const user = await userAuthService.getUser({ userId, userPassword });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

// 로그아웃
userAuthRouter.post("/logout", login_required, async function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    // 토큰 무효화
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) {
        const errorMessage = "Invalid token";
        throw new Error(errorMessage);
      }
      res.status(200).send({ message: "Logged out successfully" });
    });
  } catch (error) {
    next(error);
  }
});

// 유저정보 수정
userAuthRouter.put(
  "/users/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const newNickname = req.body.userNickname ?? null;
      const newPassword = req.body.userPassword ?? null;
      const confirmPassword = req.body.confirmPassword ?? null;

      if (userNickname === (null || "")) {
        res.status(400).send({ error: "별명을 입력해주세요" });
        throw new Error("별명을 입력해주세요");
      }
      if (userPassword === (null || "")) {
        res.status(400).send({ error: "비밀번호를 입력해주세요" });
        throw new Error("비밀번호를 입력해주세요");
      }

      const updatedUser = await userAuthService.setUser({
        userId,
        newNickname,
        newPassword,
      });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// 유저의 전체 목록 불러오기
userAuthRouter.get("/users", async function (req, res, next) {
  try {
    const users = await userAuthService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

// 특정 유저의 정보
userAuthRouter.get(
  "/users/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { userAuthRouter };
