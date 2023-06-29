import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';

export const Card = ({ icon, title, desc }) => {
  return (
    <CardContainer>
      <Image ImageSrc={icon} title={title} />
      <h3 className='card-title'>{title}</h3>
      <p className='card-paragraph'>{desc}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 384px;
  height: 455px;
  border: 1px dashed var(--border-card);
  background: var(--background-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .card-title {
    color: var(--section-subtitle);
    font-size: var(--fz-md);
  }
  .card-paragraph {
    width: 268px;
    color: var(--section-subtitle);
    text-align: justify;
    font-size: var(--fz-small);
    line-height: 155.3%;
    letter-spacing: 1.82px;
  }
`;
