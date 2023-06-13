import {pool} from'../config/dbConnect.js';

class likeService{

    // 해당 게시글의 모든 댓글 가져오기
    static async getPostLikeCount({postId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from PostLikeCount where postId = '${postId}'`;

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
    // 해당 글에 유저가 좋아요를 눌렀는지 확인
    static async checkPostLikeCount({postId, userId}){
        return new Promise((resolve, reject)=>{
            const sql = `select * from LikeCount where postId = '${postId}' and userId = '${userId}'`;

            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    const count = results;
                    resolve(count.length);
                }
            })
        })
    }
    // 특정 유저가 좋아요를 누른 모든 글 조회
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

    
    // 특정 글의 좋아요 카운트 삭제
    static async decrementLikeCount({postId, userId}){
        return new Promise((resolve, reject)=>{
            const sql = `DELETE from LikeCount WHERE postId = '${postId}' and userId = '${userId}'`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    console.log(results);
                    const like = results;
                    resolve(like);
                }
            })
        })
    }

    // 특정 글의 좋아요 증가
    static async incrementLikeCount({ postId, userId }){
        return new Promise((resolve, reject)=>{
            const sql = `insert into LikeCount(userId,postId) values ('${userId}','${postId}')`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else{
                    console.log(results);
                    const message = '정상 처리했습니다.';
                    resolve(message);
                }
            })
        })
    }
}

export {likeService};