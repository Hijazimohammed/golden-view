import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 732px;
  height: 385px;
  background: rgba(16, 20, 24, 0.7);
  padding: 38px 68px;
  gap: 2rem;
  @media (${devices.tabletL}) {
    width: 60%;
  }
  @media (${devices.tabletM}) {
    width: 95%;
    height: auto;
    padding: 2rem;
  }
`;
export const PersonalData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  .img-hero {
    width: 104;
    height: 98;
    border-radius: 50%;
    border: 1px solid #000;
  }
  .name {
    h3 {
      color: var(--section-subtitle);
    }
  }
`;
export const Paragraph = styled.p`
  width: 596px;
  height: 148px;
  color: var(--section-subtitle);
  font-size: var(--fz-m-small);
  letter-spacing: 2.08px;
  font-weight: normal;
  @media (${devices.tabletL}) {
    width: auto;
  }
  @media (${devices.tabletM}) {
    width: auto;
    height: auto;
  }
`;
