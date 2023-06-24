import React from 'react';
import { Header } from './sections/Header';
import styled from 'styled-components';

const mainBackground = window.location.origin + '/assets/main-background.png';
export const HomePage = () => {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${mainBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;
