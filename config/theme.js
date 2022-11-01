import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#1A5371',
   },
   secondary: {
     main: '#ff7e24',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;