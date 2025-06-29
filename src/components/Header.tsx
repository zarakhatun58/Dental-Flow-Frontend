import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  // { label: 'About', path: '/about' },
  { label: 'Services', path: '/service' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Contact', path: '/contact' },
  { label: 'Appointment', path: '/appointmentBooking' },
  { label: 'Dashboard', path: '/adminDashboard' },
  { label: 'Payment', path: '/paymentForm' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="sticky" style={{backgroundColor:"#18b1aa"}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Dental AI
            </Link>
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {navLinks.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
              <Button component={Link} to="/login" color="inherit">
                Sign In
              </Button>
              <Button component={Link} to="/register" color="secondary" variant="contained">
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {navLinks.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem  component={Link} to="/login" onClick={toggleDrawer}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem component={Link} to="/register" onClick={toggleDrawer}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
