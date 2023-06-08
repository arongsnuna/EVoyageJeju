import {pool} from'../config/dbConnect.js';
import {User} from '../db/User.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthService {
    //create
    static async addUser({ userId,userName,userNickname,userPassword }) {
        // 비밀번호 해쉬화
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        const newUser = {
            userId,
            userName,
            userNickname,
            userPassword: hashedPassword,
            errorMessage: 'error',
        };
        // userId 중복 확인
        const user1 = await this.findById({ userId  });
        if (user1) {
            newUser.errorMessage = '이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.';
        }

        // userNickname 중복 확인
        const user2 = await this.findByNickname({ userNickname  });
        if (user2) {
            newUser.errorMessage = '이 별명은 현재 사용중입니다. 다른 별명을 입력해 주세요.';
        }

        const addSql = `insert into User(userId,userName,userNickname,userPassword) values('${userId}','${userName}','${userNickname}','${hashedPassword}' )`
        pool.query(addSql, (error, results, fields) => {
            if (error) { //////////////////////작업이 완료되기를 기다리고 싶어요.. 비동기 싫어요......... 기다려주라 얘야
                newUser.errorMessage = error;
                console.log(error);
                return newUser;
            }
            else{
                newUser.errorMessage = 'error';
                return newUser;
            }
        });

        return newUser;
    }
    // userId 조회
    static async findById({ userId  }) {
        const findIdSql = `select * from User where userId='${userId}'`;
        pool.query(findIdSql, (error, results, fields)=>{
            return results;
        })
    }
    // userNickname 조회
    static async findByNickname({ userNickname  }) {
        const findNicknameSql = `select * from User where userId='${userNickname}'`;
        pool.query(findNicknameSql, (error, results, fields)=>{
            return results;
        })
    }

    ///////////////////

    //로그인
    static async getUser({ userId, userPassword }) {

        let user = {
            userId,
            userPassword, // 입력된 값 - 그대로  
            errorMessage: 'error',
        };

        // 아이디 dbb 존재 여부 확인
        //const userFound=await this.findById({ userId  });

        //////
        let userFound;
        console.log('1111111',user);
        const findIdSql = `select * from User where userId='${userId}'`;
        pool.query(findIdSql, (error, results, fields)=>{
            console.log('여기야!!!!!!! ', results[0]);
            userFound = results[0];
            if (!userFound) {
                user.errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                console.log('22222',user);
                return user;
            }
            user.errorMessage = 'heelo';
            console.log('333333',user);
            const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
            const token = jwt.sign({ userId: userFound.userId }, secretKey);
            console.log(token);
            console.log(userFound.userId);
            return;
        })
        console.log('아직 아니야!!!!',user);
        
        ///////
        console.log('44444',user);



        // 비밀번호 일치 여부 확인
        const isPasswordCorrect = await bcrypt.compare(user.userPassword, userFound.userPassword);
        if(!isPasswordCorrect){
            user.errorMessage = '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
            console.log('dpdpdpdp');
            return user;
        }

        // 로그인 성공 -> JWT 웹 토큰 생성
        const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
        const token = jwt.sign({ userId: userFound._id }, secretKey);

        // 반환할 loginuser 객체를 위한 변수 설정
        const id = userFound._id;
        const userName = userFound.userName;
        const userNickname = userFound.userNickname

        const loginUser = {
            token,
            id,
            userId: user.userId,
            userName,
            userNickname,
            errorMessage: 'error',
        };
        console.log('loginUser',loginUser);

        return loginUser;
    }

    //update
    static async setUser({ userId, toUpdate }) {
        // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
        //let user = await this.findById({ userId });
        

        // db에서 찾지 못한 경우, 에러 메시지 반환
        // if (!user) {
        //     user = {};
        //     user.errorMessage = '가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
        //     return user;
        // }


        let user;
        for (const [fieldToUpdate, newValue] of Object.entries(toUpdate)) {
            let updateSql = `UPDATE User SET ${fieldToUpdate}='${newValue}' WHERE userId = '${userId}'`;
            pool.query(updateSql, (error, results, fields)=>{
                if(error){
                    user={};
                    user.errorMessage = '업데이트에 실패했습니다.';
                    console.log('실패');
                    return user;
                }
                user = results[0];
                console.log(results);
                console.log('11111',user);
            })
            console.log('222222',user);
        }

        return user;
    }

    // 전체 유저 불러오기
    static async getUsers() {
        const sql = `select * from User`;
        pool.query(sql, (error, results, fields) => {
            const users = results;
            console.log(users);  // 맞게 출력          
            return users; 
            // 1. 값을 받아오면
        });
    }

    // 특정 user read(ObjectId로)
    static async getUserInfo({ userId }) {
        //const user = await this.findById({ userId });
        //////
        let userFound;
        const findIdSql = `select * from User where userId='${userId}'`;
        console.log('아이디는!!!!!!',userId);
        pool.query(findIdSql, (error, results, fields)=>{
            console.log('여기야!!!!!!! QBdbdbddb ', results[0]);
            userFound = results[0];
            if (!userFound) {
                userFound.errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                console.log('22222',user);
                return user;
            }
            return;
        })
        console.log('아직 아니야!!!!',userFound);
        
        ///////
        const user = await this.findById({ userId });
        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!user) {
            const errorMessage = '해당 아이디는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
            return { errorMessage };
        }

        return user;
    }

}

export { userAuthService };
