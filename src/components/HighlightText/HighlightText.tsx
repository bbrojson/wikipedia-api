import React from 'react';

type Props = {
  text: string,
  highlightedText: string,
};

/**
 * https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
 */
export default function HighlightText({ text, highlightedText }: Props) {
  if (highlightedText === '' || text === '') {
    return <span>{text}</span>;
  }
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
