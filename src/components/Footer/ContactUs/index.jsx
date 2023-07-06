import React from 'react';
import { contactUs } from '../../../mock/footer';
import { Image } from '../../Image';
import { Div } from './style';

const ContactUs = () => {
  return (
    <Div>
      <h3>contact Us</h3>
      <div className='contact'>
        {contactUs.map((data) => (
          <div className='contact-group' key={data.icon}>
            <Image ImageSrc={data.icon} />
            <p className='text'>{data.text}</p>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default ContactUs;
