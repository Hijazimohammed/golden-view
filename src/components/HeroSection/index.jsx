import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export const HeroSection = () => {
  return (
    <Section>
      <div>
        <h1>welcome to</h1>
        <h1>golden view dine</h1>
      </div>

      <p>Explore the authentic vegan dishes with your friends and family</p>
      <Button
        height='height55'
        text='Read more'
        width='large'
        border='hero-btn-border'
      />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: var(--fz-headline);
      color: var(--border-color);
      display: flex;
      flex-wrap: wrap;
      /* width: 355px; */
      text-align: center;
      text-transform: capitalize;
    }
  }
  p {
    color: var(--white);
  }
`;
