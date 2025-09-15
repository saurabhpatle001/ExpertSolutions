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
    min-height: 100vh;
    background-image: url('/images/Service-background-2.png'); /* Changed from #2195f1 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
      display: none; // Hide custom slider on mobile/tablet
    }
  }

  .swiper-mobile {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .swiper-slide {
      width: 280px; // Reduced width for mobile view
      height: 400px;
      box-shadow: 0px 0px;
      filter: blur(1px);
      border-radius: 20px;
      background-image: url('/images/Service-background-2.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .swiper-slide-active {
      filter: blur(0px);
    }

    .swiper-pagination-bullet {
      background: #fff;
    }

    .swiper-pagination-bullet-active {
      background: #fff;
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
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400);

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 15px;
    padding: 25px 45px 0 25px;
    font-family: 'Roboto', sans-serif;
    z-index: 2;
    position: relative;
    background: rgba(35, 36, 38, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
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

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%; // Reduced width to scale down images
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    opacity: 1;
    z-index: 1;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-width: 260px;
    height: 370px;
  }

  @media (max-width: 768px) {
    min-width: 250px; // Reduced width for mobile view
    height: 400px;
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
  cursor: default;
  pointer-events: none;
`;