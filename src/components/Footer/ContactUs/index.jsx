import React from 'react';
import styled from 'styled-components';
import { contactUs } from '../../../mock/footer';
import { Image } from '../../Image';

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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  h3 {
    text-transform: capitalize;
    color: var(--section-subtitle);
    padding-top: 1.5rem;
  }
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 1.5rem;
    .contact-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img {
        width: 32px;
        height: 32px;
      }
      .text {
        font-size: var(--fz-m-smal);
        color: var(--section-subtitle);
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 155.3%;
        text-transform: capitalize;
      }
    }
  }
`;
export default ContactUs;
