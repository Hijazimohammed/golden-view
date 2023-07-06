import React from 'react';
import { Image } from '../../../../components/Image';
import { SectionTitle } from '../../../../components/SectionTitle';
import { SectionSubTitle } from '../../../../components/SectionSubtitle';
import { SectionParagraph } from '../../../../components/SectionParagraph';
import { Button } from '../../../../components/Button';
import Container from '../../../../components/Container';
import { LeftDiv, RightDiv, Section } from './style';

const AboutImage = '/assets/about-us.png';
export const AboutUs = () => {
  return (
    <Container id='about-us'>
      <Section>
        <RightDiv>
          <SectionTitle>About Us</SectionTitle>
          <SectionSubTitle>
            Discover the taste of worldclass vegan dishes from the kitchen of Go
            Green Dine
          </SectionSubTitle>
          <SectionParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
            orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
            purus nunc tellus pellentesque nibh mattis. Malesuada integer
            consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie
            maecenas interdum pharetra id velit sed nec.tetur sit sagittis
            pretium eget vitae semper pellentesque pellentesque.
          </SectionParagraph>
          <Button
            text='Read more'
            border='hero-btn-border'
            width='md'
            height='h-44'
            m='mt-2'
          />
        </RightDiv>
        <LeftDiv>
          <Image ImageSrc={AboutImage} title='about us image' />
        </LeftDiv>
      </Section>
    </Container>
  );
};
