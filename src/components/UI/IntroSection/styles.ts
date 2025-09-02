'use client';
import { styled, css } from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3.77rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 0.0rem;
  }
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  background-color: #fff;
  width: 250px;
  height: 393px;
  overflow: hidden;
  position: relative;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 220px;
    height: 346px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 315px;
  }
`;

export const LeftImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > * {
    border-radius: 0.5rem;
  }
`;

export const MiddleImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > * {
    border-radius: 0.5rem;
  }
`;

export const RightImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > * {
    border-radius: 0.5rem;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#8a6f49' : '#9b8153')};
`;