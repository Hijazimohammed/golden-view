import React, { useState } from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { ReviewData } from '../../../../mock/reviewData';
import { ReviewCard } from '../../../../components/ReviewCard';
import { Section } from './style';

export const Reviews = () => {
  const [data, setData] = useState(ReviewData);
  const [index, setIndex] = useState(0);
  const [row, setRow] = useState(data[index]);

  const next = () => {
    if (index < data.length - 1) {
      setRow(data[index + 1]);
      setIndex(index + 1);
    } else {
      setIndex(0);
      setRow(data[0]);
    }
  };
  const prev = () => {
    if (index > 0) {
      setRow(data[index - 1]);
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
      setRow(data[data.length - 1]);
    }
  };
  return (
    <Section>
      <div className='review-text'>
        <SectionTitle center>Reviews</SectionTitle>
        <SectionSubTitle center>words from our food lovers</SectionSubTitle>
      </div>
      <div className='review-cards'>
        <svg
          onClick={prev}
          stroke='white'
          fill='#ffce6d'
          viewBox='0 0 24 24'
          height='3rem'
          width='3rem'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z'></path>
        </svg>
        <ReviewCard
          image={row.image}
          name={row.name}
          stars={row.stars}
          desc={row.desc}
        />
        <svg
          onClick={next}
          stroke='white'
          fill='#ffce6d'
          viewBox='0 0 24 24'
          height='3rem'
          width='3rem'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z'></path>
        </svg>
      </div>
    </Section>
  );
};
