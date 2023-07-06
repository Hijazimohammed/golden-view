import styled from 'styled-components';
import { devices } from '../../Container/breakpoints';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h3 {
    text-transform: capitalize;
    color: var(--section-subtitle);
  }

  ul {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 240px;
    height: 146px;
    list-style-type: circle;
    list-style-position: inside;

    li {
      font-size: var(--fz-m-smal);
      color: var(--section-subtitle);
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
  }
  @media (${devices.tabletM}) {
    width: 100%;
    padding-left: 2rem;
  }
`;
