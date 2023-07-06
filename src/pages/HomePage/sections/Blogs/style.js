import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const Section = styled.section`
  width: 95%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .blogs-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .blogs-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  @media (${devices.laptopM}) {
    .blogs-card {
      gap: 1rem;
    }
  }
  @media (${devices.tabletL}) {
    .blogs-card {
      gap: 0.5rem;
    }
  }
  @media (${devices.mobileM}) {
    .blogs-card {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
