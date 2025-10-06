import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { brown, grey } from "@mui/material/colors";

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
      paper: "#fff",
      default: grey[50],
    },
  },
});
theme = responsiveFontSizes(theme);

const TeaPartySection = () => {
  const muiTheme = useTheme();
  const isLargeScreen = useMediaQuery(muiTheme.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          bgcolor: muiTheme.palette.background.default,
          py: { xs: 4, lg: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box
              component="img"
              src="/images/teapic.webp"
              alt="Tea Party"
              sx={{
                width: { xs: "100%", lg: "40%" },
                height: { xs: "200px", sm: "400px", lg: "100%" },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  fontWeight: "bold",
                  color: brown[700],
                  mb: 2,
                }}
              >
                Elevate Your Celebration with a Tea Party
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: brown[700],
                  mb: 4,
                }}
              >
                Wide selection of teas — African tea, black tea, spiced and non-spiced, instant or brewed coffee, brewed bushera (enturire).
                Transform your special event into a delightful experience with a tea party that adds a touch of elegance and charm.
                Our tea party packages provide a memorable and sophisticated way to celebrate.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: { xs: "center", lg: "flex-start" } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontSize: "1.1rem",
                    py: 1.5,
                    px: 4,
                    backgroundColor: brown[700],
                    "&:hover": {
                      backgroundColor: "#4e342e",
                    },
                  }}
                >
                  Book an Exclusive Tea Party
                </Button>
                
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TeaPartySection;
