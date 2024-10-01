// components/RateCard.tsx
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow,List,ListItem } from '@mui/material';
import Image from 'next/image';

const RateCard = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Tea Bar Event Packages
      </Typography>

      {/* Wrapper for the entire section */}
      <Paper
        elevation={3}
        sx={{
          border: '2px solid #4caf50', // Green border
          borderRadius: '8px',          // Rounded corners
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Shadow for depth
          p: 4, // Padding inside the Paper
        }}
      >
        {/* Two-column layout */}
        <Grid container spacing={4} justifyContent="center">
          
          {/* Left Column: Image of Tea Bar Setup */}
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
            <Image
  src="/images/tea.jpg"
  alt="Tea Bar Setup"
  width={500}
  height={900}
  style={{ borderRadius: '8px' }}
/>
<Box>
    
  <List sx={{ mt: 1, color: '#555', fontWeight: 'bold', fontSize: '20px' }}>
    <ListItem>Charges are inclusive of</ListItem>
  </List>

  <List sx={{ mt: 4, color: '#555', fontStyle: 'italic' }}>
    <ListItem>A smartly dressed serving team</ListItem>
    <ListItem>Wide selection of teas, milk tea (african tea), black tea, spiced and non-spiced, instant or brewed coffee</ListItem>
    <ListItem>Customizable tea blends</ListItem>
    <ListItem>Elegant serving ware</ListItem>
    <ListItem>Basic decorated table setup station</ListItem>
  </List>
</Box>

            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom textAlign="center">
                Event Packages by Number of Guests
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Up to 20 Guests</TableCell>
                      <TableCell align="center">UGX 250,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">50 Guests</TableCell>
                      <TableCell align="center">UGX 550,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">100 Guests</TableCell>
                      <TableCell align="center">UGX 1M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">150 Guests</TableCell>
                      <TableCell align="center">UGX 1.2M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">200 Guests</TableCell>
                      <TableCell align="center">UGX 1.6M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">250 - 300 Guests</TableCell>
                      <TableCell align="center">UGX 2.2M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">350 - 400 Guests</TableCell>
                      <TableCell align="center">UGX 2.8M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">450 - 500 Guests</TableCell>
                      <TableCell align="center">UGX 3.4M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">550 - 600 Guests</TableCell>
                      <TableCell align="center">UGX 4M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">650 - 700 Guests</TableCell>
                      <TableCell align="center">UGX 4.5M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">750 - 800 Guests</TableCell>
                      <TableCell align="center">UGX 5.2M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">850 - 900 Guests</TableCell>
                      <TableCell align="center">UGX 5.6M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">950 - 1000 Guests</TableCell>
                      <TableCell align="center">UGX 6.5M</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
};

export default RateCard;
