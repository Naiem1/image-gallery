import { Box } from '@mui/material';
import { forwardRef } from 'react';

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
  // console.log('Photo', props)
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
    ...style,
  };
  return <Box ref={ref} style={imageStyle} {...props} />;
});

export default Image;