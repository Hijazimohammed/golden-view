import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 4rem;
  background: rgba(16, 20, 24, 0.7);
  p {
    color: var(--white);
    font-size: var(--fz-small);
    font-weight: 400;
    line-height: 24px;
  }
`;
