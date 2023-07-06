import styled from 'styled-components';
import { devices } from '../../../../components/Container/breakpoints';

export const Section = styled.section`
  width: 100%;
  height: 328px;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .join-us {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        transform: translate(100px, 6px);
      }
    }
    .images2 {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        transform: translate(0px, 6px);
      }
    }
    .join-text {
      padding-top: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
    }
  }
  @media (${devices.tabletL}) {
    .join-us {
      .images {
        img {
          transform: translate(200px, -3px);
        }
      }
      .images2 {
        img {
          transform: translate(-100px, 6px);
        }
      }
    }
  }
  @media (${devices.tabletM}) {
    .join-us {
      .images {
        img {
          transform: translate(260px, -3px);
        }
      }
      .images2 {
        img {
          transform: translate(-175px, 6px);
        }
      }
    }
  }
  @media (${devices.mobileM}) {
    .join-us {
      .images {
        img {
          display: none;
        }
      }
      .images2 {
        img {
          display: none;
        }
      }
    }
  }
`;
