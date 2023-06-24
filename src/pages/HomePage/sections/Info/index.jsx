import React from 'react';
import styled from 'styled-components';
import { infoData } from '../../../../mock/data';
import { SingleInfo } from './SingleInfo';

export const Info = () => {
  return (
    <Section>
      <div className='info'>
        {infoData.map((info) => (
          <SingleInfo
            key={info.number}
            icon={info.icon}
            number={info.number}
            desc={info.desc}
          />
        ))}
      </div>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  height: 192px;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
