import React from 'react';
import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const SectionParagraph = ({ children }) => {
  return <P className='section-paragraph'>{children}</P>;
};

const P = styled.p`
  width: 568px;
  @media (${devices.laptopM}) {
    width: auto;
  }
`;
