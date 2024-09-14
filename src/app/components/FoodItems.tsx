import React from 'react';
import { Grid, Paper, Typography } from '@mui/material/';
import { makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface FoodItem {
  name: string;
  notes: string;
  price: string;
  imageUrl: string;
}

const foodItems: FoodItem[] = [
    { name: 'BBQ Chicken Pizza', notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$10', imageUrl: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRoeUqD7lgiXavof_C8DW2QeI-BHIzGPLKRPCWinurLGGMBT7GSml0le6bQro8yWjAa' },
    { name: 'Burger', notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$8', imageUrl: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1920,c_limit/Smashburger-recipe-120219.jpg' },
    { name: 'Sushi' , notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$15', imageUrl: 'https://imagedelivery.net/olI9wp0b6luWFB9nPfnqjQ/res/abillionveg/image/upload/ku3h3qulwxxuyxrkehvp/1658887803.jpg/public' },
    { name: 'Pasta' , notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$12', imageUrl: 'https://blog.fatfreevegan.com/wp-content/uploads/2007/02/atozpastasalad.jpg' },
    { name: 'katogo' , notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: 'UGX 10000', imageUrl: 'https://daily.kellogg.edu/wp-content/uploads/2020/11/katoga.jpg' },
    { name: 'Steak' , notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$20', imageUrl: 'https://example.com/steak.jpg' },
    { name: 'Tacos', notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$9', imageUrl: 'https://example.com/tacos.jpg' },
    { name: 'Ice Cream' , notes: 'Pizza infused with BBQ sauce, mozella cheese and skinless boneless chicken breast', price: '$5', imageUrl: 'https://example.com/ice-cream.jpg' },
  ];
  

const FoodGrid: React.FC = () => {
    return (
      <Grid container spacing={3} sx={{ flexGrow: 1, padding: 2 }}>
        {foodItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                padding: 2,
                textAlign: 'center',
                color: 'text.secondary',
              }}
            >
                <Box
              component="img"
              sx={{
                height: 140,
                width: '100%',
                objectFit: 'cover',
                marginBottom: 2,
              }}
              alt={item.name}
              
              src={item.imageUrl}
            />
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
              {item.notes}
            </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main' }}>
                {item.price}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default FoodGrid;
