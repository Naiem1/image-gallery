import Box from '@mui/material/Box';
import Header from '../components/header/Header';
const Gallery = () => {
  return (
    <Box
      sx={{
        height: '95vh',
        width: '97%',
        borderRadius: '8px',
        background: '#fff',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      }}
    >
      <Header/>
    </Box>
  );
};

export default Gallery;
