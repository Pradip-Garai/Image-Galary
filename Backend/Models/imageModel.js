const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image_url:{
        type: String
    },
     image_name:{
        type: String
    },
     image_type:{
        type: String
    },
     image_size:{
        type: String
    },
     createdAt:{
        type: Date,
        default: new Date()
    },
})

const ImageModel = mongoose.model('galaries',ImageSchema);

module.exports = ImageModel;