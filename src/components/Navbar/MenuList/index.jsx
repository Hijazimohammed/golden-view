import React from 'react';
import { Image } from '../../Image';
import { navbarData } from '../../../mock/data';
import { List, ListItem, ListItemLink } from './style';

const SerchIcon = '/assets/search.svg';

export const Menu = () => {
  return (
    <List>
      {navbarData.map((d) => (
        <ListItem key={d.title}>
          <ListItemLink href={d.url}>{d.title}</ListItemLink>
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
