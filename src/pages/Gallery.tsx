import Box from '@mui/material/Box';
import { useState } from 'react';
import INITIAL_IMAGES from '../data/data';
import UploadGallery from '../components/done/UploadGallery';
// import photos from '../components/Photos';

// interface Images {
//   id: number;
//   url: string;
//   isFeatured: boolean;
// }

const Gallery = () => {
  // const [images, setImages] = useState<Images[]>([...INITIAL_IMAGES]);
  const [images, setImages] = useState([...INITIAL_IMAGES]);


  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        borderRadius: '0 0 8px 8px',
        background: '#fff',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        overflow: 'auto',
      }}
    >
      <UploadGallery images={images} setImages={setImages}/>
    </Box>
  );
};

export default Gallery;

{/* <UploadGallery /*images={ images} setImages={setImages}*/ /> */}