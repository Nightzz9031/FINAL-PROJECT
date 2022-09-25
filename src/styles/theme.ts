import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#235A2B',
    },
  },
  zIndex: {
    drawer: 1100,
    drawerButton: 1150,
    appBar: 1250,
  },
  common: {
    drawerWidth: {
      xs: 297,
      md: 340,
    },
  },
});

export default theme;
