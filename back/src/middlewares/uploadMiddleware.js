import multer from "multer"
import {v4 as uuidv4} from "uuid"
import path from "path"

const ext = ["image/jpeg","image/png","image/gif","image/bmp","image/jpg"];

function checkExt(extarr,mimetype) {
    for (let v of extarr){
        if(v === file.mimetype){
            return true;
        }
    }
    return false;
}

const uploadMiddleware = multer({
    storage: multer.diskStorage({
        filename(req,file,done){
            const fileid = uuidv4();
            const ext = path.extname(file.originalname)
            console.log(file);
            done(null,fileid+ext);
            req.fileid = fileid+ext;
        },
        destination(req, file, done){
            console.log(file);
        
            if(checkExt(extarr,mimetype)){
                done(null,'../image');
            }
            else {
                req.errorMessage = "file Type Error";
            }   
        }
    }),
    limit:{fileSize:1024*1024},
})

export { uploadMiddleware }
