'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 6.25rem;

  padding-top: 60px;

  position: relative;

  min-height: 120vh;

  background-color: #070606;

  overflow: hidden;
`;

export const Inner = styled.div<{ $background: string }>`
  background: url(${(props) => props.$background}) no-repeat;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  max-width: 100rem;

  height: 100vh;

  margin: 0 auto;

  text-align: center;

  background-position: center center;

  background-size: cover;

  border-radius: 1rem;

  transform: translateY(-13%);

  position: relative;

  overflow: hidden;

  &::before {
    content: '';

    position: absolute;

    inset: 0;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.32),
      rgba(0, 0, 0, 0.55)
    );

    z-index: 0;
  }

  > * {
    position: relative;

    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 90vh;

    min-height: 650px;

    background-position: center center;

    border-radius: 0.75rem;

    transform: translateY(-8%);
  }
`;

export const Pill = styled.div`
  display: flex;

  padding: 0.45rem 1rem;

  justify-content: center;

  align-items: center;

  border-radius: 6.25rem;

  border: 1px solid rgba(255, 255, 255, 0.45);

  background: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(10px);

  margin-bottom: 1.25rem;

  span {
    color: #ffffff;

    font-size: 1rem;

    font-weight: 500;

    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;

    margin-bottom: 0.8rem;

    span {
      font-size: 0.8rem;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 1rem;

  padding: 0 1rem 5rem;

  transform: translateY(2rem);

  width: 100%;

  h1 {
    max-width: 75rem;

    margin: 0;

    color: #ffffff;

    font-size: 5.5rem;

    line-height: 1.05;

    font-weight: 500;

    text-shadow:
      0 2px 10px rgba(0, 0, 0, 0.45),
      0 4px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;

    padding: 0 1rem 4rem;

    transform: translateY(1.5rem);

    h1 {
      max-width: 100%;

      font-size: 2.6rem;

      line-height: 1.1;

      font-weight: 500;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const HeroSubtitle = styled.p`
  max-width: 52rem;

  margin: 0;

  color: #ffffff;

  font-size: 1.6rem;

  line-height: 1.5;

  font-weight: 400;

  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 95%;

    font-size: 1.05rem;

    line-height: 1.5;
  }

  @media (max-width: 400px) {
    font-size: 0.98rem;
  }
`;

export const HeroBenefits = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 0.7rem 1.5rem;

  margin-top: 0.5rem;

  span {
    color: #ffffff;

    font-size: 1rem;

    font-weight: 500;

    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);

    white-space: nowrap;
  }

  @media (max-width: 768px) {
    gap: 0.5rem 0.9rem;

    padding: 0 0.5rem;

    span {
      font-size: 0.82rem;

      white-space: normal;
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 1rem;

  margin-top: 1.25rem;

  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.7rem;

    padding: 0 0.5rem;

    margin-top: 1rem;
  }
`;

export const CallButton = styled.a`
  display: inline-flex;

  justify-content: center;

  align-items: center;

  min-height: 52px;

  padding: 1rem 2rem;

  border-radius: 6.25rem;

  border: 1px solid rgba(255, 255, 255, 0.4);

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(10px);

  color: #ffffff;

  font-size: 1rem;

  font-weight: 600;

  text-decoration: none;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);

    transform: translateY(-1px);
  }

  &:active {
    opacity: 0.8;

    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;

    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 100%;

    max-width: 360px;

    min-height: 50px;

    padding: 0.9rem 1.25rem;

    font-size: 0.95rem;
  }
`;

export const ParallaxImages = styled.div`
  position: relative;

  max-width: 60rem;

  margin: 6rem auto 0;

  background-color: #070606;

  @media (max-width: 768px) {
    max-width: 30rem;

    margin-top: 8rem;
  }
`;

export const Navigation = styled.div`
  position: absolute;

  top: 40%;

  left: 2rem;

  right: 2rem;

  display: flex;

  justify-content: space-between;

  z-index: 10;

  img {
    width: 40px;

    height: 40px;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DotContainer = styled.div`
  position: absolute;

  bottom: calc(30vh - 4rem);

  left: 50%;

  transform: translateX(-50%);

  display: flex;

  align-items: center;

  z-index: 10;

  span {
    transition:
      transform 0.2s ease,
      background 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }

    &:focus-visible {
      outline: 2px solid #ffffff;

      outline-offset: 3px;
    }
  }
`;