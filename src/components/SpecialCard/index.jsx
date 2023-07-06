import React from 'react';
import { Image } from '../Image';
import { CardContainer } from './style';

export const Card = ({ icon, title, desc }) => {
  return (
    <CardContainer>
      <Image ImageSrc={icon} title={title} />
      <h3 className='card-title'>{title}</h3>
      <p className='card-paragraph'>{desc}</p>
    </CardContainer>
  );
};
