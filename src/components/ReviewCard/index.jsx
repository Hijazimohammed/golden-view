import React from 'react';
import { Image } from '../Image';
import { Div, Paragraph, PersonalData } from './style';

const star = '/assets/star.svg';
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
      <Paragraph>
        <q>{desc}</q>
      </Paragraph>
    </Div>
  );
};
