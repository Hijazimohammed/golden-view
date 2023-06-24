import React from 'react';

export const SectionSubTitle = ({ children, center }) => {
  return (
    <h3 className={`section-subtitle ${center ? 'text-center' : ''}`}>
      {children}
    </h3>
  );
};
