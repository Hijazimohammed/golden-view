import React from 'react';
import { Image } from '../Image';
import { salaryFormat } from '../../utils';
import { MenuItemDiv } from './style';

export const MenuItem = ({ image, title, desc, price }) => {
  return (
    <MenuItemDiv>
      <Image ImageSrc={image} tilte={title} />
      <div className='menuItemText'>
        <h4>{title}</h4>
        <h5>{desc}</h5>
      </div>
      <span></span>
      <p>{salaryFormat(price)}</p>
    </MenuItemDiv>
  );
};
