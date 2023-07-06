import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const P = styled.p`
  width: 568px;
  @media (${devices.laptopM}) {
    width: auto;
  }
`;
