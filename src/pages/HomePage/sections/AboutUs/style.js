import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const Section = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (${devices.tabletM}) {
    flex-direction: column;
  }
`;
export const RightDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (${devices.tabletM}) {
    width: 100%;
  }
`;
export const LeftDiv = styled.div`
  width: 40%;
  img {
    width: 100%;
  }

  @media (${devices.laptopM}) {
    width: 35%;
  }
  @media (${devices.tabletM}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    img {
      width: 90%;
    }
  }
`;
