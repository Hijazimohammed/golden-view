import React from 'react';
import styled from 'styled-components';
import AboutWebsite from '../../../../components/Footer/AboutWebsite';
import Links from '../../../../components/Footer/Links';
import ContactUs from '../../../../components/Footer/ContactUs';
import { Subscribe } from '../../../../components/Footer/Subscribe';
import { Copyright } from '../../../../components/Footer/Copyright';

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
const FooterSection = styled.footer`
  width: 100%;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Footer;
