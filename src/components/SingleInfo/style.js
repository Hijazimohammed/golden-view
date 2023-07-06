import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    width: 80;
    height: 80;
  }
  .text {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: var(--fz-xxlarge);
    }
    span {
      color: var(--section-subtitle);
      text-align: center;
      text-transform: capitalize;
    }
  }
  @media (${devices.mobileM}) {
    gap: 1rem;
    .text {
      width: 150px;
    }
  }
`;
