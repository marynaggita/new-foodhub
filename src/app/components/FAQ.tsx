// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function FAQ() {
//   const [expanded, setExpanded] = React.useState<string | false>(false);

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpanded(isExpanded ? panel : false);
//     };

//   return (
//     <Container
//       id="faq"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: { xs: 3, sm: 6 },
//       }}
//     >
//       <Typography
//         component="h2"
//         variant="h4"
//         color="text.primary"
//         sx={{
//           width: { sm: '100%', md: '60%' },
//           textAlign: { sm: 'left', md: 'center' },
//         }}
//       >
//         Frequently asked questions
//       </Typography>
//       <Box sx={{ width: '100%' }}>
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel1-content"
//     id="panel1-header"
//   >
//     <Typography component="h3" variant="subtitle2">
//       What types of tea experiences do you offer?
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
//       We offer a wide range of tea experiences, from traditional African tea and spiced blends
//       to elegant high-tea events. Whether you're planning a wedding, baby shower, or corporate
//       gathering, we curate the perfect tea service for your occasion.
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel2-content"
//     id="panel2-header"
//   >
//     <Typography component="h3" variant="subtitle2">
//       How far in advance should I book my tea party?
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
//       To ensure availability and allow for personalized planning, we recommend booking at least
//       2–4 weeks in advance. For larger or custom events, more notice is appreciated.
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel3-content"
//     id="panel3-header"
//   >
//     <Typography component="h3" variant="subtitle2">
//       Can I customize the tea menu for my event?
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
//       Absolutely. We’ll work with you to design a menu that suits your preferences — from herbal
//       infusions and black teas to brewed coffee and traditional bushera. You can also choose
//       between light refreshments or a full-service setup.
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel4-content"
//     id="panel4-header"
//   >
//     <Typography component="h3" variant="subtitle2">
//       Do you provide setup and cleanup services?
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
//       Yes, we provide full-service event support. Our team handles the setup, presentation, and
//       cleanup so you can relax and enjoy the moment with your guests.
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel5-content"
//     id="panel5-header"
//   >
//     <Typography component="h3" variant="subtitle2">
//       What areas do you serve?
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
//       We currently serve Kampala and surrounding areas. For special requests outside this region,
//       feel free to reach out and we’ll do our best to accommodate.
//     </Typography>
//   </AccordionDetails>
// </Accordion>

//       </Box>
//     </Container>
//   );
// }

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
  <Container
    id="faq"
    sx={{
      pt: { xs: 4, sm: 12 },
      pb: { xs: 8, sm: 16 },
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 3, sm: 6 },
      backgroundColor: '#fffaf5', // soft tea-toned background
    }}
  >
    <Typography
      component="h2"
      variant="h4"
      color="#4e342e" // deep brown for heading
      sx={{
        width: { sm: '100%', md: '60%' },
        textAlign: { sm: 'left', md: 'center' },
        fontSize: { xs: '2rem', sm: '2.5rem' },
        fontWeight: 700,
      }}
    >
      Frequently Asked Questions
    </Typography>

    <Box sx={{ width: '100%' }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#6d4c41' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="h3"
            sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' }, color: '#5d4037' }}
          >
            What types of tea experiences do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              maxWidth: { md: '70%' },
              color: '#795548', // medium brown
            }}
          >
            We offer a variety of luxurious tea experiences, including traditional African teas,
            black and herbal blends, local bushera, and custom curated tea party packages perfect for any
            occasion.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#6d4c41' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="h3"
            sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' }, color: '#5d4037' }}
          >
            How far in advance should I book a tea party?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              maxWidth: { md: '70%' },
              color: '#795548',
            }}
          >
            We recommend booking at least 2 weeks in advance to ensure availability, especially
            for weekend events and special occasions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#6d4c41' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            component="h3"
            sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' }, color: '#5d4037' }}
          >
            Do you provide custom packages for weddings and events?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              maxWidth: { md: '70%' },
              color: '#795548',
            }}
          >
            Absolutely! We specialize in creating tailored tea party experiences for weddings,
            birthdays, and other celebrations. Each package can be customized to your theme and
            guest preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#6d4c41' }} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography
            component="h3"
            sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' }, color: '#5d4037' }}
          >
            How can I get in touch for inquiries or support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              maxWidth: { md: '70%' },
              color: '#795548',
            }}
          >
            For bookings or questions, email us at
            <Link
              href="mailto:naggitamarym0@gmail.com"
              sx={{ ml: 0.5, color: '#4e342e', fontWeight: 600 }}
            >
              naggitamarym0@gmail.com
            </Link>{' '}
            or call our support line. We're happy to help plan your perfect tea moment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  </Container>
);
}