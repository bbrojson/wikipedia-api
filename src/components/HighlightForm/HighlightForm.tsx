import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  TextField,
  Button,
  Grid,
  Container,
} from '@material-ui/core';

export default function HighlightForm() {
  const { t } = useTranslation();

  function hendleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    console.log(string);
  }
  function hendleClickButton() {
  }

  return (
    <FormControl>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            variant="outlined"
            label={t('Tekst podświetlenia')}
            inputProps={{ 'aria-label': 'highlite text' }}
            onChange={hendleChangeInput}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            onClick={hendleClickButton}
          >
            {t('Podświetl wszystkie')}
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
