import React from 'react';
import { Image } from '../Image';

const logo = '/assets/Logo.svg';
export const Logo = () => {
  return <Image ImageSrc={logo} title='logo' />;
};
