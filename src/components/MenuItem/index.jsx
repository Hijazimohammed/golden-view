import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';
import { salaryFormat } from '../../utils';
import { devices } from '../Container/breakpoints';

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
const MenuItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 15px 0;

  .menuItemText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h4 {
      color: var(--white);
      font-size: var(--fz-m-smal);
    }
    h5 {
      color: var(--white);
      font-size: var(--fz-small);
    }
  }
  span {
    width: 123px;
    height: 1px;
    background-color: var(--border-card);
  }
  p {
    color: var(--border-card);
    text-align: right;
    font-size: var(--fz-mmd);
  }
  @media (${devices.laptopM}) {
    gap: 0.7rem;
    span {
      width: 100px;
    }
  }
  @media (${devices.tabletL}) {
    gap: 0.3rem;
    span {
      width: 40px;
    }
  }
  @media (${devices.tabletM}) {
    gap: 1rem;
    span {
      width: 120px;
    }
  }
  @media (${devices.mobileM}) {
    gap: 0.5rem;
    span {
      width: 50px;
    }
  }
`;
