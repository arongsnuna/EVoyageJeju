import { Router } from 'express';

import { login_required } from '../middlewares/login_required.js';
import { userAuthService } from '../services/userService.js';


const userAuthRouter = Router();

// 회원가입
userAuthRouter.post('/register', async function (req, res, next) {
    try {

        // req (request) 에서 데이터 가져오기
        const userId = req.body.userId
        const userName = req.body.userName;
        const userNickname = req.body.userNickname;
        const userPassword = req.body.userPassword;

        const user1 = await userAuthService.findById({userId});
        if(user1){
            const errorMessage = '이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.';
            throw new Error(errorMessage);
        }
        const user2 = await userAuthService.findByNickname({userNickname});
        if(user2){
            const errorMessage = '이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해 주세요.';
            throw new Error(errorMessage);
        }

        // 위 데이터를 유저 db에 추가하기
        const newUser = await userAuthService.addUser({
            userId,
            userName,
            userNickname,
            userPassword,
        });

        if(newUser.errorMessage){
            throw new Error(newUser.errorMessage);
        }
        res.status(201).json(newUser);

    } catch (error) {
        next(error);
    }
});

// 로그인
userAuthRouter.post('/login', async function (req, res, next) {
    try {
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

// 유저정보 수정
userAuthRouter.put('/users/:userId', login_required, async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const newNickname = req.body.userNickname ?? null;
        const newPassword = req.body.userPassword ?? null;
        const confirmPassword = req.body.confirmPassword ?? null;

        if (newNickname === (null || '')) {
            throw new Error('별명을 입력해주세요');
        }
        if (newPassword === (null || '')) {
            throw new Error('비밀번호를 입력해주세요');
        }
        if (confirmPassword === (null || '')) {
            throw new Error('확인 비밀번호를 입력해주세요');
        }
        if (newPassword !== confirmPassword){
            throw new Error('비밀번호와 확인 비밀번호가 다릅니다');
            // 말을 좀 괜찮게 해봐 ....
        }

        const updatedUser = await userAuthService.setUser({ userId, newNickname, newPassword });

        if (updatedUser.errorMessage) {
            throw new Error(updatedUser.errorMessage);
        }
        
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
});

// 유저의 전체 목록 불러오기
userAuthRouter.get('/users',  async function (req, res, next) {
    try {
        const users = await userAuthService.getUsers();
        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
});

// 특정 유저의 정보
userAuthRouter.get('/users/:userId', login_required, async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const currentUserInfo = await userAuthService.getUserInfo({userId});
        res.status(200).send(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

// 유저정보 삭제
userAuthRouter.post('/users/:userId', login_required, async function(req,res,next){
    try{
        const userId = req.currentUserId;
        const userPassword = req.body.userPassword ?? null;
        if (userPassword === (null || '')) {
            throw new Error('비밀번호를 입력해주세요');
        }
        const status = await userAuthService.deleteUser({userId, userPassword});
        if(status.errorMessage){
            throw new Error(status.errorMessage);
        }
        res.status(200).send(status.message);

    }catch(error){
        next(error);
    }
})

// 현재 로그인된 사용자 가져오기
userAuthRouter.get('/current', login_required, async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const user = await userAuthService.findById({ userId })

        if (!user) {
            const errorMessage = '현재 사용자를 찾을 수 없습니다.';
            throw new Error(user.errorMessage)
        }
        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
});



export { userAuthRouter };
