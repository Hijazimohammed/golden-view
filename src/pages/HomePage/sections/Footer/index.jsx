import React from 'react';
import AboutWebsite from '../../../../components/Footer/AboutWebsite';
import Links from '../../../../components/Footer/Links';
import ContactUs from '../../../../components/Footer/ContactUs';
import { Subscribe } from '../../../../components/Footer/Subscribe';
import { Copyright } from '../../../../components/Footer/Copyright';
import { Container, FooterSection } from './style';

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <AboutWebsite />
          <Links />
          <ContactUs />
        </Container>
      </FooterSection>
      <Subscribe />
      <Copyright />
    </>
  );
};

export default Footer;
