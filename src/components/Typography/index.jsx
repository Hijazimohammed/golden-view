import React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body1,
  Body2,
  Span,
  CaptionSpan,
} from './style';

export const index = ({ children, variant }) => {
  switch (variant) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
    case 'body1':
      return <Body1>{children} </Body1>;
    case 'body2':
      return <Body2>{children} </Body2>;
    case 'span':
      return <Span>{children} </Span>;
    case 'caption':
      return <CaptionSpan>{children} </CaptionSpan>;
    default:
      break;
  }
};
