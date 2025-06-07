const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({

    cloudinary: cloudinary,
    params:{
        folder: 'galaries',
        format: async(req,file)=> 'png',
        public_id: (req,file) => file.originalname.split('.')[0] + ""
    }

}); // this is bridge 

// file uploader
const cloudinaryFileUploader = multer({ storage }); //storage of multer
const uploadMultiple = cloudinaryFileUploader.array('images',30); // one time we are accept 30 file

module.exports = uploadMultiple;