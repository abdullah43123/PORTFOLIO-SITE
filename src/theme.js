import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF',
      dark: '#5A52D5',
      light: '#8B85FF',
    },
    secondary: {
      main: '#FF6584',
    },
    background: {
      default: '#0A0A0F',
      paper: '#13131A',
    },
    text: {
      primary: '#E8E8F0',
      secondary: '#8888AA',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5A52D5 0%, #e5506f 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(108,99,255,0.4)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.03)',
            '& fieldset': {
              borderColor: 'rgba(108,99,255,0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(108,99,255,0.6)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6C63FF',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#13131A',
          border: '1px solid rgba(108,99,255,0.2)',
          borderRadius: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
})

export default theme
