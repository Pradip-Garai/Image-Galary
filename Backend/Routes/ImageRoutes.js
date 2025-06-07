const uploadMultiple = require('../Middleware/ImageUploader');
const ImageModel = require('../Models/imageModel');

const Routes = require('express').Router();

Routes.get("/",async(req,res)=>{
    
    try{
      
        const data = await ImageModel.find();
        res.status(200).json({
        message: "All Images",
        data: data,
        success: true
    })

    }catch(error){
       res.status(500).json({
        message: "Internal Server Failure !!!",
        data: error,
        success: false
      })
    }

});



Routes.get("/:id",async(req,res)=>{
    
    try{
        
        const {id} = req.params;
        const data = await ImageModel.findOne({_id:id});
        res.status(200).json({
        message: "Image Detalis",
        data: data,
        success: true
    })

    }catch(error){
       res.status(500).json({
        message: "Internal Server Failure !!!",
        data: error,
        success: false
      })
    }

});

Routes.post("/upload-images", uploadMultiple , async(req,res)=>{
    console.log("--uploaded public urls --",req.files);

    try{
        
        const Images = req.files.map((file) => ({
             mimeType: file.mimetype,
             image_name: file.originalname,
             image_size: file.size,
             image_url: file.path
        }));


        await ImageModel.insertMany(Images);
        res.status(200).json({
        message: "File Uploaded Successfull!!!",
        data: req.files,
        success: true
    })

    }catch(error){
       res.status(500).json({
        message: "Internal Server Failure !!!",
        data: error,
        success: false
      })
    }
    
});

module.exports = Routes;