import React from 'react';
import { HeroSection } from '../../../../components/HeroSection';
import { Nav } from '../../../../components/Navbar';
import { HeaderContainer } from './style';

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <HeroSection />
    </HeaderContainer>
  );
};
