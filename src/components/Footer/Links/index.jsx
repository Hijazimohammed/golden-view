import React from 'react';
import { links } from '../../../mock/footer';
import { Div } from './style';

const Links = () => {
  return (
    <Div>
      <h3>other links</h3>
      <ul>
        {links.map((link) => (
          <li key={link.text}>{link.text}</li>
        ))}
      </ul>
    </Div>
  );
};

export default Links;
