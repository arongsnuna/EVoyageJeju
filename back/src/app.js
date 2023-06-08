import cors from "cors";
import express from "express";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { userAuthRouter } from './routers/userRouter.js';

const app = express();

// 에러 방지
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello express");
});

// router, service 구현
app.use('', userAuthRouter);
app.use(errorMiddleware);


export { app };
