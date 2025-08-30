'use client';
import { styled } from 'styled-components';

// Styles for the main container, including the "Our Works Gallery" title
export const ServicesContainer = styled.section`
  background-image: url('/images/Service-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0; // Prevent extra space at bottom
  min-width: 320px; // Minimum width for mobile
  width: 100%; // Full-width background

  h2 {
    font-size: 2.5em;
    font-weight: 700;
    color: #FFD700; // Golden color
    margin-bottom: 30px;
    text-align: center;
  }

  .content-wrapper {
    max-width: 1440px;
    width: 100%;
  }
`;

// Styles for the cards container, handling slider and overflow
export const CardsContainer = styled.div`
  position: relative;
  flex: 1;
  padding-left: 0; // Reset padding to ensure first card is fully visible
  max-width: 1440px; // Constrain animation area to 1440px
  width: 100%; // Ensure full width within content wrapper
  overflow: hidden; // Hide overflow to prevent cards from showing outside

  .cards-wrapper {
    display: flex;
    gap: 20px;
    width: 200%; // Ensure space for duplicated cards
    flex-shrink: 0; // Prevent shrinking
  }
`;

// Styles for individual service cards, including background and rounding
export const ServiceCard = styled.div`
  min-width: 250px; // Consistent width for desktop and mobile
  height: 370px;
  max-height: 370px; // Apply maximum height
  max-width: 250px; // Apply maximum width
  background: #232426;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 0 11.11%; // 100% / 9 for 9 cards

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; // Ensure media stays within bounds
  }

  .card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px; // Match card's border-radius
    z-index: 1; // Media in front
  }
`;