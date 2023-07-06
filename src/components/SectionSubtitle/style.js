import styled from 'styled-components';
import { devices } from '../Container/breakpoints';

export const H3 = styled.h3`
  width: 694px;
  @media (${devices.laptopM}) {
    width: auto;
  }
`;
