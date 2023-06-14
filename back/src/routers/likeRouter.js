import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { likeService } from '../services/likeService.js';
import { communityService } from '../services/communityService.js';
import { wrapper } from '../middlewares/wrapper.js';
const likeRouter = Router();

/**
 * params: 
 *      postId = 게시글 아이디
 *  description:
 *      게시글의 좋아요 수를 조회합니다.
 */
likeRouter.get('/:postId', wrapper(async (req,res,next)=>{
    try{
        const postId = req.params.postId;
        const likes = await likeService.getPostLikeCount({postId});
        res.status(200).send(likes);
    }
    catch(error){
        next(error);
    }

}));

/**
 * params: 
 *      postId = 게시글 아이디
 *      userId = 유저 아이디
 *  description:
 *      게시글 아이디와 유저 아이디를 통해 좋아요를 추가합니다.
 */
likeRouter.post('/:postId/increment',login_required, wrapper(async(req, res, next)=>{
    try{
        const postId = req.params.postId;
        const postFound = communityService.getOnePost({postId});
        if(!postFound){
            const errorMessage = '해당 게시글이 존재하지 않습니다.';
            throw new Error(errorMessage)
        }

        const userId = req.currentUserId;
        if(!userId){
            const errorMessage = '로그인 후 이용해주세요.';
            throw new Error(errorMessage);
        }

        const check = await likeService.checkPostLikeCount({postId,userId})
        console.log(check);
        if(check){
            const errorMessage = '이미 좋아요를 누른 유저입니다.';
            throw new Error(errorMessage); 
        }

        const likes = await likeService.incrementLikeCount({postId, userId});
        res.status(200).send(likes);

    }
    catch(error){
        next(error);
    }
}))
/**
 * params: 
 *      postId = 게시글 아이디
 *      userId = 유저 아이디
 *  description:
 *      게시글 아이디와 유저 아이디를 통해 좋아요를 삭제합니다.
 */
likeRouter.post('/:postId/decrement', login_required, wrapper(async(req, res, next)=>{
    try{
        const postId = req.params.postId;
        const postFound = communityService.getOnePost({postId});
        if(!postFound){
            const errorMessage = '해당 게시글이 존재하지 않습니다.';
            throw new Error(errorMessage)
        }

        const userId = req.currentUserId;
        if(!userId){
            const errorMessage = '로그인 후 이용해주세요.';
            throw new Error(errorMessage);
        }

        const check = await likeService.checkPostLikeCount({postId,userId})
        if(!check){
            const errorMessage = "좋아요를 누른 적이 없는 유저입니다.";
            throw new Error(errorMessage);
        }
        
        const likes = await likeService.decrementLikeCount({postId, userId})
        res.status(200).send(likes);   
    }
    catch(error){
        next(error);
    }
}))


export{ likeRouter };
