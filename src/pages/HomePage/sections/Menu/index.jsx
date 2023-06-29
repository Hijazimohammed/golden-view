import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { MenuData } from '../../../../mock/menuData';
import { MenuItem } from '../../../../components/MenuItem';

export const OurMenu = () => {
  return (
    <Section>
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
const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 3rem;

  .menu-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

const MenuDiv = styled.div`
  width: 90%;
  height: 601px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
