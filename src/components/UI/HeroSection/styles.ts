'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/slide1.jpg';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  padding-top: 60px;
  position: relative;
  min-height: 120vh; /* Increased to accommodate companies_image */
  background-color: #070606; /* Black background for the entire section */
`;

export const Inner = styled.div<{ $background: string }>`
  background: url(${(props) => props.$background}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100rem; /* Increased width from 80rem to 100rem - Adjusted for slide1.jpg */
  height: 100vh; /* Increased height from 80vh to 100vh - Adjusted for slide1.jpg */
  margin: 0 auto;
  text-align: center;
  background-position: center -10%; /* Adjusted to shift upward by 10% from center - Attempt to fix positioning */
  background-size: 100% 100%;
  border-radius: 1rem; /* Added slight curve to corners */
  transform: translateY(-13%); /* Added offset to shift content upward - Attempt to fix positioning */
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;
  transform: translateY(2rem); /* Moved upward by 2rem - Adjusted for Introducing Raft cards */

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  transform: translateY(2rem); /* Moved downward by 2rem - Adjusted for text block */

  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    transform: translateY(1.5rem); /* Adjusted downward by 1.5rem for mobile */
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 60rem; /* Reduced width for better centering */
  margin: 6rem auto 0; /* Shifted further down */
  background-color: #070606; /* Black background for companies_image */

  @media (max-width: 768px) {
    max-width: 30rem; /* Further reduced width on mobile */
    margin-top: 8rem; /* Shifted more down on mobile */
  }
`;

export const Navigation = styled.div`
  position: absolute;
  top: 40%; /* Shifted upward from 50% - Adjusted for SVGs */
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
    display: none; /* Hide arrows on mobile */
  }
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: calc(30vh - 4rem); /* Shifted upward from calc(100vh - 2rem) - Adjusted for dots */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 10;

  span {
    width: 10px;
    height: 10px;
    background: #666;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }

  .active {
    background: #fff;
  }
`;