import React from 'react';
import { Image } from '../Image';

const logo = window.location.origin + '/assets/Logo.svg';
export const Logo = () => {
  return <Image ImageSrc={logo} title='logo' />;
};
