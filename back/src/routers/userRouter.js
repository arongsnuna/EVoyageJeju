import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required.js";
import { userAuthService } from "../services/userService.js";
import { pool } from "../config/dbConnect.js";
import path from "path";
import { error } from "console";

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

    if (newUser.errorMessage != "error") {
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

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await userAuthService.getUser({ userId, userPassword });

    if (user.errorMessage != "error") {
      throw new Error(user.errorMessage);
    }
    res.status(200).send(user);
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
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const userNickname = req.body.userNickname ?? null;
      const userPassword = req.body.userPassword ?? null;

      if (userNickname === (null || "")) {
        res.status(400).send({ error: "별명을 입력해주세요" });
        throw new Error("별명을 입력해주세요");
      }
      if (userPassword === (null || "")) {
        res.status(400).send({ error: "비밀번호를 입력해주세요" });
        throw new Error("비밀번호를 입력해주세요");
      }

      const toUpdate = { userNickname, userPassword };
      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ userId, toUpdate });

      if (updatedUser.errorMessage) {
        res.status(400).send({ error: user.errorMessage });
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
    console.log(users);
    // 2. users 값이 드렁가게끔
    res.status(200).send(users); // undefined
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
