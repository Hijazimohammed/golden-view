import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { blogsData } from '../../../../mock/blogsData';
import { BlogsCard } from '../../../../components/BogsCard';

export const Blogs = () => {
  return (
    <Section>
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
  width: 80%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
