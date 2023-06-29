import React from 'react';
import styled from 'styled-components';

import { Image } from '../../Image';
import { navbarData } from '../../../mock/data';

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
`;
const ListItem = styled.li``;
const ListItemLink = styled.a`
  color: var(--main-color);
  text-transform: capitalize;
  font-weight: 700;
  cursor: pointer;
`;
