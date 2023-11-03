import { Box } from '@mui/material';
import { forwardRef, ForwardRef } from 'react';

interface Props {
  url: {
    id: number;
    url: string;
    isFeatures: boolean;
  };
  index: number;
  faded: string
}

const Image =  forwardRef(({ url, index, faded, style, ...props }, ref) => {
  const imageStyle = {
    opacity: faded ? '0.2' : '1',
    transformationOrigin: '0, 0',
    height: index === 0 ? 410 : 200,
    gridColumnStart: index === 0 ? 'span 2' : null,
    gridRowStart: index === 0 ? 'span 2' : null,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'gray',
    ...style,
  };
  return <Box ref={ref} style={imageStyle} {...props} />;
});

export default Image;
