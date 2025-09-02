'use client';
import { styled } from 'styled-components';

// Styles for the main container, setting background and layout
export const ServicesContainer = styled.section`
  background-image: url('/images/Service-background-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 10px;
    text-align: center;
  }
`;

// Styles for the "Colour Tools" text container, positioning and color
export const TextContainer = styled.div`
  flex: 0 0 200px;
  display: flex;
  align-items: center;
  margin-right: 40px;

  h1 {
    font-size: 3em;
    font-weight: 700;
    color: #b2a18e;
    margin: 0;
  }

  @media (max-width: 1024px) {
    flex: 0 0 auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// Styles for the cards container, handling slider and overflow
export const CardsContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  padding-left: 0;

  .cards-wrapper {
    display: flex;
    gap: 20px;

    @media (max-width: 1024px) {
      min-height: 340px; // Match mobile card height
    }
  }

  .decorative-arrows {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;

    @media (min-width: 1025px) {
      display: none;
    }
  }
`;

// Styles for individual service cards, including background and rounding
export const ServiceCard = styled.div`
  min-width: 260px;
  height: 370px;
  background: #232426;
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 10px;
    z-index: 2;
    position: relative;
    color: #cfb790;
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
  }

  &:hover .card-image {
    opacity: 1;
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;

    @media (max-width: 1024px) {
      opacity: 1; // No hover effect on mobile/tablet
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 260px;
    height: 370px;
  }

  @media (max-width: 768px) {
    min-width: 240px;
    height: 340px;
  }
`;

// Styles for slider arrows, using local SVGs with better positioning
export const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Styles for the slide text
export const slideText = styled.span`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  opacity: 0.7;
  cursor: default; // No interaction
  pointer-events: none; // Disable click events
`;