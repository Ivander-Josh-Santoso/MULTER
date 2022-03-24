const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const uploadCloudinary = (req,res,next)=>{
    const pathFile = req.file.path;
    const uniqueName = new Date().toISOString();
    
    cloudinary.uploader.upload(
        pathFile,
        {
            resource_type:'raw',
            public_id: `express-cloudinary-${uniqueName}`,
            tags: `express-cloudinary`,
        },
        (err,image)=>{
            if(err) return res.status(500).send(err);
            console.log("FIle upload to cloudinary")

            fs.unlinkSync(pathFile);
            req.image = image;
            next();
        }

    )
}
module.exports = uploadCloudinary;