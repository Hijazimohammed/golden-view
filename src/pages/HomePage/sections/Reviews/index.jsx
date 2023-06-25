import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { ReviewData } from '../../../../mock/data';
import { ReviewCard } from './ReviewCard';

export const Reviews = () => {
  return (
    <Section>
      <div className='review-text'>
        <SectionTitle center>Reviews</SectionTitle>
        <SectionSubTitle center>words from our food lovers</SectionSubTitle>
      </div>
      <div className='review-cards'>
        {ReviewData.map((r, index) => (
          <ReviewCard
            key={index}
            image={r.image}
            name={r.name}
            stars={r.stars}
            desc={r.desc}
          />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 3rem;
  /* overflow-x: auto; */
  overflow-x: hidden;

  .review-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .review-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    /* margin-left: 55rem; */
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(16, 20, 24, 0.7);
    border-radius: 10px;
    border: none;
  }
`;
