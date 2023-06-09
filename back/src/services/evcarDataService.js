import {pool} from'../config/dbConnect.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class evcarDataService {

    static async findAllEvcarCount() {
        return new Promise((resolve, reject)=>{
            const sql = `select * from EvcarCountData`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }else{
                    const data = results;
                    resolve(data);
                }
            })
        })
    }

    static async findJejuEvCar() {
        return new Promise((resolve, reject)=>{
            const sql = `select evcar.year, evcar.evcar_count, co2.co2 from EvcarCountData as evcar, Co2Data as co2\
                            where evcar.city = 'Jeju' \
                            and evcar.city = co2.city\
                            and evcar.year = co2.year`;
            pool.query(sql, (error, results, fields)=>{
                if(error){
                    reject(error);
                }else{
                    const data = results;
                    resolve(data);
                }
            })
        })
    }
}

export { evcarDataService };
