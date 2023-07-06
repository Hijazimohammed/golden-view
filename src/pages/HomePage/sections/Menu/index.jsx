import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { MenuData } from '../../../../mock/menuData';
import { MenuItem } from '../../../../components/MenuItem';
import { MenuDiv, Section } from './style';

export const OurMenu = () => {
  return (
    <Section id='menu'>
      <div className='menu-text'>
        <SectionTitle center>Straight From Kitchen</SectionTitle>
        <SectionSubTitle center>Our Menu</SectionSubTitle>
      </div>
      <MenuDiv>
        {MenuData.map((item, index) => (
          <MenuItem
            key={index}
            image={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </MenuDiv>
    </Section>
  );
};
