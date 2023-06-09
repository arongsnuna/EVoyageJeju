import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { communityService } from '../services/communityService.js';
const communityRouter = Router();

// 전체 글 가져오기 
communityRouter.get('', async function(req, res,next){
    try{
        const posts = await communityService.getPosts();
        res.status(200).send(posts);
    }
    catch(error){
        next(error);
    }
})

// 글 작성하기 (글 추가)
communityRouter.post('', login_required, async function(req,res,next){
    try{
        const userId = req.currentUserId;
        const postTitle = req.body.postTitle;
        const postContent = req.body.postContent;
        const postType= req.body.postType;

        if(!postTitle || !postContent || !postType){
            throw new Error('모든 값을 입력했는지 확인해주세요')
        }
        
        const newPost = await communityService.writePost({
            userId,
            postTitle,
            postContent,
            postType,
        });

        if(newPost.errorMessage){
            throw new Error(newPost.errorMessage);
        }

        res.status(201).json(newPost);
    }
    catch(error){
        next(error);
    }
})

// 특정 글 불러오기 
communityRouter.get('/:postId', async function(req,res,next){
    try{
        const postId = req.params.postId;
        const post = await communityService.getOnePost({postId});
        res.status(200).json(post);
    }
    catch(error){
        next(error);
    }

})

// 글 수정하기 
communityRouter.put('/:postId', login_required, async function(req, res, next){
    try{
        const userId = req.currentUserId;
        const postId = req.params.postId;
        const newTitle = req.body.postTitle;
        const newContent = req.body.postContent;
        const newType = req.body.postType;

        
        if(!newTitle|| !newContent || !newType){
            throw new Error('모든 값을 입력했는지 확인해주세요')
        }
    
        
        const updatedPost = await communityService.setPost({postId, newTitle, newContent, newType, userId});
        if(updatedPost.errorMessage){
            throw new Error(updatedPost.errorMessage);
        }
        res.status(200).json(updatedPost);
    }
    catch(error){
        next(error);
    }
})

// 글 삭제하기
communityRouter.post('/:postId', login_required, async function(req, res, next){
    try{
        const userId = req.currentUserId;
        const postId = req.params.postId;

        const status = await communityService.deletePost({userId, postId});
        if(status.errorMessage){
            throw new Error(status.errorMessage);
        }
        res.status(200).send(status.message);

    }
    catch(error){
        next(error);
    }
})


export{ communityRouter };
