import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const Div = styled.div`
  width: 33.333%;
  height: 526.715px;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    height: 299px;
    object-fit: cover;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    h2 {
      color: var(--section-subtitle);
      font-size: 22px;
      line-height: 117.3%;
      text-transform: capitalize;
    }
    p {
      height: 68px;
      color: var(--section-subtitle);
      font-size: var(--fz-m-smal);
      font-weight: normal;
    }
    button {
      background-color: transparent;
      color: var(--white);
      border: none;
      outline: none;
      cursor: pointer;
      height: 25px;
      border-bottom: 1px solid rgba(255, 206, 109, 1);
    }
  }

  @media (${devices.laptopM}) {
    width: 30%;
  }
  @media (${devices.tabletM}) {
    div {
      gap: 3rem;
    }
  }
  @media (${devices.mobileM}) {
    width: 90%;

    height: auto;
    div {
      gap: 1rem;
    }
  }
`;
