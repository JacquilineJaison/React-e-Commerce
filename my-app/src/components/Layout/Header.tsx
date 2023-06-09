import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Cart from '../Cart/Cart';

type HeaderProps = {
  onDisplay: ()=>void;
};

const Header = ({onDisplay}:HeaderProps)=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>                
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GroceryMart
          </Typography>
          <Cart onClick={onDisplay}></Cart>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;