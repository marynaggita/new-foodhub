import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, List, ListItem } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function RateCard() {
  // const router = useRouter();

  const handleNavigation = () => {
    // Example navigation to a specific page
    // router.push('/some-page');
  };
  const handleRowClick = (guests: string) => {
    console.log(`Row clicked for ${guests}`);
    // router.push(`/details/${encodeURIComponent(guests)}`);
  };

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
                style={{
                  borderRadius: '8px',
                  maxWidth: '100%',  // Ensure responsiveness on smaller screens
                  height: 'auto',    // Keep aspect ratio intact
                }}
              />
              <Box>
                <List sx={{ mt: 1, color: '#555', fontWeight: 'bold', fontSize: '20px' }}>
                  <ListItem>Charges are inclusive of</ListItem>
                </List>

                <List sx={{ mt: 4, color: '#555', fontStyle: 'italic', '&:hover': { color: '#4caf50', cursor: 'pointer' } }}>
                  <ListItem>A smartly dressed serving team</ListItem>
                  <ListItem>Wide selection of teas, milk tea (African tea), black tea, spiced and non-spiced, instant or brewed coffee</ListItem>
                  <ListItem>Customizable tea blends</ListItem>
                  <ListItem>Elegant serving ware</ListItem>
                  <ListItem>Basic decorated table setup station</ListItem>
                </List>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Event Packages Table */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom textAlign="center">
                Event Packages by Number of Guests
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 320, boxShadow: 3 }}>
                  <TableBody>
                    {[
                      { guests: 'Up to 20 Guests', price: 'UGX 250,000' },
                      { guests: '50 Guests', price: 'UGX 550,000' },
                      { guests: '100 Guests', price: 'UGX 1M' },
                      { guests: '150 Guests', price: 'UGX 1.2M' },
                      { guests: '200 Guests', price: 'UGX 1.6M' },
                      { guests: '250 - 300 Guests', price: 'UGX 2.2M' },
                      { guests: '350 - 400 Guests', price: 'UGX 2.8M' },
                      { guests: '450 - 500 Guests', price: 'UGX 3.4M' },
                      { guests: '550 - 600 Guests', price: 'UGX 4M' },
                      { guests: '650 - 700 Guests', price: 'UGX 4.5M' },
                      { guests: '750 - 800 Guests', price: 'UGX 5.2M' },
                      { guests: '850 - 900 Guests', price: 'UGX 5.6M' },
                      { guests: '950 - 1000 Guests', price: 'UGX 6.5M' },
                    ].map((row, index) => (
                      <TableRow key={index} onClick={() => handleRowClick(row.guests)} sx={{ cursor: 'pointer' }}>
                        <TableCell
                          align="center"
                          sx={{
                            padding: '12px',
                            backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'transparent',
                          }}
                        >
                          {row.guests}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            padding: '12px',
                            backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'transparent',
                          }}
                        >
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))}
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

