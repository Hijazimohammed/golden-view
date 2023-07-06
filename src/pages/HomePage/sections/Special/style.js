import styled from 'styled-components';

export const Section = styled.section`
  background: rgba(16, 20, 24, 0.7);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 3rem;
  .special-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
  flex-wrap: wrap;
`;
