import {pool} from'../config/dbConnect.js';
import { userAuthService } from '../services/userService.js';

class communityService{

    // 전체 글 가져오기
    static async getPosts({page, pageSize}){
        const countTotal = this.getEntireCount();
        return new Promise((resolve, reject)=>{
            const sql = `select * from Community LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`;
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
    // 전체 글 개수 구하기
    static async getEntireCount(){
         return new Promise((resolve, reject)=>{
            const sql = 'SELECT COUNT(*) as total FROM Community';
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const total = results[0].total; 
                    resolve(total);
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
    // 글 작성하기 with image
    static async writePostWithImage({userId, postTitle, postContent, postType, imageUri}){

        return new Promise((resolve, reject)=>{
            const sql = `insert into Community(postTitle, postContent, postType, userId, postImage) values ('${postTitle}','${ postContent}','${postType}','${userId}', '${imageUri}')`;

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

    // 글 수정하기 with Image
    static async setPostWithImage({postId, newTitle, newContent, newType, imageUri, userId}){
        const postFound = await this.getOnePost({postId});
        const postTitle = await this.titleUpdate({postFound, newTitle});
        const postContent = await this.contentUpdate({postFound, newContent});
        const postType = await this.typeUpdate({postFound, newType});
        const postImage = await this.imageUpdate({postFound, imageUri});

        return new Promise((resolve, reject)=>{
            if(postTitle!='성공'){
                const errorMessage = '제목을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(postContent!='성공'){
                const errorMessage ='내용을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(postType!='성공'){
                const errorMessage ='타입을 변경하는데 실패했습니다.';
                reject(errorMessage);
            }
            else if(postImage!='성공'){
                const errorMessage ='이미지를 변경하는데 실패했습니다.';
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
            console.log(postFound);
            if(postFound.postTitle != newTitle){
                const sql = `update Community SET postTitle ='${newTitle}' where postId = '${postFound.postId}'`;
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
    //내용 업데이트
    static async contentUpdate({postFound, newContent}){
        return new Promise((resolve, reject)=>{
            if(postFound.postContent != newContent){
                const sql = `update Community SET postContent ='${newContent}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error)
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

    // 타입 업데이트
    static async typeUpdate({postFound, newType}){
        return new Promise((resolve, reject)=>{
            if(postFound.postType != newType){
                const sql = `update Community SET postType ='${newType}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error)
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
    
    //이미지 업데이트
    static async imageUpdate({postFound, imageUri}){
        return new Promise((resolve, reject)=>{
            if(postFound.postImage != imageUri){
                const sql = `update Community SET postImage ='${imageUri}' where postId = '${postFound.postId}'`;
                pool.query(sql, (error, results, fields)=>{
                    if(error){
                        reject(error)
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

    
}

export{communityService};