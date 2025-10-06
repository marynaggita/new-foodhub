"use client";

import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { brown, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { useRouter } from "next/navigation";

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

const TeaOptions = () => {
  const router = useRouter();

  const drinks = [
    { 
      name: "Coffee", 
      description: "Rich and aromatic, perfect to energize your day.", 
      image: "/images/coffeecup.webp" 
    },
    { 
      name: "Black Tea", 
      description: "Bold and aromatic, perfect for a robust morning pick-me-up.", 
      image: "/images/blactea.jpg" 
    },
    { 
      name: "Bushera", 
      description: "A special house blend with a unique, memorable taste.", 
      image: "/images/Bushera.jpg" 
    },
    { 
      name: "Spiced African Tea", 
      description: "A creamy milk-based tea infused with African spices, warming and invigorating.", 
      image: "/images/spicedMilk.webp" 
    },
    { 
      name: "Spiced Black Tea", 
      description: "A warm blend of spices that soothes and invigorates.", 
      image: "/images/new-orange.jpg" 
    },
    { 
      name: "Herbal Tea", 
      description: "Relaxing and soothing, naturally caffeine-free.", 
      image: "/images/herbaltea.webp" 
    },
    
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 4 },
          textAlign: "center",
    background: "linear-gradient(to bottom,rgb(244, 231, 217),rgb(198, 184, 181))",        }}
      >
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h3" 
            sx={{
              color: "#5d4037",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
              mt: 3,
              mb: 7,
            }} 
            gutterBottom 
          >
            Our Tea & Coffee Selection 🍵
          </Typography>
        </motion.div>

        {/* Grid Layout for Drinks */}
        <Grid container spacing={4} justifyContent="center">
          {drinks.map((drink, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card 
                  sx={{ 
                    maxWidth: 300, 
                    mx: "auto", 
                    boxShadow: 4,
                    '&:hover': {
                      boxShadow: "0 8px 16px rgba(93, 64, 55, 0.3)",
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={drink.name}
                    height="150"        // fixed height
                    sx={{
                      objectFit: "cover"  // makes sure the image fills the area without distortion
                    }}
                    image={drink.image}
                    title={drink.name}
                />

                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#5d4037" }}>
                      {drink.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#3e2723" }}>
                      {drink.description}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: "#5d4037",
                        color: "#fff",
                        '&:hover': { backgroundColor: "#3e2723" },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Back Button */}
        <Button
          variant="contained"
          sx={{
            mt: 6,
            backgroundColor: "#5d4037",
            color: "#fff",
            '&:hover': { backgroundColor: "#3e2723" },
          }}
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default TeaOptions;
