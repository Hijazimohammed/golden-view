import React from 'react';
import { Image } from '../Image';
import { Div } from './Style';

export const BlogsCard = ({ image, title, desc, reversed }) => {
  return (
    <Div className={`${reversed ? 'column-reverse' : 'fdc '}`}>
      <Image ImageSrc={image} />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>Read more</button>
      </div>
    </Div>
  );
};
