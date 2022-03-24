const multer = new require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, filename, callback)=>{
        callback(null,'./public/image')
    },
    filename:(req, file, callback)=> {
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        callback(null, nameFormat);
    }
});

const upload = multer({
    storage: storage,
    limits: 2*1000*1000,
});

const singleUpload = (req,res,next)=>{
    const uploadImage = upload.single('image');
    uploadImage(req,res,(err)=>{
        if(err){
            res.stat(500).send({
                mesg: "error multer upload",
                status : 500,
                err
            })
        }else{
            next();
        }
    })
}
module.exports = singleUpload;
