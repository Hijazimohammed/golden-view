import React from 'react';
import { Logo } from '../Logo';
import { Menu } from './MenuList';
import { Button } from '../Button';
import { Navbar } from './style';

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
