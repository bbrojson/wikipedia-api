import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import darkTheme from './theme/darkTheme';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
}
