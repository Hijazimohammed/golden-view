import React from 'react';
import { Header } from './sections/Header';
import styled from 'styled-components';
import { AboutUs } from './sections/AboutUs';
import { Special } from './sections/Special';
import { OurMenu } from './sections/Menu';
import { JounUS } from './sections/JoinUs';
import { Cooking } from './sections/Cooking';
import { Info } from './sections/Info';
import { Reviews } from './sections/Reviews';
import { Blogs } from './sections/Blogs';
import Footer from './sections/Footer';

const mainBackground = window.location.origin + '/assets/main-background.gif';
export const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <AboutUs />
        <Special />
        <OurMenu />
        <JounUS />
        <Cooking />
        <Info />
        <Reviews />
        <Blogs />
        <Footer />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  background-image: url(${mainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
