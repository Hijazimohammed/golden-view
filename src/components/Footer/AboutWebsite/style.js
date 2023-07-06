import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .logo-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h3 {
      color: var(--border-color);
      padding-bottom: 1rem;
    }
  }

  p {
    padding-left: 2rem;
    font-size: var(--fz-m-smal);
    color: var(--section-subtitle);
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 155.3%;
    text-transform: capitalize;
  }
  .icons {
    padding-left: 2rem;

    display: flex;
    gap: 1rem;
    img {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }
  }
`;
