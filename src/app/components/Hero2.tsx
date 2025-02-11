"use client";

import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { brown, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

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

const Hero2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
          id="hero"
          sx={{
            width: "100%",
            minHeight: "80vh",
            paddingTop: { xs: "64px", sm: "80px", md: "80px" }, // Adjusted to match AppBar height
            background: `linear-gradient(135deg, ${theme.palette.primary.light} 10%, ${theme.palette.primary.main} 90%)`,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "center",
            paddingX: 4,
            overflow: "hidden",
          }}
        >
        <Grid container spacing={4} alignItems="center">
          {/* Right Column - Text (First on Large Screens, Second on Mobile) */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
                The Art of Tea
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                Discover the rich, aromatic flavors of premium tea blends, crafted to perfection.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                Explore Now
              </Button>
            </motion.div>
          </Grid>

          {/* Left Column - Image (Second on Large Screens, First on Mobile) */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/luxytea.jpg"
                alt="Luxury Tea"
                width={4000}
                height={4000}
                style={{
                  borderRadius: "16px",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Hero2;
