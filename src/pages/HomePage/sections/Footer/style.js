import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const FooterSection = styled.footer`
  width: 100%;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (${devices.tabletM}) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (${devices.laptopM}) {
    width: 85%;
  }
  @media (${devices.tabletL}) {
    width: 90%;
  }
`;
