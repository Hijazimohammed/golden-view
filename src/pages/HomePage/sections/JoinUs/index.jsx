import React from 'react';
import { Image } from '../../../../components/Image';
import { Button } from '../../../../components/Button';
import { Section } from './style';

const right = '/assets/Component 4.png';

export const JounUS = () => {
  return (
    <Section>
      <div className='join-us'>
        <div className='images'>
          <Image ImageSrc={right} />
        </div>
        <div className='join-text'>
          <h2 className='joinUs-title'>
            Come join us for a lunch this weekend and enjoy
          </h2>
          <h3 className='joinUs-subTitle'>FLAT 10% OFF</h3>
          <Button
            text='Book Table'
            border='joinus-border'
            width='md'
            height='height55'
          />
        </div>
        <div className='images2'>
          <Image ImageSrc={right} />
        </div>
      </div>
    </Section>
  );
};
