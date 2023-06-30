import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';
import { devices } from '../Container/breakpoints';

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
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    width: 80;
    height: 80;
  }
  .text {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: var(--fz-xxlarge);
    }
    span {
      color: var(--section-subtitle);
      text-align: center;
      text-transform: capitalize;
    }
  }
  @media (${devices.mobileM}) {
    gap: 1rem;
    .text {
      width: 150px;
    }
  }
`;
