import {pool} from'../config/dbConnect.js';
import { userAuthService } from '../services/userService.js';

class commentService{

    // 해당 게시글의 모든 댓글 가져오기
    static async getComments({postId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from Comment where postId = '${postId}'`;
            //const sql = 'TRUNCATE table Community';
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const comments = results;
                    resolve(comments);
                }
            })
        })
    }
    
    // 특정 댓글 가져오기
    static async getOneComment({commentId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from Comment where commentId = '${commentId}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const comment = results[0];
                    resolve(comment);
                }
            })
        })
    }

    // 댓글 추가
    static async writeComment({userId, postId, commentContent}){
        return new Promise((resolve, reject)=>{
            const sql = `insert into Comment(userId,postId,commentContent) values ('${userId}','${postId}','${commentContent}')`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const commentId = results.insertId;
                    const sql2 = `select * from Comment where commentId = '${commentId}'`;
                    pool.query(sql2, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            const newComment = results[0];
                            resolve(newComment);
                        }
                    })
                }
            })
        })
    }

    // 댓글 삭제
    static async deleteComment({commentId}){
        return new Promise((resolve, reject)=>{
            const sql = `DELETE from Comment WHERE commentId = '${commentId}'`;
            pool.query(sql,(error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const message = '삭제되었습니다';
                    resolve(message);
                }
            })
        })
    }

    // 댓글 수정
    static async setComment({commentId, postId, newContent}){
        const commentFound = await this.getOneComment({commentId});
        const commentContent = await this.contentUpdate({commentFound, newContent});
        return new Promise((resolve, reject)=>{
            if(!commentContent){
                const errorMessage = '업데이트에 실패했습니다.';
                reject(errorMessage);
            }
            else{
                const sql = `select * from Comment where commentId = '${commentId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        const comment = results[0];
                        resolve(comment);
                    }
                })

            }
        })
    }

    // 댓글 내용 업데이트 
    static async contentUpdate({commentFound, newContent}){
        return new Promise((resolve, reject)=>{
            if(commentFound.commentContent != newContent){
                const sql = `update Comment SET commentContent ='${newContent}' where commentId=${commentFound.commentId}`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(results);
                    }
                })
            }
            else{
                resolve('업데이트할 내용이 없습니다.');
            }
        })
    }
    
}

export {commentService};