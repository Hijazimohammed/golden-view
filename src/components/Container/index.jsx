import React from 'react';
import styled from 'styled-components';
import { devices } from './breakpoints';

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (${devices.laptopL}) {
    width: 80%;
  }
  @media (${devices.laptopM}) {
    width: 85%;
  }
  @media (${devices.tabletM}) {
    width: 90%;
  }
  @media (${devices.mobileM}) {
    width: 95%;
  }
  @media (${devices.mobileM}) {
    width: 98%;
  }
`;

export default Container;
