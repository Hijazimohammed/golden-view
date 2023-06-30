import React from 'react';
import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const SectionSubTitle = ({ children, center }) => {
  return (
    <H3 className={`section-subtitle ${center ? 'text-center' : ''}`}>
      {children}
    </H3>
  );
};
const H3 = styled.h3`
  width: 694px;
  @media (${devices.laptopM}) {
    width: auto;
  }
`;
