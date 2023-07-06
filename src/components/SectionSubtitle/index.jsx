import React from 'react';
import { H3 } from './style';

export const SectionSubTitle = ({ children, center }) => {
  return (
    <H3 className={`section-subtitle ${center ? 'text-center' : ''}`}>
      {children}
    </H3>
  );
};
