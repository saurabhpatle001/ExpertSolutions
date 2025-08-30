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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// Styles for the cards container, handling slider and overflow
interface CardsContainerProps {
  dataSlide?: number;
}

export const CardsContainer = styled.div<CardsContainerProps>`
  position: relative;
  flex: 1;
  overflow: hidden;
  padding-left: 0; // Reset padding to ensure first card is fully visible

  .cards-wrapper {
    display: flex;
    transition: transform 0.7s ease-in-out;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: row;
      transform: translateX(-${props => (props.dataSlide ?? 0) * 20}%) !important;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
      padding-bottom: 10px;
      min-height: 300px; // Ensure cards are fully visible
      padding-left: 0; // Ensure no cut-off on the left
      margin-left: 0; // Align first card to the start
    }
  }

  .dots-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px; // Adjusted for better spacing

    @media (min-width: 769px) {
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
    z-index: 2; // Place text in front of image
    position: relative;
    color: #cfb790; // Updated text color
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden; // Ensure image stays within bounds
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
    border-radius: 20px; // Match card's border-radius
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1; // Image behind text
  }

  @media (max-width: 768px) {
    min-width: 240px;
    height: 340px;
    margin-bottom: 0;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

// Styles for dot navigation in mobile view
interface DotProps {
  active?: boolean;
}

export const Dot = styled.span<DotProps>`
  width: 10px;
  height: 10px;
  background: ${props => (props.active ? '#f14950' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => (props.active ? '#f14950' : '#aaa')};
  }
`;