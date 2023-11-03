import { Box, CssBaseline } from '@mui/material';
import Home from '../pages/Home';

const App = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#EDF1F7',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <CssBaseline />
      <Home />
    </Box>
  );
};

export default App;
