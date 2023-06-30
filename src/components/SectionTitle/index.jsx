import React from 'react';
import styled from 'styled-components';

export const SectionTitle = ({ children, center }) => {
  return (
    <H2 className={`section-title ${center ? 'text-center' : ''}`}>
      {children}
    </H2>
  );
};

const H2 = styled.h2``;
