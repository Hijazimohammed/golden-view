import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../../components/Image';
import { Button } from '../../../../components/Button';

const right = window.location.origin + '/assets/joinUs-right.png';
const left = window.location.origin + '/assets/join-us-left.png';

export const JounUS = () => {
  return (
    <Section>
      <div className='join-us'>
        <div className='images'>
          <Image ImageSrc={right} />
        </div>
        <div className='join-text'>
          <h2 className='joinUs-title'>
            Come join us for a lunch this weekend and enjoy
          </h2>
          <h3 className='joinUs-subTitle'>FLAT 10% OFF</h3>
          <Button
            text='Book Table'
            border='joinus-border'
            width='md'
            height='height55'
          />
        </div>
        <div className='images2'>
          <Image ImageSrc={right} />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 328px;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  .join-us {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .images {
      background: url(${left});
      background-position-x: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        transform: translate(0px, -3px);
      }
    }
    .images2 {
      background: url(${left});
      display: flex;
      justify-content: center;
      align-items: flex-start;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        transform: translate(-100px, -3px);
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
`;
