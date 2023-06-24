import React from 'react';
import styled from 'styled-components';

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
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;
const Btn = styled.button`
  background-color: transparent;
  color: var(--white);
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
`;
const Span = styled.span`
  width: 35px;
  height: 1px;
  background-color: var(--white);
`;
