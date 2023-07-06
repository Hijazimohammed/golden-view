import React from 'react';
import { Header } from './sections/Header';
import { AboutUs } from './sections/AboutUs';
import { Special } from './sections/Special';
import { OurMenu } from './sections/Menu';
import { JounUS } from './sections/JoinUs';
import { Cooking } from './sections/Cooking';
import { Info } from './sections/Info';
import { Reviews } from './sections/Reviews';
import { Blogs } from './sections/Blogs';
import Footer from './sections/Footer';
import { Main } from './style';

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
      </Main>
      <Footer />
    </>
  );
};
