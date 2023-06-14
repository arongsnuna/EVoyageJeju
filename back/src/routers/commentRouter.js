import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { commentService } from "../services/commentService.js";
import { communityService } from "../services/communityService.js";
import { wrapper } from "../middlewares/wrapper.js";
const commentRouter = Router();

// 해당 게시글의 모든 댓글 조회
commentRouter.get(
  "/:postId/comments",
  wrapper(async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const comments = await commentService.getComments({ postId });
      res.status(200).send(comments);
    } catch (error) {
      next(error);
    }
  })
);

// // 특정 댓글 조회
// commentRouter.get('/comment/:commentId', wrapper(async(req, res, next)=>{
//     try{
//         const commentId = req.params.commentId;
//         const comment = await commentService.getOneComment({commentId});
//         res.status(200).send(comment);
//     }
//     catch(error){
//         next(error);
//     }
// }))

// 해당 게시글의 댓글 추가
commentRouter.post(
  "/:postId/comments",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const postId = req.params.postId;

      const postFound = await communityService.getOnePost({ postId });
      if (!postFound) {
        throw new Error(
          "이 게시글은 존재하지 않습니다. 다시 한 번 확인해주세요."
        );
      }

      const commentContent = req.body.commentContent;
      if (!commentContent) {
        throw new Error("댓글을 작성해주세요.");
      }

      const comment = await commentService.writeComment({
        userId,
        postId,
        commentContent,
      });
      res.status(201).send(comment);
    } catch (error) {
      next(error);
    }
  })
);

// 댓글 삭제
commentRouter.post(
  "/:postId/comments/:commentId",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const commentId = req.params.commentId;

      const commentFound = await commentService.getOneComment({ commentId });
      if (!commentFound) {
        const errorMessage = "이 댓글은 존재하지 않습니다.";
        throw new Error(errorMessage);
      }
      if (commentFound.userId != userId) {
        const errorMessage = "이 댓글을 삭제할 권한이 없습니다.";
        throw new Error(errorMessage);
      }
      const status = await commentService.deleteComment({ commentId });
      res.status(200).send(status);
    } catch (error) {
      next(error);
    }
  })
);

// 댓글 수정
commentRouter.put(
  "/:postId/comments/:commentId",
  login_required,
  wrapper(async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const commentId = req.params.commentId;

      const commentFound = await commentService.getOneComment({ commentId });
      if (!commentFound) {
        const errorMessage = "이 댓글은 존재하지 않습니다.";
        throw new Error(errorMessage);
      }
      if (commentFound.userId != userId) {
        const errorMessage = "이 댓글을 수정할 권한이 없습니다.";
        throw new Error(errorMessage);
      }

      const newContent = req.body.commentContent;
      if (!newContent) {
        const errorMessage = "값을 입력해주세요.";
        throw new Error(errorMessage);
      }
      const updatedComment = await commentService.setComment({
        commentId,
        newContent,
      });
      res.status(200).json(updatedComment);
    } catch (error) {
      next(error);
    }
  })
);

export { commentRouter };
