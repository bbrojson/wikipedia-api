import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, TextField } from '@material-ui/core';

export default function SearchTextInput() {
  const { t } = useTranslation();

  function hendleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    console.log(string);
  }

  return (
    <FormControl>
      <TextField
        variant="outlined"
        label={t('Tekst szukaj')}
        inputProps={{ 'aria-label': 'search wikipedia' }}
        onChange={hendleChangeInput}
      />
    </FormControl>
  );
}
