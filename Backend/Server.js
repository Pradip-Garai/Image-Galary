const express = require('express');
const app = express();
const main = require('./Models/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const ImageRoutes = require('./Routes/ImageRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Image Galary Server");
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/api/images", ImageRoutes);


main()
.then(async ()=>{
    console.log("Database Successfully Connected to Server");
    app.listen(PORT,()=>{
        console.log(`Server Running at Port ${PORT}`);
    })
})
.catch((err) => {
        console.error("Database Connection Failed:", err);
});