import React from 'react';
import { Button } from '../Button';
import { Section } from './style';

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
