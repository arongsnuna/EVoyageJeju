import {pool} from'../config/dbConnect.js';
import { userAuthService } from '../services/userService.js';

class communityService{

    // 전체 글 가져오기
    static async getPosts(){
        return new Promise((resolve, reject)=>{
            const sql = `select * from Community`;
            //const sql = 'TRUNCATE table Community';
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const posts = results;
                    resolve(posts);
                }
            })
        })
    }

    // 글 작성하기
    static async writePost({userId, postTitle, postContent, postType}){

        return new Promise((resolve, reject)=>{
            const sql = `insert into Community(postTitle, postContent, postType, userId) values ('${postTitle}','${ postContent}','${postType}','${userId}')`;

            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const postId = results.insertId;
                    const sql2 =`select * from Community where postId = '${postId}'`;
                    pool.query(sql2, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            const newPost = results[0];
                            resolve(newPost);
                        }
                    })
                }
            })
        })
    }

    // 특정 글 불러오기
    static async getOnePost({postId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from Community where postId ='${postId}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const post = results[0];
                    resolve(post);
                }
                
            })
        })
    }

    // 글 삭제하기 
    static async deletePost({postId}){
        return new Promise((resolve, reject)=>{
            const sql = `DELETE from Community WHERE postId = '${postId}'`;
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


    // 글 수정하기
    static async setPost({postId, newTitle, newContent, newType, userId}){
        const postFound = await this.getOnePost({postId});
        const postTitle = await this.titleUpdate({postFound, newTitle});
        const postContent = await this.contentUpdate({postFound, newContent});
        const postType = await this.typeUpdate({postFound, newType});

        return new Promise((resolve, reject)=>{
            if(!postTitle || !postContent || !postType){
                const errorMessage = '업데이트에 실패했습니다';
                reject(errorMessage);
            }
            else{
                let sql = `select * from Community where postId = '${postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        let updatedPost = results[0];
                        resolve(updatedPost);
                    }
                })
            }
        })
    }

    // 제목 업데이트
    static async titleUpdate({postFound, newTitle}){
        return new Promise((resolve, reject)=>{
            if(postFound.postTitle != newTitle){
                const sql = `update Community SET postTitle ='${newTitle}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error);
                    }
                    resolve(results);
                })
            }
            else{
                resolve('업데이트할 내용이 없습니다.');
            }

        })
    }
    //내용 업데이트
    static async contentUpdate({postFound, newContent}){
        return new Promise((resolve, reject)=>{
            if(postFound.postContent != newContent){
                const sql = `update Community SET postContent ='${newContent}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error)
                    }
                    resolve(results);
                })
            }
            else{
                resolve('업데이트할 내용이 없습니다.');
            }

        })
    }

    // 타입 업데이트
    static async typeUpdate({postFound, newType}){
        return new Promise((resolve, reject)=>{
            if(postFound.postType != newType){
                const sql = `update Community SET postType ='${newType}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error)
                    }
                    resolve(results);
                })
            }
            else{
                resolve('업데이트할 내용이 없습니다.');
            }

        })
    }
    
}

export{communityService};