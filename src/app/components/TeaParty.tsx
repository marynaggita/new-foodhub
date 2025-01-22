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
          height: '100vh',  // Full viewport height
          backgroundColor: '#ffffff',  // White background
          color: '#333',  // Dark text color for contrast
          py: 8,  // Vertical padding
          px: 4,  // Horizontal padding
          display: 'flex',
          alignItems: 'center',  // Center content vertically
          justifyContent: 'center',  // Center content horizontally
        }}
      >
        <Container maxWidth="md"> {/* Set maxWidth to control content width */}
          <Stack spacing={4} textAlign="center">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem' }, // Responsive font size
                fontWeight: 'bold',
              }}
            >
              Elevate Your Celebration with a Tea Party
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
              Transform your next event into a delightful experience with a tea party that adds 
              a touch of elegance and charm. Whether it's a wedding, kwanjula, kugamba bugenyi, kukyaala, bridal shower, or 
              any special occasion, our tea party packages provide a memorable and sophisticated way to celebrate.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{
                fontFamily: 'Playfair Display, serif',  // Serif font for a classy feel
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem' },  // Responsive font size
              }}
            >
              Let us handle all the details, from a beautiful setup to powerful service,
               so you can relax and enjoy the company of your loved ones.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              href="#contact" 
              sx={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem' },  // Responsive font size
                padding: '10px 20px',
                mt: 2,  // Margin top to space it from text above
              }}
            >
              Book Your Tea Party
            </Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
