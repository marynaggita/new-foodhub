import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { brown, grey } from '@mui/material/colors';

// Create the theme
let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Defines the default font for the application
  },
  palette: {
    primary: {
      main: brown[700],  // Main color for primary elements (buttons, icons, etc.)
      light: brown[50],  // Lighter shade of the primary color, useful for backgrounds or lighter elements
    },
    secondary: {
      main: grey[300],  // Main color for secondary elements
      light: grey[50],  // Lighter shade of the secondary color
    },
    background: {
      paper: brown[50],  // Background color for paper elements like cards, dialogs, etc.
      default: grey[50],  // Default background color for the whole app
    },
  },
});

// Apply responsive font sizes for better readability on various devices
theme = responsiveFontSizes(theme);

export default theme;