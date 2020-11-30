import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, TextField } from '@material-ui/core';

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
};

export default function SearchTextInput({ setSearchText }: Props) {
  const { t } = useTranslation();

  function hendleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    setSearchText(string);
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
