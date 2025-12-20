import * as React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const userTestimonials = [
  {
    // avatar: <Avatar alt="Amina K." />,
    name: 'Amina K.',
    occupation: 'Event Planner',
    testimonial:
      "The tea service was absolutely phenomenal! My guests couldn’t stop talking about the unique bushera and ekitiribiita. It added a perfect touch of elegance to our event.",
  },
  {
    // avatar: <Avatar alt="James L." />,
    name: 'James L.',
    occupation: 'Corporate Wellness Coach',
    testimonial:
      "Offering their tea at our retreat made a huge difference. Everyone felt relaxed and energized.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
];
const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
];

export default function Testimonials() {
  const theme = useTheme();
  // const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        py: { xs: 6, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: { xs: 'left', md: 'center' },
        backgroundColor: '#e0dbd0ff',
      }}
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
          align="center" >
        What Our Clients Say
      </Typography>
      <Typography variant="h5" color="#5d4037" maxWidth="md">
        Discover how our tea services have enriched events with flavor, style, and
        memorable experiences. See why clients keep coming back for more.
      </Typography>

      <Grid container spacing={4} sx={{ mt: { xs: 4, sm: 6 } }}>
        {userTestimonials.map((t, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                boxShadow: 4,
                p: 3,
              }}
            >
              <CardContent sx={{ pb: 0 }}>
                <Typography variant="h7" color="#5d4037">
                  "{t.testimonial}"
                </Typography>
              </CardContent>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 3,
                }}
              >
                <CardHeader
                  // avatar={<Avatar src={t.avatarSrc} alt={t.name} />}
                  title={<Typography variant="subtitle1" color='#5d4037' textAlign='center'>{t.name}</Typography>}
                  subheader={<Typography variant="body2"textAlign='center'>{t.occupation}</Typography>}
                  sx={{ p: 0 }}
                />

                {/* Optional Logo */}
                {/* <Box component="img" sx={{ height: 40, ml: 2, opacity: 0.5 }} /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
