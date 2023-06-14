import {pool} from'../config/dbConnect.js';

class likeService{

    /**
     * params: 
     *      postId = 게시글 아이디
     *  description:
     *      게시글 아이디로 모든 좋아요 수를 조회합니다.
     */

    static async getPostLikeCount({postId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from PostLikeCount where postId = '${postId}'`;
            //const sql = `select * from PostLikeCount `;
            //const sql = 'TRUNCATE table LikeCount';
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const count = results;
                    resolve(count);
                }
            })
        })
    }
    /**
     * params: 
     *      postId = 게시글 아이디
     *      userId = 유저 아이디
     *  description:
     *      특정 유저가 좋아요를 눌렀는지 확인합니다.    
     */

    static async checkPostLikeCount({postId, userId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from LikeCount where postId = '${postId}' and userId = '${userId}'`;

            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    if(results.length == 0){
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                }
            })
        })
    }
    /**
     * params: 
     *      userId = 유저 아이디
     *  description:
     *      특정 유저가 좋아요를 누른 모든 게시글을 조회합니다.
     */

    static async getUserLikeCount({userId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from LikeCount where userId = '${userId}'`;

            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    console.log(results);
                    const count = results;
                    resolve(count);
                }
            })
        })
    }

    
    /**
     * params: 
     *      postId = 게시글 아이디
     *      userId = 유저 아이디
     *  description:
     *      좋아요를 삭제합니다.  
     */

    static async decrementLikeCount({postId, userId}){
        return new Promise((resolve, reject)=>{
            const sql = `DELETE from LikeCount WHERE postId = '${postId}' and userId = '${userId}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const sql2 = `select * from PostLikeCount where postId = '${postId}'`;
                    pool.query(sql2, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            const likes = results;
                            resolve(likes);
                        }
                    })
                }
            })
        })
    }

    /**
     * params: 
     *      postId = 게시글 아이디
     *      userId = 유저 아이디
     *  description:
     *       좋아요를 추가합니다.  
     */

    static async incrementLikeCount({ postId, userId }){
        return new Promise((resolve, reject)=>{
            const sql = `insert into LikeCount(userId,postId) values ('${userId}','${postId}')`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const sql2 = `select * from LikeCount where postId = '${postId}'`;
                    pool.query(sql2, (error, results, fields)=>{
                        if(error){
                            reject(error);
                        }
                        else{
                            const likes = results;
                            resolve(likes);
                        }
                    })
                }
            })
        })
    }
}

export {likeService};
