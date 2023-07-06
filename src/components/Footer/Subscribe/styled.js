import styled from 'styled-components';
import { devices } from '../../Container/breakpoints';

export const Div = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: space-evenly;
  .text-icon {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    h2 {
      font-size: var(--fz-mmd);
      color: var(--section-subtitle);
      text-transform: capitalize;
    }
  }
  form {
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      width: 407px;
      height: 55px;
      background: transparent;
      outline: none;
      padding: 1rem;
      color: var(--section-subtitle);
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    button {
      color: var(--section-subtitle);
      font-size: var(--fz-mmd);
    }
  }
  @media (${devices.tabletM}) {
    padding: 1rem 0;
    height: auto;
    flex-direction: column;
    gap: 1rem;
  }
  @media (${devices.mobileM}) {
    form {
      width: 100%;
      align-items: center;
      justify-content: center;
      input {
        width: 50%;
      }
      button {
        width: 40%;
      }
    }
  }
`;
