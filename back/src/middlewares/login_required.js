import jwt from 'jsonwebtoken';

function login_required(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    try{
        if(!authorizationHeader){
            throw new Error('로그인이 필요한 서비스입니다.');
        }
        if(!authorizationHeader.startsWith("Bearer ")){
            throw new Error('BearerToken이 아닙니다.')
        }
    }

    catch(error){
        next(error);
    }

    // request 헤더로부터 authorization bearer 토큰을 받음.
    const userToken = req.headers['authorization']?.split(' ')[1] ?? 'null';

    // 해당 token 이 정상적인 token인지 확인 -> 토큰에 담긴 userId 정보 추출
    try {
        const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';
        const jwtDecoded = jwt.verify(userToken, secretKey);
        const userId = jwtDecoded.userId;
        req.currentUserId = userId;
        next();
    } catch (error) {
        res.status(401).send('정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.');
        return;
    }
}

export { login_required };
