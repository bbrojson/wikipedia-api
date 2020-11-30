import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { Page } from '../../types';

type Props = {
  pageid: number,
  snippet: string,
  title: string,
};

export default function SearchList({
  pageid,
  snippet,
  title,
}: Props) {
  return (
    <Box pt={2}>
      <Typography component="strong" variant="h5">
        {`${pageid}:${title}`}
      </Typography>
      <Typography variant="body2" gutterBottom color="textSecondary">
        {snippet}
      </Typography>
    </Box>
  );
}
