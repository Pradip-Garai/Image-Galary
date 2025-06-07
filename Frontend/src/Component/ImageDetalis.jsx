import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ImageDetails() {  // ✅ Typo fixed in component name

  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null); // ✅ Typo fixed in state variable

  const fetchImageDetails = async () => {
    try {
      const url = 'http://localhost:5000/api/images/' + id;
      const result = await fetch(url);
      const { data } = await result.json();

      console.log(data);
      setImageDetails(data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  return (
    <div className='d-flex flex-column align-items-center w-50 m-auto mt-5'>
      <Link to="/">←Back to Gallery</Link>

      <h1 className='mb-4'>{imageDetails?.image_name}</h1>

      {imageDetails && (
        <>
          <img
            src={imageDetails.image_url}
            alt={imageDetails.image_name}
            className="mb-3"
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
          <p><strong>Image Type:</strong> {imageDetails?.image_name?.split('.').pop()}</p>
          <p><strong>Image Size:</strong> {imageDetails.image_size} bytes</p>
        </>
      )}
    </div>
  );
}

export default ImageDetails;
