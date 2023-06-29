import React from 'react';
import styled from 'styled-components';
import { devices } from './breakpoints';

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (${devices.mobileS}) {
    width: 98%;
  }
  @media (${devices.mobileM}) {
    width: 95%;
  }
  @media (${devices.tablet}) {
    width: 90%;
  }
  @media (${devices.laptopM}) {
    width: 85%;
  }
  @media (${devices.laptopL}) {
    width: 80%;
  }
`;

export default Container;
