import React from 'react';
import { Box, Typography, Stack, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6D4C41',  // Brown color
    },
    secondary: {
      main: '#B0BEC5',  // Light grey color
    },
    background: {
      default: '#ffffff',  // White background
    },
  },
});

export default function TeaPartySection() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',  // Set height to 90% of the viewport
          backgroundColor: '#ffffff',  // White background
          color: '#333',  // Dark text color for contrast
          py: 8,
          px: 4,  // Adds padding on the left and right sides
          display: 'flex',
          alignItems: 'center',  // Center content vertically
          justifyContent: 'center',  // Center content horizontally
        }}
      >
        <Container maxWidth="md">  {/* Set maxWidth to control content width */}
          <Stack spacing={4} textAlign="center">
            <Typography
              variant="h2"
              gutterBottom
            >
              Elevate Your Celebration with a Tea Party
            </Typography>
            <Typography variant="body1" paragraph  >
              Transform your next event into a delightful experience with a tea party that adds 
              a touch of elegance and charm. Whether it's a wedding,kwanjula, kugamba bugenyi,kukyaala, bridal shower, or 
              any special occasion, our tea party packages provide a memorable and sophisticated way to celebrate.
            </Typography>
           <br/>
            <Typography variant="body1" paragraph sx={{
    fontFamily: 'Playfair Display, serif',  // Replace with your desired font
    fontWeight: 'bold',  // Optional: set font weight
    fontSize: '2rem',  // Optional: adjust font size
  }}>
              Let us handle all the details, with a beautiful setup to a powerful service,
               so you can relax and enjoy the company of your loved ones. 
               {/* Contact us today to learn more about our tea party packages and make your next celebration a standout event. */}
            </Typography>
            <Button variant="contained" color="primary" href="#contact" sx={{
    fontFamily: 'Arial, sans-serif',  // Replace with your desired font
    fontWeight: 'bold',  // Optional: set font weight
    fontSize: '2rem',  // Optional: adjust font size
  }}>
              Book Your Tea Party
            </Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}