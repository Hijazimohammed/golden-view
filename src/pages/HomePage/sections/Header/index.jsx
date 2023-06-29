import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../../../../components/HeroSection';
import { Nav } from '../../../../components/Navbar';

const background = window.location.origin + '/assets/background-header.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <HeroSection />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 894px;
  background: linear-gradient(180deg, rgba(16, 20, 24, 0) 0%, #101418 100%),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
