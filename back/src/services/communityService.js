import {pool} from'../config/dbConnect.js';
import { userAuthService } from '../services/userService.js';

class communityService{

    // 전체 글 가져오기
    static async getPosts(){
        return new Promise((resolve, reject)=>{
            const sql = `select * from Community`;
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
        // const user = await userAuthService.findById({userId});
        const post = {
            postId : null,
            postTitle,
            postContent,
            postType,
            userId,
            errorMessage: null,
        }
        return new Promise((resolve, reject)=>{
            const sql = `insert into Community(postTitle, postContent, postType, userId) values ('${postTitle}','${ postContent}','${postType}','${userId}')`;

            pool.query(sql, (error, results, fields)=>{
                if(error){
                    post.errorMessage = error;
                    resolve(post);
                }
                else{
                    post.postId = results.insertId;
                    resolve(post);
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
                    console.log(error);
                    reject(error);
                }
                const post = results[0];
                resolve(post);
            })
        })
    }

    // 글 삭제하기 
    static async deletePost({userId, postId}){
        let status = {
            message: null,
            errorMessage: null,
        }
        const postFound = await this.getOnePost({postId});
        
        return new Promise((resolve, reject)=>{
            console.log(postFound, userId);
            if(!postFound){
                status.errorMessage = '이 게시글을 존재하지 않습니다. 다시 한 번 확인해주세요.';
                resolve(status);
            }
            else if(postFound.userId != userId){
                status.errorMessage = '이 게시글을 수정할 권한이 없습니다.';
                resolve(status);
            }
            else{
                const sql = `DELETE from Community WHERE postId = '${postId}'`;
                pool.query(sql,(error, results, fields)=>{
                    if(error){
                        status.errorMessage = error;
                        resolve(status);
                    }
                    else{
                        status.message = '삭제되었습니다';
                        resolve(status);
                    }
                })
            }

        })
    }


    // 글 수정하기
    static async setPost({postId, newTitle, newContent, newType, userId}){
        const postFound = await this.getOnePost({postId});
        const postTitle = await this.titleUpdate({postFound, newTitle});
        const postContent = await this.contentUpdate({postFound, newContent});
        const postType = await this.typeUpdate({postFound, newType});

        return new Promise((resolve, reject)=>{
            let post = {
                postId,
                userId,
                postTitle,
                postContent,
                postType,
                errorMessage:null,
            }

            if(!postFound){
                post.errorMessage = '이 게시글을 존재하지 않습니다. 다시 한 번 확인해주세요.';
                reject(post);
            }
            else if(postFound.userId != userId){
                post.errorMessage = '이 게시글을 수정할 권한이 없습니다.';
                resolve(post);
            }
            else{
                let sql = `select * from Community where postId = '${postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    let updatedPost = results[0];
                    updatedPost.errorMessage = null;
                    resolve(updatedPost);
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
                        reject(error)
                    }
                    resolve(results);
                })
            }
            else{
                resolve();
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
                resolve();
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
                resolve();
            }

        })
    }
    
}

export{communityService};