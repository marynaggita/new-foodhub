import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { brown, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

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

const FeaturedTeas = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100%",
        // backgroundColor: theme.palette.background.paper,
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        textAlign: "center",
        backgroundColor: "#f9f5f4", // Lighter shade for the background
      }}
    >
      {/* Title with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography 
          variant="h3" 
          sx={{
            color: "#5d4037", // Main shade color
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
            '&:hover': {
              color: "#3e2723", // Darker shade on hover
            },
            mt: 3, // Adds top margin
            mb: 7, // Adds bottom margin
          }} 
          gutterBottom 
          align="center"
        >
          Customer Favorite: Best Selling Teas
        </Typography>

      </motion.div>

      {/* Grid Layout for Tea Blends */}
      <Grid 
        container 
        spacing={2} 
        justifyContent="space-between"
      >
        {[
          { 
            name: "Spiced Tea", 
            description: "A refreshing blend that promotes wellness and vitality with every sip.", 
            image: "/images/Milktea.jpg" 
          },
          { 
            name: "Black Tea", 
            description: "Bold and aromatic, perfect for a robust morning pick-me-up.", 
            image: "/images/blactea.jpg" 
          },
          { 
            name: "Bushera Tea", 
            description: "A soothing and calming blend, perfect for relaxation and unwinding.", 
            image: "/images/Bushera.jpg" 
          }
        ].map((tea, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            {/* Animated Card */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ 
                maxWidth: 300, 
                boxShadow: 4, 
                mx: "auto", 
                '&:hover': {
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow effect on hover
                }
              }}>
                <CardMedia
                  component="img"
                  alt={tea.name}
                  height="200"
                  image={tea.image}
                  title={tea.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#5d4037" }}>
                    {tea.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#3e2723" }}>
                    {tea.description}
                  </Typography>
                  <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#5d4037", // Main color
                        '&:hover': {
                          backgroundColor: "#3e2723", // Darker shade for hover
                        },
                        mt: 2,
                        color: "white", // Ensure the text is white for contrast
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
    </Box>
    </ThemeProvider>
  );
};

export default FeaturedTeas;
