import * as React from 'react';
import { alpha } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import  food  from '../images/food.jpg';

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
   <Box
  id="hero"
  sx={({
    width: '100%',
    backgroundImage: 'url(/images/food.jpg)',
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    backgroundRepeat: 'no-repeat',
  })}
>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }} >
          <Typography
            variant="h1"
            
            sx={{
              color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.light' : 'secondary.light',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              backgroundImage: "url('../images/food.jpg')",
            }}
          >
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'secondary.light' : 'primary.light',
              }}
            >
              products
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color=" #cfeeed "
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality solutions
            tailored to your needs. Elevate your experience with top-tier features
            and services.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
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
                  backgroundColor: 'background.paper', // Set the background color of the input field
                },
              }}
            />
            <Button variant="contained" color="primary" onClick={handleClick}>
              Start now
            </Button>
          </Stack>
          {message && (
            <Typography variant="body1" textAlign="center" sx={{ mt: 2, color: 'error.main' }}>
              {message}
            </Typography>
          )}
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        /> */}
      </Container>
    </Box>
  );
}
