import React from 'react';
import { Header } from './sections/Header';
import styled from 'styled-components';
import { AboutUs } from './sections/AboutUs';
import { Special } from './sections/Special';

const mainBackground = window.location.origin + '/assets/main-background.gif';
export const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <AboutUs />
        <Special />
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
