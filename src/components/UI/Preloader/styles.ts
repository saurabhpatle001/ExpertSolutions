'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: #d4d5d9;
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  gap: 1.5em; // Adjusted gap to avoid overlap
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  height: auto;
  transform: translateX(-0.5em); // Reduced shift to avoid overlap

  img {
    width: 25em;
    height: 25em;
    animation: rotate 1.4s ease-out forwards;
  }

  div[ref="waterRef"] {
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    max-width: fit-content; // Prevent text overflow

    div {
      font-weight: 400;
      font-size: calc(25em * 0.85); // Kept at 85% of image height
      display: inline-block; // Ensure horizontal alignment of characters
      margin: 0 0.1em; // Small spacing between characters
      position: relative;
      z-index: 1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(0, 119, 182, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
      z-index: 0;
      animation: waterWave 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes waterWave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    transform: translateX(-0.3em); // Adjusted shift for mobile
    img {
      width: 7rem;
      height: 7rem;
    }

    div[ref="waterRef"] {
      div {
        font-size: calc(7rem * 0.85); // 85% of 7rem ≈ 5.95rem, rounded to 6rem
        margin: 0 0.05em; // Adjusted spacing for mobile
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;