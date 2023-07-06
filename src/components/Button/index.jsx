import React from 'react';
import { Btn, ButtonContainer, Span } from './style';

export const Button = ({
  background,
  fz,
  spans,
  width,
  height,
  border,
  text,
  m,
}) => {
  return (
    <ButtonContainer
      className={`${background ? background : ''} ${width ? width : ''} ${
        border ? border : ''
      } ${height ? height : 'height100'} ${m ? m : ''}`}>
      {spans && <Span />}
      <Btn className={fz ? fz : ''}>{text}</Btn>
      {spans && <Span />}
    </ButtonContainer>
  );
};
