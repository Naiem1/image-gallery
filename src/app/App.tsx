import { Box, CssBaseline } from '@mui/material';
import Gallery from '../pages/Gallery';

const App = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        bgcolor: '#EDF1F7',
      }}
    >
      <CssBaseline />
      <Gallery />
    </Box>
  );
};

export default App;
