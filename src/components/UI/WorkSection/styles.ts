'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section`
  background-color: #8b9b8a; /* Changed to light gray background for whole section */
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 3rem; /* Reduced margin for mobile */
    width: 95%; /* Slightly wider to accommodate smaller screens */
  }
`;

export const Header = styled.header``;

export const ImageCtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem; /* Match card's border-radius */
  }

  @media (max-width: 768px) {
    height: 100%; /* Ensure full height on mobile */
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  margin-bottom: 2rem;

  &:nth-child(3) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    gap: 0.5rem; /* Minimal gap to fit horizontally */
    margin-bottom: 1rem;
    &:nth-child(3) {
      margin-top: 1rem;
      justify-content: space-between; /* Maintain horizontal layout */
    }
  }
`;

interface OfferCardProps {
  flexSize?: number;
  isLastCard?: boolean; // Add this prop to indicate the last card
}

// First Row, First Card ("Indore's No. 1 Waterproofing")
export const FirstRowFirstCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 2};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.flexSize ? props.flexSize : 2)}; /* Maintain desktop flex ratio */
  }
`;

// First Row, Second Card ("Rainwater Harvesting")
export const FirstRowSecondCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 1};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.flexSize ? props.flexSize : 1)}; /* Maintain desktop flex ratio */
  }
`;

// Second Row, First Card ("Eco-Friendly Solutions")
export const SecondRowFirstCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 1};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.flexSize ? props.flexSize : 1)}; /* Maintain desktop flex ratio */
  }
`;

// Second Row, Second Card ("5 Years Warranty")
export const SecondRowSecondCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 2};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.flexSize ? props.flexSize : 2)}; /* Maintain desktop flex ratio */
  }
`;

// Second Row, Third Card ("Reliable Maintenance")
export const SecondRowThirdCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 1};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.flexSize ? props.flexSize : 1)}; /* Maintain desktop flex ratio */
  }
`;

// Third Row, First Card ("7-Layer Waterproofing")
export const ThirdRowFirstCard = styled.div<OfferCardProps>`
  overflow: hidden;
  height: 25.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${(props) => props.flexSize || 1};

  @media (max-width: 768px) {
    height: 15rem; /* Reduced height for mobile */
    flex: ${(props) => (props.isLastCard ? 1 : props.flexSize ? props.flexSize : 1)}; /* Maintain desktop flex ratio */
    width: auto; /* Remove full width to maintain horizontal flow */
  }
`;