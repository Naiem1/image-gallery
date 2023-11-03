import Box from '@mui/material/Box';
import { useState } from 'react';
import UploadGallery from '../components/UploadGallery';
import INITIAL_IMAGES from '../data/data';



interface Images {
  id: number,
  url: string,
  isFeatured: boolean
}

const Gallery = () => {
  const [images, setImages] = useState<Images[]>([...INITIAL_IMAGES]);

  

  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        borderRadius: '0 0 8px 8px',
        background: '#fff',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        border: '1px solid',
        overflow: 'auto'
      }}
    >
      <UploadGallery images={ images} />
    </Box>
  );
};

export default Gallery;
