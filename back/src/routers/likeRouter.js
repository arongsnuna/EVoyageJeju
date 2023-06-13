import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { likeService } from '../services/likeService.js';
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
        console.log(postId);
        const count = await likeService.getPostLikeCount({postId});
        res.status(200).send(count);
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
likeRouter.post('/increment',login_required, wrapper(async(req, res, next)=>{
    try{
        const postId = req.body.postId;
        const userId = req.body.userId;
        const check = await likeService.checkPostLikeCount({postId,userId})
        if(check){
            res.status(400).send("이미 좋아요를 누른 유저입니다.");    
        }
        const comment = await likeService.incrementLikeCount({postId, userId});
        if(!comment){

        }

        const count = await likeService.getPostLikeCount({ postId });
        res.status(200).send(comment);

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
likeRouter.post('/decrement', login_required, wrapper(async(req, res, next)=>{
    try{
        const postId = req.body.postId;
        const userId = req.body.userId;
        const check = await likeService.checkPostLikeCount({postId,userId})
        if(check){
            const result = await likeService.decrementLikeCount({postId, userId});
            if(result.offectedRows){
                res.status(200).send("삭제되었습니다.");   
                return; 
            }
            else{
                res.status(400).send("삭제할 수 없습니다."); 
                return;   
            }
        }
        res.status(400).send("삭제할 수 없습니다.");    
    }
    catch(error){
        next(error);
    }
}))


export{ likeRouter };
