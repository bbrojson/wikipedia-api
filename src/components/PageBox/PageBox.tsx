import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import HighlightText from '../HighlightText/HighlightText';

type Props = {
  snippet: string,
  title: string,
  highlightedText: string,
};

export default function SearchList({
  snippet,
  title,
  highlightedText,
}: Props) {
  // TODO - on fetch
  const text = snippet.replace(/(<([^>]+)>)/ig, '');

  return (
    <Box pt={2}>
      <Typography component="strong" variant="h5">
        <HighlightText
          text={title}
          highlightedText={highlightedText}
        />
      </Typography>
      <Typography variant="body2" gutterBottom color="textSecondary">
        <HighlightText
          text={text}
          highlightedText={highlightedText}
        />
      </Typography>
    </Box>
  );
}
