import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import theme from './theme';

const FeaturedTeas = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        paddingY: { xs: 4, sm: 6 },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Our Premium Tea Blends
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {/* Tea Blend 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt="Green Tea"
              height="200"
              image="/images/spicedtea.webp"
              title="Green Tea"
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                Spiced Tea
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A refreshing blend that promotes wellness and vitality with every sip.
              </Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tea Blend 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt="Black Tea"
              height="200"
              image="/images/black-tea.jpg"
              title="Black Tea"
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                Black Tea
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bold and aromatic, perfect for a robust morning pick-me-up.
              </Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tea Blend 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt="Herbal Tea"
              height="200"
              image="/images/bushera2.jpg"
              title="Herbal Tea"
            />
            <CardContent>
              <Typography variant="h6" color="primary">
                Bushera tea
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A soothing and calming blend, perfect for relaxation and unwinding.
              </Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedTeas;