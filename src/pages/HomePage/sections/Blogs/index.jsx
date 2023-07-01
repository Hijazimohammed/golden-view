import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { blogsData } from '../../../../mock/blogsData';
import { BlogsCard } from '../../../../components/BogsCard';
import { devices } from '../../../../components/Container/breakpoints';

export const Blogs = () => {
  return (
    <Section id='blogs'>
      <div className='blogs-text'>
        <SectionTitle center>Blogs</SectionTitle>
        <SectionSubTitle center>words from our food lovers</SectionSubTitle>
      </div>
      <div className='blogs-card'>
        {blogsData.map((d) => (
          <BlogsCard
            key={d.image}
            image={d.image}
            title={d.title}
            desc={d.desc}
            reversed={d.reversed}
          />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 95%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .blogs-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .blogs-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  @media (${devices.laptopM}) {
    .blogs-card {
      gap: 1rem;
    }
  }
  @media (${devices.tabletL}) {
    .blogs-card {
      gap: 0.5rem;
    }
  }
  @media (${devices.mobileM}) {
    .blogs-card {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
