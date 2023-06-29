import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image';

export const BlogsCard = ({ image, title, desc, reversed }) => {
  return (
    <Div className={`${reversed ? 'column-reverse' : 'fdc '}`}>
      <Image ImageSrc={image} />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>Read more</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 410px;
  height: 526.715px;
  background: rgba(16, 20, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 411px;
    height: 299px;
    object-fit: cover;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    h2 {
      color: var(--section-subtitle);
      font-size: 22px;
      line-height: 117.3%;
      text-transform: capitalize;
    }
    p {
      width: 302px;
      height: 68px;
      color: var(--section-subtitle);
      font-size: var(--fz-m-smal);
      font-weight: normal;
    }
    button {
      background-color: transparent;
      color: var(--white);
      border: none;
      outline: none;
      cursor: pointer;
      height: 25px;
      border-bottom: 1px solid rgba(255, 206, 109, 1);
    }
  }
`;
