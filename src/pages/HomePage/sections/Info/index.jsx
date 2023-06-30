import React from 'react';
import styled from 'styled-components';
import { infoData } from '../../../../mock/infoData';
import { SingleInfo } from '../../../../components/SingleInfo';
import { devices } from '../../../../components/Container/breakpoints';

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
  @media (${devices.tabletL}) {
    .info {
      width: 85%;
    }
  }
  @media (${devices.mobileM}) {
    height: auto;
    padding: 2rem 0;
    .info {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
