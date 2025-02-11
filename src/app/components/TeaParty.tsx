import { Box, Typography, Button, Container, useTheme, useMediaQuery } from "@mui/material"

const TeaPartySection = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", lg: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Box
        component="img"
        src="/path-to-your-image.jpg" // Replace with your image path
        alt="Tea Party"
        sx={{
          width: { xs: "100%", lg: "50%" },
          height: { xs: "300px", sm: "400px", md: "500px", lg: "100%" },
          objectFit: "cover",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          height: { lg: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 4, lg: 0 },
        }}
      >
        <Box sx={{ maxWidth: "600px", mx: isLargeScreen ? 0 : "auto", textAlign: { xs: "center", lg: "left" } }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Elevate Your Celebration with a Tea Party
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: "1.2rem", md: "1.3rem" },
              mb: 4,
            }}
          >
            Transform your next event into a delightful experience with a tea party that adds a touch of elegance and
            charm. Whether it's a wedding, kwanjula, kugamba bugenyi, kukyaala, bridal shower, or any special occasion,
            our tea party packages provide a memorable and sophisticated way to celebrate.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontSize: "1.1rem",
              py: 1.5,
              px: 4,
            }}
          >
            Book Your Tea Party
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default TeaPartySection

