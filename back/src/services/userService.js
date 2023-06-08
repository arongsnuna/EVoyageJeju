import {pool} from'../config/dbConnect.js';
import {User} from '../db/User.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthService {
    //create
    static async addUser({ userId,userName,userNickname,userPassword }) {
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        return new Promise((resolve, reject)=>{
            // 비밀번호 해쉬화
            const newUser = {
                userId,
                userName,
                userNickname,
                userPassword: hashedPassword,
                errorMessage: null,
            };
            // userId, userNickname 중복 확인
            const user1 = this.findById({ userId  });
            const user2 = this.findByNickname({ userNickname  });
            if (!user1) {
                newUser.errorMessage = '이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.';
            }else if (!user2) {
                newUser.errorMessage = '이 별명은 현재 사용중입니다. 다른 별명을 입력해 주세요.';
            }
            
            const sql = `insert into User(userId,userName,userNickname,userPassword) values('${userId}','${userName}','${userNickname}','${hashedPassword}' )`;
            pool.query(sql, (error, results, fields) => {
                if (error) {
                    newUser.errorMessage = error;
                    reject(newUser);
                }
                else{
                    resolve(newUser);
                }
            });        
        })
        
    }
    // userId 조회
    static async findById({ userId  }) {
        return new Promise((resolve, reject)=>{
            const sql = `select * from User where userId='${userId}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }else{
                    const user = results[0];
                    resolve(user);
                }
            })
        })
    }
    // userNickname 조회
    static async findByNickname({ userNickname  }) {
        return new Promise((resolve, reject)=>{
            const sql = `select * from User where userNickname ='${userNickname}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }else{
                    const user = results[0];
                    resolve(user);
                }
            })
        })
    }

    //로그인
    static async getUser({ userId, userPassword }) {
        const userFound = await this.findById({userId});
        return new Promise((resolve, reject)=>{
            let user ={
                userId, 
                errorMessage: null,
                token: null,
                userName: null,
                userNickname: null,
            };

            if(!userFound){
                user.errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                resolve(user);
            }
            else{
                bcrypt.compare(userPassword, userFound.userPassword, (error, result)=>{
                    if(!result){
                        user.errorMessage = '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
                        resolve(user);
                    }
                    else{
                        const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
                        const token = jwt.sign({ userId: user.userId }, secretKey);
                        user.token = token;
                        user.userName = userFound.userName;
                        user.userNickname = userFound.userNickname;
                        resolve(user);

                    }
                });
            }
        })
    }

    //update
    static async setUser({ userId, toUpdate }) {
        const userFound = await this.findById({userId});
        return new Promise((resolve, reject)=>{
            let user ={
                userId, 
                errorMessage: null,
            };

            if(!userFound){
                user.errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                resolve(user);
            }
            else{
                for (const[fieldToUpdate, newValue] of Object.entries(toUpdate)){
                    let sql = `UPDATE User SET ${fieldToUpdate}='${newValue}' WHERE userId = '${userId}'`;
                    pool.query(sql, (error, results, fields)=>{
                        if(error){
                            user.errorMessage = error;
                            resolve(user);
                        }
                    })
                }
                let sql = `select * from User where userId='${userId}'`;
                pool.query(sql, (error, results, fields)=>{
                    let updatedUser = results[0];
                    updatedUser.errorMessage = null;
                    resolve(updatedUser);
                })
            }
        })
    }

    // 전체 유저 불러오기
    static async getUsers() {
        return new Promise((resolve, reject) => {
          const sql = `SELECT * FROM User`;
          //const sql = 'TRUNCATE table User';
          pool.query(sql, (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
              const users = results;
              resolve(users);
            }
          });
        });
    }

    // 특정 user 불러오기
    static async getUserInfo({ userId }) {
        const user = await this.findById({userId});
        return new Promise((resolve, reject)=>{
            resolve(user);
        })
    }

}

export { userAuthService };
