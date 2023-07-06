import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { blogsData } from '../../../../mock/blogsData';
import { BlogsCard } from '../../../../components/BogsCard';
import { Section } from './style';

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
