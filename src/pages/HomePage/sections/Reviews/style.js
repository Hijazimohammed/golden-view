import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0;
  gap: 3rem;
  overflow-x: hidden;

  .review-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .review-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  &::-webkit-scrollbar {
    width: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(16, 20, 24, 0.7);
    border-radius: 10px;
    border: none;
  }
  @media (${devices.tabletL}) {
    .review-cards {
      width: 100%;
      height: auto;
      gap: 1rem;
    }
  }
`;
