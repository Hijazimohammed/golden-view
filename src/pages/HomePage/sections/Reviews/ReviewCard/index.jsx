import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../../../components/Image';

const star = window.location.origin + '/assets/star.svg';
export const ReviewCard = ({ image, name, stars, desc }) => {
  const listStars = [];
  for (let index = 0; index < stars; index++) {
    listStars[index] = star;
  }
  return (
    <Div>
      <PersonalData>
        <Image className='img-hero' ImageSrc={image} title={name} />
        <div className='name'>
          <h3>{name}</h3>
          <div>
            {listStars.map((s, index) => (
              <Image ImageSrc={star} key={index} />
            ))}
          </div>
        </div>
      </PersonalData>
      <Paragraph>{desc}</Paragraph>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 732px;
  height: 385px;
  background: rgba(16, 20, 24, 0.7);
  padding: 38px 68px;
  gap: 2rem;
`;
const PersonalData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  .img-hero {
    width: 104;
    height: 98;
    border-radius: 50%;
    border: 1px solid #000;
  }
  .name {
    h3 {
      color: var(--section-subtitle);
    }
  }
`;
const Paragraph = styled.p`
  width: 596px;
  height: 148px;
  color: var(--section-subtitle);
  font-size: var(--fz-m-small);
  letter-spacing: 2.08px;
  font-weight: normal;
`;
