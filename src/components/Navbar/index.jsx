import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { Menu } from './MenuList';
import { Button } from '../Button';

export const Nav = () => {
  return (
    <Navbar>
      <Logo />
      <Menu />
      <Button
        text='Book Now'
        spans
        background='bc-nav-btn'
        width='xlarge'
        fz='fz-nav-btn'
      />
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 80%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--nav-background);
`;
