import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import PageBox from '../PageBox/PageBox';
import { Page } from '../../types';

type Props = {
  highlightedText: string,
  pages: Page[],
};

export default function SearchList({ pages, highlightedText }: Props) {
  return (
    <Grid container spacing={3}>
      {
        pages.map(({
          pageid,
          snippet,
          title,
        }) => (
          <Grid key={pageid} item xs={12} md={4}>
            <PageBox
              title={title}
              snippet={snippet}
              highlightedText={highlightedText}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}
