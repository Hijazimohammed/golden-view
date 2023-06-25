import React from 'react';

export const Image = ({ ImageSrc, title }) => {
  return <img src={ImageSrc} alt={title ? title : ''} title={title} />;
};
