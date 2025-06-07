const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_URL;

async function main(){
  await mongoose.connect(URL);
}

module.exports = main;