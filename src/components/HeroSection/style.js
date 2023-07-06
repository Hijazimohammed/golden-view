import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: var(--fz-headline);
      color: var(--border-color);
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      text-transform: capitalize;
    }
  }
  p {
    color: var(--white);
  }
  @media (${devices.mobileM}) {
    p {
      width: auto;
      padding: 0 1rem;
      text-align: center;
    }
  }
`;
