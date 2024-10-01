import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './GetLPTheme';
import Image from 'next/image';
import RateCard from './components/RateCard';
import TwoColumnLayout from './components/TryHero'
import TeaPartySection from './components/TeaParty';

// This is the ToggleCustomTheme component
interface ToggleCustomThemeProps {
  showCustomTheme: boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme ? 'custom' : 'default'}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value="custom">
          {/* <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} /> */}
          Custom theme
        </ToggleButton>
        <ToggleButton value="default">Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

// This is the LandingPage component
export default function LandingPage() {
const [mode, setMode] = React.useState<PaletteMode>('light');  
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = (_event: React.MouseEvent<HTMLElement>, newTheme: string | null) => {
    if (newTheme !== null) {
      setShowCustomTheme(newTheme === 'custom');
    }
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
      <Divider />
      <TeaPartySection/>
      <Divider />
      <Divider />
      
      <br/>
      <Divider />
      {/* <TwoColumnLayout/> */}
    
        <RateCard />
        {/* <Features /> */}
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
    </ThemeProvider>
  );
 }