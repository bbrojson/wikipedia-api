import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
} from '@material-ui/core';
import PageBox from '../PageBox/PageBox';
import { Page } from '../../types';

type Props = {
  pages: Page[],
};

export default function SearchList({ pages }: Props) {
  const { t } = useTranslation();

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
              pageid={pageid}
              title={title}
              snippet={snippet}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}
