import React from 'react';
import { Image } from '../../Image';
import { Button } from '../../Button';
import { Div } from './styled';

const icon = '/assets/mail.svg';
export const Subscribe = () => {
  return (
    <Div>
      <div className='text-icon'>
        <Image ImageSrc={icon} />
        <h2>Subscribe to our Newsletter</h2>
      </div>
      <form>
        <input
          type='email'
          placeholder='Your Email id'
          className='hero-btn-border'
        />
        <Button
          text='Subscribe'
          border='hero-btn-border'
          width='md'
          height='height55'
        />
      </form>
    </Div>
  );
};
