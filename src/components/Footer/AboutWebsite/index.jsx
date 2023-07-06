import React from 'react';
import { Logo } from '../../Logo';
import { about } from '../../../mock/footer';
import { Image } from '../../Image';
import { Div } from './style';

const AboutWebsite = () => {
  return (
    <Div>
      <div className='logo-name'>
        <Logo />
        <h3 className='fz-md'>{about.title}</h3>
      </div>
      <p>{about.text}</p>
      <div className='icons'>
        {about.icons.map((icon) => (
          <Image ImageSrc={icon} key={icon} />
        ))}
      </div>
    </Div>
  );
};

export default AboutWebsite;
