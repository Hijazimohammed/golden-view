import styled from 'styled-components';
import { devices } from '../../Container/breakpoints';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (${devices.laptopM}) {
    gap: 30px;
  }
  @media (${devices.tabletL}) {
    gap: 20px;
  }

  @media (${devices.tabletM}) {
    gap: 10px;
    padding: 1rem 0;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const ListItem = styled.li``;
export const ListItemLink = styled.a`
  color: var(--main-color);
  text-transform: capitalize;
  font-weight: 700;
  cursor: pointer;
`;
