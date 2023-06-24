import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { specialData } from '../../../../mock/special';
import { Card } from './Card';

export const Special = () => {
  return (
    <Section>
      <div className='special-text'>
        <SectionTitle center>Special</SectionTitle>
        <SectionSubTitle center>What makes us special</SectionSubTitle>
      </div>
      <Cards>
        {specialData.map((d) => (
          <Card key={d.title} icon={d.icon} title={d.title} desc={d.desc} />
        ))}
      </Cards>
    </Section>
  );
};

const Section = styled.section`
  background: rgba(16, 20, 24, 0.7);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
  gap: 3rem;
  .special-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
  flex-wrap: wrap;
`;
