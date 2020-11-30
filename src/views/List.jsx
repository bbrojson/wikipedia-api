import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Container,
  Box,
} from '@material-ui/core';
import SearchTextInput from '../components/SearchTextInput/SearchTextInput';
import HighlightForm from '../components/HighlightForm/HighlightForm';
import SearchList from '../components/SearchList/SearchList';
import { api } from '../api/api';

export default function List() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState([]);
  const [highlightedText, setHighlightedText] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText !== '') {
      setLoading(true);
      api.getPages(searchText)
        .then((data) => {
          const { query: { search } } = data;
          return search;
        })
        .then((data) => {
          setPages(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [searchText]);

  if (error) {
    return <>{t('Error occured!')}</>;
  }

  return (
    <Box p={3}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <SearchTextInput
              setSearchText={setSearchText}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <HighlightForm
              setHighlightedText={setHighlightedText}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            {loading
              ? t('loading')
              : (
                <SearchList
                  highlightedText={highlightedText}
                  pages={pages}
                />
              )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
