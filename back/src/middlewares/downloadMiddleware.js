import multer from "multer"
import {v4 as uuidv4} from "uuid"
import path from "path"
import fs from "fs"

const downloadMiddleware = async (req,res,next)=>{
    let isExist;
    const fileName = req.params.fileid;
    console.log(fileName)
    try{
        isExist = fs.existsSync(`${fileName}`)
    }catch(err){
        req.errormsg = "파일을 읽어올 수 없습니다.";
    }
    const filePath = fileName;
    console.log(filePath);
    try{
        res.download(filePath);
    }catch(e){
        console.log(e)
    }
}

export { downloadMiddleware }
