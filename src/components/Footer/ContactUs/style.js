import styled from 'styled-components';
import { devices } from '../../Container/breakpoints';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  h3 {
    text-transform: capitalize;
    color: var(--section-subtitle);
    padding-top: 1.5rem;
  }
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 1.5rem;
    .contact-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img {
        width: 32px;
        height: 32px;
      }
      .text {
        font-size: var(--fz-m-smal);
        color: var(--section-subtitle);
        font-weight: 400;
        letter-spacing: 2px;
        line-height: 155.3%;
        text-transform: capitalize;
      }
    }
  }
  @media (${devices.tabletM}) {
    width: 100%;
    padding-left: 2rem;
  }
`;
