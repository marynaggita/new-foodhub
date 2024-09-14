// import React from 'react';
// import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

// interface ItemProps {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// const TwoColumnLayout: React.FC<ItemProps> = ({ title, description, imageUrl }) => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <Card>
//           <CardContent>
//             <Typography variant="h5">{title}</Typography>
//             <Typography variant="body1">{description}</Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <Card>
//           <CardMedia
//             component="img"
//             height="140"
//             image={imageUrl}
//             alt={title}
//           />
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default TwoColumnLayout;


import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box, Button } from '@mui/material';

interface infoItems {
  title: string;
  description: string;
  imageUrl: string;
}

const info: infoItems[] = [
  { title: 'BBQ Chicken Pizza', description: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast',imageUrl:'./images/delivery2.jpg' },

  ];
const TwoColumnLayout: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {info.map((item, index) => (
      <><Grid item xs={12} sm={6}>
          <Card>
            <CardContent sx={{ paddingTop: 15, paddingBottom: 45 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid><Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl}
                alt={item.title} />
            </Card>
          </Grid></>
        ))}
    </Grid>
  );
};

export default TwoColumnLayout;
