import React from 'react';
import styled from 'styled-components';

import { Image } from '../../Image';
import { navbarData } from '../../../mock/data';
import { devices } from '../../Container/breakpoints';

const SerchIcon = window.location.origin + '/assets/search.svg';

export const Menu = () => {
  return (
    <List>
      {navbarData.map((d) => (
        <ListItem key={d.title}>
          <ListItemLink>{d.title}</ListItemLink>
        </ListItem>
      ))}
      <ListItem>
        <ListItemLink>
          <Image ImageSrc={SerchIcon} title='serch Icon' />
        </ListItemLink>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (${devices.laptopM}) {
    gap: 30px;
  }
  @media (${devices.tabletL}) {
    gap: 20px;
  }

  @media (${devices.tabletM}) {
    gap: 10px;
    padding: 1rem 0;
    flex-direction: column;
    gap: 1rem;
  }
`;
const ListItem = styled.li``;
const ListItemLink = styled.a`
  color: var(--main-color);
  text-transform: capitalize;
  font-weight: 700;
  cursor: pointer;
`;
