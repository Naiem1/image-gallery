import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { forwardRef } from 'react';
import '../../assets/styles.css';

// interface Props {
//   url: {
//     id: number;
//     url: string;
//     isFeatures: boolean;
//   };
//   index: number;
//   faded: string
// }

const Image = forwardRef(({ url, index, faded, style, ...props }, ref) => {
  console.log('Photo', props);
  const imageStyle = {
    opacity: faded ? '0.2' : '1',
    transformationOrigin: '0, 0',
    height: index === 0 ? 410 : 200,
    gridColumnStart: index === 0 ? 'span 2' : null,
    gridRowStart: index === 0 ? 'span 2' : null,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '5px',
    border: '1px solid rgb(204, 207, 210)',
    position: 'relative',
    zIndex: 1,
    ...style,
  };
  return (
    <>
      <Box ref={ref} style={imageStyle} {...props} className="image">
        <Box
          className="bg-black"
          sx={{
            width: '100%',
            height: '100%',
            background: 'rgba(188, 187, 187, 0.353)',
            position: 'relative',
            zIndex: 9000,
            paddingLeft: '15px',
            paddingTop: '5px',
          }}
        >
          <Checkbox sx={{ alignSelf: 'start' }} defaultChecked />
          <Button
            variant="outlined"
            sx={{
              border: '1px solid black',
              color: 'black',
              position: 'absolute',
              left: '40%',
              top: '40%',
            }}
          >
            view
          </Button>
        </Box>
      </Box>
    </>
  );
});

export default Image;
