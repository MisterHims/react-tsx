import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
        },
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            color: blue[500],
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: blue[500],
            borderColor: blue[500],
            '&:hover': {
              backgroundColor: blue[500],
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: blue[500],
            color: '#fff',
            '&:hover': {
              backgroundColor: blue[700],
            },
          },
        },
      ],
    },
  },
    typography: {
    // Ajoutez les propriétés de typographie personnalisées ici
    fontWeightBold: 700,
  },
  shape: {
    // Ajoutez les propriétés de forme personnalisées ici
    borderRadius: 8,
  },
});

export default theme;
