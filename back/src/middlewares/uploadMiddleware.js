import multer from "multer"
import {v4 as uuidv4} from "uuid"
import path from "path"

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
            done(null,'files');
        }
    }),
    limit:{fileSize:1024*1024},
})

export { uploadMiddleware }
