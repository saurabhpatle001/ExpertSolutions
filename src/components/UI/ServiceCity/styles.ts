'use client';
import { styled } from 'styled-components';
import card_grid from '../../../../public/images/card_grid.png';

export const Wrapper = styled.section`
  padding-top: 7.75rem;
  background-color: #1A2F25; /* Dark green background */
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  p {
    max-width: 41.75rem;
    color: #A9B7B0; /* Muted green-gray */
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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3-column layout */
  grid-template-rows: 1fr 1fr; /* 2-row layout */
  gap: 2rem;
  position: relative;
  margin-bottom: 6.25rem;

  .top {
    align-self: start;
  }

  .bottom {
    align-self: end;
  }

  .left {
    grid-column: 1;
    justify-self: start;
  }

  .right {
    grid-column: 3; /* Right-side cards remain in column 3 */
    grid-row: 1 / 3; /* Right-side cards span both rows */
    justify-self: end;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 10; /* Bring right-side cards to the forefront */
    position: relative; /* Ensure z-index applies */
  }

  .center {
    grid-column: 2;
    grid-row: 1 / 3; /* Center card spans both rows */
    justify-self: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;

    .top, .bottom, .left, .right, .center {
      grid-column: 1;
      grid-row: auto;
      justify-self: center;
      z-index: 0; /* Reset z-index on mobile to avoid overlap */
    }
  }
`;

export const Card = styled.div`
  height: 20rem;
  width: 100%;
  max-width: 20rem;
  border-radius: 1.5rem; /* Large rounded corners */
  background: #1E3A34; /* Dark teal */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Soft shadow */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem; /* Generous padding */
  color: #FFFFFF;

  @media (max-width: 768px) {
    height: 15rem;
    max-width: 100%;
    padding: 1.5rem;
  }
`;

export const CentralCard = styled.div`
  height: 42rem;
  width: 100%;
  max-width: 25rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: absolute;
  left: 50%;   /* Center horizontally */
  transform: translateX(-50%); /* Perfect horizontal centering */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none; /* Hide central card on mobile */
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2rem;
    color: #FFFFFF;
  }

  p {
    color: #A9B7B0; /* Muted green-gray */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const SVGCtn = styled.div`
  width: 4rem;
  height: 4rem;
  background: #FFFFFF;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
    filter: hue-rotate(30deg) brightness(1.5); /* Orange tint for pictogram */
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Stats = styled.div`
  margin: 6.25rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3.75rem auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    color: #FFFFFF;
  }

  p {
    color: #A9B7B0;
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  max-width: 1440px; // Constrain banner width to 1440px on desktop
  margin: 0 auto; // Center the banner
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 31.25rem; // 500px height
    width: 390px; // Adjusted mobile width to 530px (common mobile viewport)
    margin: 0 auto; // Center the banner
    img {
      object-fit: contain;
    }
  }
`;