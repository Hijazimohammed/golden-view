import React from 'react';
import styled from 'styled-components';
import { Image } from '../../Image';
import { Button } from '../../Button';

const icon = window.location.origin + '/assets/mail.svg';
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

const Div = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: space-evenly;
  .text-icon {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    h2 {
      font-size: var(--fz-mmd);
      color: var(--section-subtitle);
      text-transform: capitalize;
    }
  }
  form {
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      width: 407px;
      height: 55px;
      background: transparent;
      outline: none;
      padding: 1rem;
      color: var(--section-subtitle);
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    button {
      color: var(--section-subtitle);
      font-size: var(--fz-mmd);
    }
  }
`;
