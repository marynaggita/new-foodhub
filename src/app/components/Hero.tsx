// "use client"

// import type * as React from "react"
// import { useState } from "react"
// import Box from "@mui/material/Box"
// import Button from "@mui/material/Button"
// import Container from "@mui/material/Container"
// import Link from "@mui/material/Link"
// import Stack from "@mui/material/Stack"
// import TextField from "@mui/material/TextField"
// import Typography from "@mui/material/Typography"
// import Grid from "@mui/material/Grid"
// import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
// import { brown, grey } from "@mui/material/colors"

// let theme = createTheme({
//   typography: {
//     fontFamily: "Montserrat, Arial, sans-serif",
//   },
//   palette: {
//     primary: {
//       main: brown[700],
//       light: brown[50],
//     },
//     secondary: {
//       main: grey[300],
//       light: grey[50],
//     },
//     background: {
//       paper: brown[50],
//       default: grey[50],
//     },
//   },
// })

// theme = responsiveFontSizes(theme)

// export default function Hero() {
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     try {
//       const res = await fetch("http://localhost:8080/submitEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       })

//       const data = await res.json()

//       if (res.ok) {
//         setMessage("Email saved successfully")
//         setEmail("")
//       } else if (res.status === 409) {
//         setMessage("Email already exists")
//       } else {
//         setMessage(data.message || "Error adding user")
//       }
//     } catch (error) {
//       console.error("An unexpected error occurred:", error)
//       setMessage("An unexpected error occurred")
//     }
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         id="hero"
//         sx={{
//           width: "100%",
//           minHeight: "100vh",
//           background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//           display: "flex",
//           alignItems: "center",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//               <Stack spacing={4} alignItems={{ xs: "center", md: "flex-start" }}>
//                 <Typography
//                   variant="h1"
//                   color="primary.light"
//                   sx={{
//                     fontWeight: "bold",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Discover Our <br />
//                   Latest Teas
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   color="secondary.light"
//                   sx={{
//                     maxWidth: "600px",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Share a satisfying tea party experience with your guests using the finest local tea spices.
//                 </Typography>
//                 <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
//                   <Stack direction="row" spacing={1}>
//                     <TextField
//                       fullWidth
//                       variant="outlined"
//                       placeholder="Your email address"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       InputProps={{
//                         sx: { bgcolor: "background.paper" },
//                       }}
//                     />
//                     <Button type="submit" variant="contained" color="primary" sx={{ px: 3 }}>
//                       Subscribe
//                     </Button>
//                   </Stack>
//                 </form>
//                 {message && (
//                   <Typography variant="body2" color={message.includes("successfully") ? "success.main" : "error.main"}>
//                     {message}
//                   </Typography>
//                 )}
//                 <Typography
//                   variant="caption"
//                   color="secondary.light"
//                   sx={{ maxWidth: "400px", textAlign: { xs: "center", md: "left" } }}
//                 >
//                   By clicking "Subscribe" you agree to our{" "}
//                   <Link href="#" color="inherit" underline="always">
//                     Terms & Conditions
//                   </Link>
//                   .
//                 </Typography>
//               </Stack>
//             </Grid>
//             <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//               <Box
//                 sx={{
//                   height: { xs: "300px", md: "500px" },
//                   width: "100%",
//                   position: "relative",
//                   overflow: "hidden",
//                   borderRadius: "16px",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src="https://cdn.shopify.com/s/files/1/0382/1836/7107/t/3/assets/dehydrated-tea-hero-image-1639694925155.jpg?v=1639694928"
//                   alt="Assorted teas"
//                   sx={{
//                     objectFit: "cover",
//                     width: "100%",
//                     height: "100%",
//                     transition: "transform 0.3s ease-in-out",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                     },
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             bgcolor: "rgba(0,0,0,0.4)",
//             zIndex: 0,
//           }}
//         />
//       </Box>
//     </ThemeProvider>
//   )
// }
"use client"

import type * as React from "react"
import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import { brown, grey } from "@mui/material/colors"

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
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
})

theme = responsiveFontSizes(theme)

export default function Hero() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await fetch("http://localhost:8080/submitEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Email saved successfully")
        setEmail("")
      } else if (res.status === 409) {
        setMessage("Email already exists")
      } else {
        setMessage(data.message || "Error adding user")
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error)
      setMessage("An unexpected error occurred")
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="hero"
        sx={{
          width: "100%",
          minHeight: "100vh",
          paddingTop: { xs: "64px", sm: "80px", md: 0 }, // Added top padding
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" }, // Adjusted alignment for mobile
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: 0,
          }}
        /> */}

        <Grid
          container
          sx={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left Content Section */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              p: { xs: 4, md: 8 },
              pt: { xs: "100px", sm: "120px", md: 8 }, // Added top padding for mobile
              position: "relative",
              zIndex: 2,
            }}
          >
            <Stack spacing={4} sx={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <Typography
                variant="h1"
                color="primary.light"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" }, // Reduced font size on mobile
                  lineHeight: 1.2,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  mt: { xs: 2, md: 0 }, // Added margin top for better spacing
                }}
              >
                Discover
                <br />
                Our
                <br />
                Latest Teas
              </Typography>
              <Typography
                variant="h5"
                color="secondary.light"
                sx={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                }}
              >
                Share a satisfying tea party experience with your guests using the finest local tea spices.
              </Typography>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      sx: {
                        bgcolor: "background.paper",
                        borderRadius: "8px",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      borderRadius: "8px",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </form>
              {message && (
                <Typography
                  variant="body2"
                  color={message.includes("successfully") ? "success.main" : "error.main"}
                  sx={{ fontWeight: 500 }}
                >
                  {message}
                </Typography>
              )}
              <Typography variant="caption" color="secondary.light">
                By clicking "Subscribe" you agree to our{" "}
                <Link href="#" color="inherit" underline="always">
                  Terms & Conditions
                </Link>
                .
              </Typography>
            </Stack>
          </Grid>

          {/* Right Image Section */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              position: { md: "absolute" },
              right: 0,
              top: 0,
              height: { xs: "50vh", md: "100vh" },
              width: { md: "60%" },
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="https://cdn.shopify.com/s/files/1/0382/1836/7107/t/3/assets/dehydrated-tea-hero-image-1639694925155.jpg?v=1639694928"
              alt="Assorted teas and spices"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

