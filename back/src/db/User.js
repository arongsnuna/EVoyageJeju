import {pool} from'../config/dbConnect.js';

class User {
    // 유저 추가
    static async create({ userId,userName,userNickname,hashedPassword}) {
        const sql = `insert into User(userId,userName,userNickname,userPassword) values('${userId}','${userName}','${userNickname}','${hashedPassword}' )`
        pool.query(sql, (error, results, fields) => {
            if (error) {
                console.error('쿼리 실행 에러>>', error);
                return error;
            }
            return '등록성공!';
        });
    }
    // userId 조회
    static async findById({ userId  }) {
        const sql = `select * from User where userId='${userId}'`
        pool.query(sql, (error, results, fields) => {
            return results;
        });
        
    }
    // userNickname 조회
    static async findByNickname({ userNickname  }) {
        const sql = `select * from User where userNickname='${userNickname}'`
        pool.query(sql, (error, results, fields) => {
            return results;
        });
        
    }

    // 아이디 조회
    static async findById({ userId }) {
        const sql = `select * from User where userId='${userId}'`;
        pool.query(sql, (error,results,fields)=>{
            if (!error) {
                console.error(error);
                return;
            }
            const userInfo = results;
            return userInfo;
        })
    }

    // 모든 유저 조회
    static async findAll() {
        const sql = `select * from User`
        pool.query(sql, (error, results, fields) => {
            if (error) {
                console.error(error);
                return;
            }
            const users = results;
            return users;
        });
    }

    // 특정 유저 정보 수정
    static async update({ userId, fieldToUpdate, newValue }) {
        const filter = { _id: userId };
        const sql = `UPDATE User SET ${fieldToUpdate}='${newValue}'`;
        pool.query(sql, (error, results, fields)=>{
            if(error){
                console.error(error);
                return;
            }
            return results;

        })
    }
}

export { User };
