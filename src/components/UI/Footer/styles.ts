'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 2rem;
  background-color: #1a1a1a; /* Dark background for contrast */
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #efefef; /* Light text for readability */

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const FooterLogo = styled.div`
  img {
    width: 10rem;
    height: 4rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      width: 7rem;
      height: 2.8rem;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1.5rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 1.5rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 768px) {
    min-width: auto;
    h3 {
      font-size: 0.875rem;
    }
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    color: #efefef;
    font-size: 0.875rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -3px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    li {
      font-size: 0.75rem;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  border-top: 0.0625rem solid #3d3d3d;
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    width: 0.875rem;
    height: 0.875rem;
  }

  @media (max-width: 768px) {
    gap: 0.375rem;

    h3 {
      font-size: 0.75rem;
    }

    img {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.375rem;

  img {
    width: 0.875rem;
    height: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    gap: 0.25rem;

    img {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
`;