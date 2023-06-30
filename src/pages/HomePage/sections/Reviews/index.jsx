import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { ReviewData } from '../../../../mock/reviewData';
import { ReviewCard } from '../../../../components/ReviewCard';
import { devices } from '../../../../components/Container/breakpoints';

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
  }

  &::-webkit-scrollbar {
    width: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(16, 20, 24, 0.7);
    border-radius: 10px;
    border: none;
  }
  @media (${devices.tabletM}) {
    .review-cards {
      width: 95%;
      flex-direction: column;
    }
  }
`;
