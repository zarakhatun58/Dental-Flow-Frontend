import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./styles.css"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#18b1aa', color: 'white', py: 4, px: 2 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography  className='footer-header'>
            Dental AI Clinic
          </Typography>
          <Typography variant="h5">
            Revolutionizing dental care with AI technology. Book your appointment online or contact us anytime.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1,  }}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/about" color="inherit" underline="hover">About</Link>
            <Link href="/services" color="inherit" underline="hover">Services</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom style={{alignItems: 'center', textAlign:"left"}}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">support@dentalai.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">+1 (800) 123-4567</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">123 Dental St, New York, NY</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Social icons */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <IconButton color="inherit"><FacebookIcon /></IconButton>
        <IconButton color="inherit"><TwitterIcon /></IconButton>
        <IconButton color="inherit"><InstagramIcon /></IconButton>
        <Typography variant="body2" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Dental AI. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
