import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material';
import { brown, grey } from '@mui/material/colors';
import { Montserrat } from 'next/font/google';

const xtheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: brown[900],  // Lighter shade of brown
    },
    secondary: {
      main: grey[300],   // Lighter shade of grey
    },
    background: {
      paper: brown[50], // Light brown background
      default: grey[50],    // Light grey for paper elements
    },
  },
});

export default function Hero() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:8080/submitEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Email saved Successfully');
      } else if (res.status === 409) {
        setMessage('Email already exists');
      } else {
        setMessage(data.message || 'Error adding user');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('An unexpected error occurred:', error.message);
        setMessage(`An unexpected error occurred: ${error.message}`);
      } else {
        console.error('An unexpected error occurred:', error);
        setMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <ThemeProvider theme={xtheme}>
      <Box
        id="hero"
        sx={{
          width: '100%',
          height: '100vh', // Increase the height here
          background: `linear-gradient(to right, ${xtheme.palette.primary.main} 0%, ${xtheme.palette.secondary.main} 100%)`,
          opacity: 0.9,
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
            height: '100%', // Ensure container takes full height
          }}
        >
          <Grid container spacing={2} sx={{ height: '0%' }}>
            {/* Column for Text */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
              <Stack spacing={2} useFlexGap sx={{ width: '100%' }}>
              <Typography
      variant="h1"
      sx={{
        color: (theme) =>
          theme.palette.mode === 'light' ? 'secondary.light' : 'primary.light',
        textAlign: 'center',
        fontSize: 'clamp(3.5rem, 10vw, 4rem)',
        fontFamily: 'Montserrat, Arial, sans-serif', // Apply Montserrat font
      }}
    >
      Our latest &nbsp;
      <Typography
        component="span"
        variant="h1"
        sx={{
          fontSize: 'clamp(3rem, 10vw, 4rem)',
          color: (theme) =>
            theme.palette.mode === 'light' ? 'secondary.light' : 'primary.light',
          fontFamily: 'Montserrat, Arial, sans-serif', // Apply Montserrat font
        }}
      >
        teas
      </Typography>
    </Typography>
                <Typography
                  textAlign="center"
                  color="#fcfcfc"
                  sx={{ width: '100%' }}
                  fontSize="24px"
                  fontStyle="Montserrat"
                >
                  Lets share a satisfying tea party experience together with your guests
                  using the best local tea spices 
                </Typography>
                <Typography
                  textAlign="center"
                  color="#cfeeed"
                  sx={{ width: '100%' }}
                >
                  Make your order now and it will be delivered
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                  useFlexGap
                  sx={{ pt: 2, width: '100%', alignItems: 'center', justifyContent: 'center' }
                }
                >
                  <TextField
                    id="outlined-basic"
                    hiddenLabel
                    size="small"
                    variant="outlined"
                    aria-label="Enter your email address"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputProps={{
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    }}
                    InputProps={{
                      sx: {
                        backgroundColor: 'background.paper',
                      },
                    }}
                  />
                  <Button variant="contained" color="primary" onClick={handleClick}>
                    Subscribe
                  </Button>
                </Stack>
                {message && (
                  <Typography variant="body1" textAlign="center" sx={{ mt: 2, color: 'error.main' }}>
                    {message}
                  </Typography>
                )}
                <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 ,fontWeight: 'bold' ,color: '#ffffff' }}>
                  By clicking &quot;Subscribe&quot; you agree to our&nbsp;
                  <Link href="#" color="secondary">
                    Terms & Conditions
                  </Link>
                  .
                </Typography>
              </Stack>
            </Grid>

            {/* Column for Cropped Image */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(https://cdn.shopify.com/s/files/1/0382/1836/7107/t/3/assets/dehydrated-tea-hero-image-1639694925155.jpg?v=1639694928)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}