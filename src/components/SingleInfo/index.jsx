import React from 'react';
import { Image } from '../Image';
import { Div } from './style';

export const SingleInfo = ({ icon, number, desc }) => {
  return (
    <Div>
      <Image ImageSrc={icon} title={desc} />
      <div className='text'>
        <h2 className='joinUs-subTitle'>{number}</h2>
        <span>{desc}</span>
      </div>
    </Div>
  );
};
