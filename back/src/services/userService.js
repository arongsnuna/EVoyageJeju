import {pool} from'../config/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userAuthService {
    // 회원가입
    static async addUser({ userId,userName,userNickname,userPassword }) {
        // 비밀번호 해쉬화
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        let newUser = {
            userId,
            userName,
            userNickname,
            userPassword: hashedPassword,
        };
        const userCofirmedById = await this.findById({userId});
        const userConfirmedByNickname = await this.findByNickname({userNickname});

        return new Promise((resolve, reject)=>{
            if(userCofirmedById){
                const errorMessage = '이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.';
                reject(errorMessage);
            }
            else if(userConfirmedByNickname){
                const errorMessage = '이 닉네임은 현재 사용중입니다. 다른 닉네임을 입력해 주세요.';
                reject(errorMessage);
            }
            else{
                const sql = `insert into User(userId,userName,userNickname,userPassword) values('${userId}','${userName}','${userNickname}','${hashedPassword}' )`;
                pool.query(sql, (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }
                    else{
                        resolve(newUser);
                    }
                }); 
            }
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
        let user ={
            userId, 
            token: null,
            userName: null,
            userNickname: null,
        };
        return new Promise((resolve, reject)=>{
            if(!userFound){
                const errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                reject(errorMessage);
            }
            else{
                bcrypt.compare(userPassword, userFound.userPassword, (error, result)=>{
                    if(!result){
                      const errorMessage = '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';
                      reject(errorMessage);
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
    // 유저정보 수정
    static async setUser({ userId, newNickname, newPassword }) {
        const userFound = await this.findById({userId});
        const userNickname = await this.userNicknameUpdate({userFound, newNickname });
        const userPassword = await this.userPasswordUpdate({userFound, newPassword });
    
        return new Promise((resolve, reject)=>{
            if(!userFound){
                const errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                reject(errorMessage);
            }
            else if(userNickname!='성공'){
                const errorMessage = '별명을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(userPassword!='성공'){
                const errorMessage ='비밀번호를 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else{
                let sql = `select * from User where userId='${userId}'`;
                pool.query(sql, (error, results, fields)=>{
                    let updatedUser = results[0];
                    updatedUser.errorMessage = null;
                    resolve(updatedUser);
                })
            }
        })
    }
    // 유저정보 수정 with image
    static async setUserWithImage({ userId, newNickname, newPassword,  imageUri }){
        const userFound = await this.findById({userId});
        const userNickname = await this.userNicknameUpdate({userFound, newNickname });
        const userPassword = await this.userPasswordUpdate({userFound, newPassword });
        const userImage = await this.userImageUpdate({userFound, imageUri});
    
        return new Promise((resolve, reject)=>{
            if(!userFound){
                const errorMessage = '이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.';
                reject(errorMessage);
            }
            else if(userNickname!='성공'){
                const errorMessage = '별명을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(userPassword!='성공'){
                const errorMessage ='비밀번호를 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(userImage!='성공'){
                const errorMessage ='사진을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else{
                let sql = `select * from User where userId='${userId}'`;
                pool.query(sql, (error, results, fields)=>{
                    let updatedUser = results[0];
                    updatedUser.errorMessage = null;
                    resolve(updatedUser);
                })
            }
        })
    }
    // 닉네임 업데이트
    static async userNicknameUpdate({ userFound, newNickname }) {
        
        return new Promise((resolve, reject)=>{
            if(userFound.userNickname !=  newNickname){
                const sql = `UPDATE User SET userNickname='${newNickname}' WHERE userId = '${userFound.userId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve('성공');
                    }  
                })
            }
            else{
                resolve('성공');
            }
        })
    }
    // 비밀번호 업데이트
    static async userPasswordUpdate({ userFound, newPassword }) {
        const hashedPassword = await bcrypt.hash(newPassword , 10);
        return new Promise((resolve, reject)=>{
            const userPassword = userFound.userPassword;
            bcrypt.compare(newPassword, userPassword, (error, result)=>{
                
                if(!result){
                    const sql = `UPDATE User SET userPassword='${hashedPassword}' WHERE userId = '${userFound.userId}'`;
                    pool.query(sql, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            resolve('성공');
                        }
                    })
                }
                else{
                    resolve('성공');
                }
            });
        })
    }
    // 이미지 업데이트
    static async userImageUpdate({ userFound, imageUri }) {
        return new Promise((resolve, reject)=>{
            if(userFound.userImage !=  imageUri){
                const sql = `UPDATE User SET userImage='${imageUri}' WHERE userId = '${userFound.userId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve('성공');
                    }  
                })
            }
            else{
                resolve('성공');
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

    // 유저 삭제
    static async deleteUser({userId, userPassword}){
        const userFound = await this.findById({userId});
        return new Promise((resolve, reject)=>{
            bcrypt.compare(userPassword, userFound.userPassword, (error, result)=>{
                if(result){//같으면
                    const sql1 = `DELETE from Comment WHERE userId = '${userId}'`;
                    pool.query(sql1, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            const sql2 = `DELETE from Community WHERE userId = '${userId}'`;
                            pool.query(sql2, (error, results, fields)=>{
                                if(error){
                                    reject(error);
                                }
                                else{ 
                                    const sql3 = `DELETE from LikeCount WHERE userId = '${userId}'`;
                                    pool.query(sql3, (error, results, fields)=>{
                                        if(error){
                                            reject(error);
                                        }
                                        else{
                                            const sql4 = `DELETE from User WHERE userId = '${userId}'`;
                                            query.pool(sql4, (error, results, fields)=>{
                                                if(error){
                                                    reject(error);
                                                }
                                                else{
                                                    const status = '성공적으로 삭제되었습니다.';
                                                    resolve(status);
                                                }
                                            })
                                        }
                                    })

                                    
                                }
                            })
                        }
                    })
                }
                else{// 다르면
                    const errorMessage = '입력한 비밀번호가 옳지 않습니다';
                    reject(errorMessage);
                }
            })
            
            
        })

    }

}

export { userAuthService };
