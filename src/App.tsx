import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import darkTheme from './theme/darkTheme';
import './App.css';
import List from './views/List';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <List />
    </ThemeProvider>
  );
}
