// src/theme/muiTheme.js
// Central MUI theme so <Button>, <TextField>, etc. match the design system.
// Lets pages drop their inline sx color overrides.
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:   { main: '#0284c7', dark: '#0369a1', contrastText: '#ffffff' },
    secondary: { main: '#f59e0b', dark: '#d97706', contrastText: '#1b1206' },
    text:      { primary: '#101a2e', secondary: '#475569' },
    background: { default: '#f3f6fb', paper: '#ffffff' },
  },
  typography: {
    fontFamily: "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    button: { textTransform: 'none', fontWeight: 600 },
    h1: { fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          fontWeight: 600,
          padding: '0.7rem 1.5rem',
          borderRadius: 10,
          transition: 'transform 140ms cubic-bezier(.2,.7,.3,1), box-shadow 240ms, background-color 240ms',
        },
        containedPrimary: {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 26px rgba(2,132,199,.30)',
          },
        },
        outlinedPrimary: {
          borderWidth: 1.5,
          '&:hover': { borderWidth: 1.5, transform: 'translateY(-2px)', backgroundColor: '#e6f4fb' },
        },
      },
    },
    MuiTextField: { defaultProps: { variant: 'standard' } },
    MuiInputLabel: { styleOverrides: { root: { fontWeight: 500 } } },
  },
});

export default theme;
