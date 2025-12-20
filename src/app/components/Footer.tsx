import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { brown, grey } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

let theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: brown[700],
      light: brown[50],
    },
    secondary: {
      main: grey[300],
      light: grey[50],
    },
    background: {
      paper: brown[50],
      default: grey[50],
    },
  },
});
theme = responsiveFontSizes(theme);

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}KaChaiCo {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        {/* === Two-column layout === */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 6,
            width: '100%',
          }}
        >
          {/* === LEFT SIDE: Logo + Newsletter === */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ ml: '-15px', mb: 2 }}>
              <img
                src="../images/newLogo.png"
                style={logoStyle}
                alt="logo of KaChaiCo"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                placeholder="Your email address"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#5d4037',
                  color: '#fff',
                  flexShrink: 0,
                  px: 3,
                  py: 1.2,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#4e342e',
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>

          {/* === RIGHT SIDE: Quick Links === */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Quick Links
            </Typography>
            <Link color="text.secondary" href="#">
              About Us
            </Link>
            <Link color="text.secondary" href="#">
              Menu
            </Link>
            <Link color="text.secondary" href="#">
              Events
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box>
        </Box>

        {/* === Bottom section === */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ color: 'text.secondary', mt: { xs: 2, sm: 0 } }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://x.com/"
              aria-label="X"
            >
              <XIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
