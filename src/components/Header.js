import  React from 'react';
import './Footer.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Typography, Toolbar, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = '55%';

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography component={NavLink} to="/" >
      <img src='./logo.png' alt='logo' style={{
            width: "100%",
            height: "25%"
            }} />
      </Typography>
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>

            <Tab LinkComponent={NavLink} to="/products" label='Products'/>

            <a className='about-mobile' href='https://priestly-cv.netlify.app/' target="blank"><Tab label='About Us'></Tab></a>

            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor: "#232F3D", 
        position: 'fixed'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            <img src='./logo.png' alt='logo' style={{
            width: "125px",
            marginLeft: '7rem'
            }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },
            padding: '0 100px' }}
            component={NavLink} to="/"
          >
            <img src='./logo.png' alt='logo' style={{
            width: "125px"
            }} />
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' },
        padding: '0 25px' }}>

            <Tab LinkComponent={NavLink} to="/products" label='Products'/>

            <a className='about' href='https://priestly-cv.netlify.app/' target="blank"><Tab label='About Us'></Tab></a>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
