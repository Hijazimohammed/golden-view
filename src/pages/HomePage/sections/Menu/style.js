import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 3rem;

  .menu-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MenuDiv = styled.div`
  width: 90%;
  height: 601px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (${devices.laptopM}) {
    width: 95%;
  }
  @media (${devices.tabletL}) {
    width: 99%;
  }
  @media (${devices.tabletM}) {
    height: auto;
  }
`;
