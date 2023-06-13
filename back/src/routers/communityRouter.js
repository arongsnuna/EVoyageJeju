import { Router } from 'express';
import { login_required } from '../middlewares/login_required.js';
import { communityService } from '../services/communityService.js';
import {wrapper} from '../middlewares/wrapper.js';
const communityRouter = Router();

// 전체 글 가져오기 
communityRouter.get('', wrapper(async (req, res,next)=>{
    try{
        const page = req.query.page || 1; // 요청한 페이지 번호
        const pageSize = req.query.pageSize || 10; // 페이지 크기

        const posts = await communityService.getPosts({page, pageSize});
        res.status(200).send(posts);
    }
    catch(error){
        next(error);
    }
}));

// 글 작성하기 (글 추가)
communityRouter.post('', login_required, wrapper(async (req,res,next)=>{
    try{
        const userId = req.currentUserId;
        const postTitle = req.body.postTitle;
        const postContent = req.body.postContent;
        const postType= req.body.postType;

        if(!userId){
            throw new Error('글 작성을 위해선 로그인이 필요합니다.');
        }

        if(!postTitle || !postContent || !postType){
            throw new Error('모든 값을 입력했는지 확인해주세요')
        }
        
        const newPost = await communityService.writePost({
            userId,
            postTitle,
            postContent,
            postType,
        });
        res.status(201).json(newPost);
    }
    catch(error){
        next(error);
    }
}));

// 특정 글 불러오기 
communityRouter.get('/:postId', wrapper(async (req,res,next)=>{
    try{
        const postId = req.params.postId;
        const post = await communityService.getOnePost({postId});
        res.status(200).json(post);
    }
    catch(error){
        next(error);
    }

}));

// 글 삭제하기
communityRouter.post('/:postId', login_required, wrapper(async (req, res, next)=>{
    try{
        const userId = req.currentUserId;
        const postId = req.params.postId;

        const postFound = await communityService.getOnePost({postId});
        if(!postFound){
            const errorMessage = '이 게시글은 존재하지 않습니다. 다시 한 번 확인해주세요.';
            throw new Error(errorMessage);
        }
        if(postFound.userId != userId){
            const errorMessage = '이 게시글을 삭제할 권한이 없습니다.';
            throw new Error(errorMessage);
        }

        const status = await communityService.deletePost({postId});
        
        res.status(200).send(status);
    }
    catch(error){
        next(error);
    }
}));

// 글 수정하기 
communityRouter.put('/:postId', login_required, wrapper(async (req, res, next)=>{
    try{
        const userId = req.currentUserId;
        const postId = req.params.postId;

        const postFound = await communityService.getOnePost({postId});
        if(!postFound){
            const errorMessage = '이 게시글은 존재하지 않습니다. 다시 한 번 확인해주세요.';
            throw new Error(errorMessage);
        }
        if(postFound.userId != userId){
            const errorMessage = '이 게시글을 수정할 권한이 없습니다.';
            throw new Error(errorMessage);
        }
        
        const newTitle = req.body.postTitle;
        const newContent = req.body.postContent;
        const newType = req.body.postType;

        if(!newTitle|| !newContent || !newType){
            throw new Error('모든 값을 입력했는지 확인해주세요')
        }
    
        
        const updatedPost = await communityService.setPost({postId, newTitle, newContent, newType, userId});
        res.status(200).json(updatedPost);
    }
    catch(error){
        next(error);
    }
}));




export{ communityRouter };
