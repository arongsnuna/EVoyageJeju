import cors from "cors";
import express from "express";
import { errorMiddleware } from './middlewares/errorMiddleware.js';

import { userAuthRouter } from './routers/userRouter.js';
import { fileRouter} from './routers/fileRouter.js';
import { evcarDataRouter } from "./routers/evcarDataRouter.js";
import { communityRouter } from './routers/communityRouter.js';
import { commentRouter } from './routers/commentRouter.js';

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
app.use('', fileRouter);
app.use('', evcarDataRouter);
app.use('/community', communityRouter);
app.use('/community',commentRouter);
app.use(errorMiddleware);


export { app };
