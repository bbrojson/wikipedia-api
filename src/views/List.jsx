import React, { useEffect, useState } from 'react';
import {
  Grid,
  Container,
  Box,
} from '@material-ui/core';
import SearchTextInput from '../components/SearchTextInput/SearchTextInput';
import HighlightForm from '../components/HighlightForm/HighlightForm';
import SearchList from '../components/SearchList/SearchList';

export default function List() {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages([{
      pageid: 11089416,
      snippet: '<span class="searchmatch">Test</span>(s), <span class="searchmatch">testing</span>, or <span class="searchmatch">TEST</span> may refer to: <span class="searchmatch">Test</span> (assessment), an educational assessment intended to measure the respondents',
      title: 'Test title',
    }]);
  }, []);
  return (
    <Box p={3}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <SearchTextInput />
          </Grid>
          <Grid item xs={12} md={8}>
            <HighlightForm />
          </Grid>
          <Grid item xs={12} md={12}>
            <SearchList pages={pages} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
