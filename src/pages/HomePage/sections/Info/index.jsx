import React from 'react';
import { infoData } from '../../../../mock/infoData';
import { SingleInfo } from '../../../../components/SingleInfo';
import { Section } from './style';

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
