import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '../shared/InputCheckbox';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          color: 'black',
          borderBottom: '1px solid rgb(204, 207, 210)',
        }}
      >
        <Toolbar variant="dense">
         
     
           <Checkbox/>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>

          <Button
            variant="outlined"
            color="error"
            size="small"
            endIcon={<DeleteIcon />}
            sx={{ml: 'auto'}}
          >
            Delete File
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
