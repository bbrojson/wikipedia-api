import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  setHighlightedText: React.Dispatch<React.SetStateAction<string>>,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  textField: {
    width: '100%',
  },
});

export default function HighlightForm({ setHighlightedText }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [text, setText] = useState('');

  function hendleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    setText(string);
  }
  function hendleClickButton() {
    setHighlightedText(text);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            className={classes.textField}
            variant="outlined"
            label={t('Tekst podświetlenia')}
            inputProps={{ 'aria-label': 'highlite text' }}
            onChange={hendleChangeInput}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="secondary"
            onClick={hendleClickButton}
          >
            {t('Podświetl wszystkie')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
