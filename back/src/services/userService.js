import { pool } from "../config/dbConnect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class userAuthService {
  //create
  static async addUser({ userId, userName, userNickname, userPassword }) {
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    return new Promise((resolve, reject) => {
      // 비밀번호 해쉬화
      const newUser = {
        userId,
        userName,
        userNickname,
        userPassword: hashedPassword,
        errorMessage: null,
      };
      // userId, userNickname 중복 확인
      const user1 = this.findById({ userId });
      const user2 = this.findByNickname({ userNickname });
      if (!user1) {
        newUser.errorMessage =
          "이 아이디는 현재 사용중입니다. 다른 아이디를 입력해 주세요.";
      } else if (!user2) {
        newUser.errorMessage =
          "이 별명은 현재 사용중입니다. 다른 별명을 입력해 주세요.";
      }

      const sql = `insert into User(userId,userName,userNickname,userPassword) values('${userId}','${userName}','${userNickname}','${hashedPassword}' )`;
      pool.query(sql, (error, results, fields) => {
        if (error) {
          newUser.errorMessage = error;
          reject(newUser);
        } else {
          resolve(newUser);
        }
      });
    });
  }
  // userId 조회
  static async findById({ userId }) {
    return new Promise((resolve, reject) => {
      const sql = `select * from User where userId='${userId}'`;
      pool.query(sql, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          const user = results[0];
          resolve(user);
        }
      });
    });
  }
  // userNickname 조회
  static async findByNickname({ userNickname }) {
    return new Promise((resolve, reject) => {
      const sql = `select * from User where userNickname ='${userNickname}'`;
      pool.query(sql, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          const user = results[0];
          resolve(user);
        }
      });
    });
  }

  //로그인
  static async getUser({ userId, userPassword }) {
    const userFound = await this.findById({ userId });
    return new Promise((resolve, reject) => {
      let user = {
        userId,
        errorMessage: null,
        token: null,
        userName: null,
        userNickname: null,
      };

      if (!userFound) {
        user.errorMessage =
          "이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.";
        resolve(user);
      } else {
        bcrypt.compare(
          userPassword,
          userFound.userPassword,
          (error, result) => {
            if (!result) {
              user.errorMessage =
                "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.";
              resolve(user);
            } else {
              const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
              const token = jwt.sign({ userId: user.userId }, secretKey);
              user.token = token;
              user.userName = userFound.userName;
              user.userNickname = userFound.userNickname;
              resolve(user);
            }
          }
        );
      }
    });
  }
  //update
  static async setUser({ userId, newNickname, newPassword }) {
    const userFound = await this.findById({ userId });
    const userNickname = await this.userNicknameUpdate({
      userFound,
      newNickname,
    });
    const userPassword = await this.userPasswordUpdate({
      userFound,
      newPassword,
    });

    return new Promise((resolve, reject) => {
      let user = {
        userId,
        userNickname,
        userPassword,
        errorMessage: null,
      };

      if (!userFound) {
        user.errorMessage =
          "이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.";
        resolve(user);
      } else {
        let sql = `select * from User where userId='${userId}'`;
        pool.query(sql, (error, results, fields) => {
          let updatedUser = results[0];
          updatedUser.errorMessage = null;
          resolve(updatedUser);
        });
      }
    });
  }
  // 닉네임 업데이트
  static async userNicknameUpdate({ userFound, newNickname }) {
    return new Promise((resolve, reject) => {
      if (userFound.userNickname != newNickname) {
        const sql = `UPDATE User SET userNickname='${newNickname}' WHERE userId = '${userFound.userId}'`;
        pool.query(sql, (error, results, fields) => {
          if (error) {
            reject(error);
          }
          resolve(results);
        });
      } else {
        resolve();
      }
    });
  }
  // 비밀번호 업데이트
  static async userPasswordUpdate({ userFound, newPassword }) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return new Promise((resolve, reject) => {
      const userPassword = userFound.userPassword;
      bcrypt.compare(newPassword, userPassword, (error, result) => {
        if (!result) {
          const sql = `UPDATE User SET userPassword='${hashedPassword}' WHERE userId = '${userFound.userId}'`;
          pool.query(sql, (error, results, fields) => {
            if (error) {
              reject(error);
            }
            resolve(results);
          });
        }
        resolve();
      });
    });
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

  // 특정 user read(ObjectId로)
  static async getUserInfo({ userId }) {
    //const user = await this.findById({ userId });
    //////
    let userFound;
    const findIdSql = `select * from User where userId='${userId}'`;
    console.log("아이디는!!!!!!", userId);
    pool.query(findIdSql, (error, results, fields) => {
      console.log("여기야!!!!!!! QBdbdbddb ", results[0]);
      userFound = results[0];
      if (!userFound) {
        userFound.errorMessage =
          "이 아이디는 가입내역이 없습니다. 다시 한 번 확인해주세요.";
        console.log("22222", user);
        return user;
      }
      return;
    });
    console.log("아직 아니야!!!!", userFound);

    ///////
    const user = await this.findById({ userId });
    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 아이디는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return user;
  }
}

export { userAuthService };
