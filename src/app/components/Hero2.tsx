"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";
import { brown, grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Scroll handler
const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Create Theme
let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: brown[700], // Dark Brown
      light: brown[50], // Light Beige
    },
    secondary: {
      main: grey[300], // Soft Grey
      light: grey[50], // Light Grey
    },
    background: {
      paper: brown[50],
      default: grey[50],
    },
  },
});
theme = responsiveFontSizes(theme);

function Hero2() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Mobile Menu Toggle
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          {/* Left side: Logo */}
          <img src="/images/newLogo.png" alt="Tea Bar Logo" style={{ height: "150px", cursor: "pointer" }} onClick={() => handleScroll("hero")} />
          {/* <Typography variant="h6" fontWeight="bold" color="white">
            KaChai.com
          </Typography> */}

          {/* Center: Navbar Menu Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
            <Button sx={{ color: "white", fontWeight: "bold" }} onClick={() => handleScroll("hero")}>
              Home
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold" }} onClick={() => handleScroll("tea-options-section")}>
              Tea Options
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold" }} onClick={() => handleScroll("about-section")}>
              About Us
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold" }} onClick={() => handleScroll("contact-section")}>
              Contact
            </Button>
          </Box>

          {/* Right side: Cart Icon */}
          <IconButton color="inherit">
            <ShoppingCartIcon fontSize="large" />
          </IconButton>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              sx={{ color: "white", fontWeight: "bold" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => handleScroll("hero")}>Home</MenuItem>
            <MenuItem onClick={() => handleScroll("tea-options-section")}>Tea Options</MenuItem>
            <MenuItem onClick={() => handleScroll("about-section")}>About Us</MenuItem>
            <MenuItem onClick={() => handleScroll("contact-section")}>Contact</MenuItem>
            <MenuItem>
              <ShoppingCartIcon />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          width: "100%",
          height: "100vh", // Full-screen height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/images/luxytea.jpg')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(37, 11, 11, 0.64)", // Adjusted faint effect
            zIndex: 1,
          },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative", zIndex: 2 }}
        >
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
                Brewing Culture, One Cup at a Time
              </Typography>
              <Typography variant="h5" color="white" paragraph>
                Whether You Sip, Brew, or Ferment!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
                onClick={() => router.push("/TeaOptions")}
              >
                Explore Tea Options
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      
    </ThemeProvider>
  );
}

export default Hero2;
