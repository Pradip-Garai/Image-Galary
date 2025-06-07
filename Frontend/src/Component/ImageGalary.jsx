import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import {useDropzone} from 'react-dropzone';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'

function ImageGalary() {

  const [imageList,setImageList] = useState([]); // store in array

  const [loading,setLoading] = useState(false);

  const fetchImages = async ()=>{
      try{

        const url = 'http://localhost:5000/api/images';
        const result  = await fetch(url);
        const {data} = await result.json();
        console.log(data);
        setImageList(data);

      }catch(error){

        console.log("Error"+error);

      }
  }

  useEffect(()=>{

     fetchImages();

  },[])

  // upload image 
  const onDrop = async (acceptedFiles)=>{
    setLoading(true);
    console.log(acceptedFiles);

    // make  form object and send to cloudinary
    const formData = new FormData();
    acceptedFiles.forEach(file => {  // this is an array so we use forEach loop
        formData.append('images', file);

     });

        // apis calling to send images to cloudinary
        try{

          const url = 'http://localhost:5000/api/images/upload-images';
          const option = {
            method: "POST",
            'Content-Type':'multipart/form-data',
            body: formData
          }

          const result = await fetch(url,option);
          const { message,success } = await result.json();

          if(success){
              toast['success'](message);
          }else{
             toast['error'](error);
          }

          setLoading(false);
          fetchImages();

        }catch(error){
            console.log("Error Uploading the files : "+error);
            toast['error'](error);
        }
   

  }
  const {getRootProps,getInputProps} = useDropzone({onDrop});

  return (
    <div className='d-flex flex-column align-items-center w-50 m-auto mt-5'>
      <h1 className='mb-4'>Image Galary App</h1>

        {/* Image Upload drag and drop  */}
        <div {...getRootProps()} className='dropzone'>
            <input {...getInputProps()}/>
            <p>Drag & Drop files here, or click to select files</p>
        </div>

        {/* show loading  */}
        {
          loading && <div className='d-flex justify-content-center mt-3'>
                <div className='spinner-border' role='status'>
                   <span className='sr-only'></span>
                </div>
          </div>
        }

        {/* list all the images  */}
        <div className='d-flex flex-column w-100 mt-4'>
            <div className='image-grid'>
                {
                   imageList.map((img)=>(
                     <div key={img?._id} className='image-card'>
                        <Link to={`/${img._id}`}>
                           <img src={img.image_url} alt={img.image_name}/>
                           <p>{img.image_name}</p>
                        </Link>
                     </div>
                   ))
                }
            </div>
        </div>

        <ToastContainer
           position='top-right'
           autoClose={3000}
           hideProgressBar = {false}
        />
      
    </div>
  )
}

export default ImageGalary