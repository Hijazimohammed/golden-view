import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { specialData } from '../../../../mock/specialData';
import { Card } from '../../../../components/SpecialCard';
import { Cards, Section } from './style';

export const Special = () => {
  return (
    <Section id='special'>
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
