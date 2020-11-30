import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';

type Props = {
  pageid: number,
  snippet: string,
  title: string,
  highlightedText: string,
};

/**
 * https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
 */
function searchText(text: string, highlightedText: string) {
  const parts = text.split(new RegExp(`(${highlightedText})`, 'gi'));
  return (
    <span>
      {
        parts.map((part, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i} style={part.toLowerCase() === highlightedText.toLowerCase() ? { background: 'yellow', color: 'black' } : {}}>
            {part}
          </span>
        ))
      }
    </span>
  );
}

export default function SearchList({
  pageid,
  snippet,
  title,
  highlightedText,
}: Props) {
  // TODO - on fetch
  const text = snippet.replace(/(<([^>]+)>)/ig, '');

  return (
    <Box pt={2}>
      <Typography component="strong" variant="h5">
        {`${pageid}:${title}`}
      </Typography>
      <Typography variant="body2" gutterBottom color="textSecondary">
        {highlightedText ? searchText(text, highlightedText) : text}
      </Typography>
    </Box>
  );
}
