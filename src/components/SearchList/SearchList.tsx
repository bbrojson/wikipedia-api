import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { Page } from '../../types';

type Props = {
  pages: Page[],
};

export default function SearchList({ pages }: Props) {
  return (
    <Grid container spacing={3}></Grid>
  );
}
