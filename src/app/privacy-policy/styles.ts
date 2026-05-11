'use client';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px 20px 100px;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #ffffff;           /* Main text color - White */
  background-color: #0f0f0f; /* Dark background */

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 20px 15px 80px;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;           /* White */
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const LastUpdated = styled.p`
  color: #bbbbbb;           /* Light Gray */
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Section = styled.section`
  margin-bottom: 2.8rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin: 2.2rem 0 1.2rem;
  color: #ffffff;           /* White */
  position: relative;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: #28a745; /* Green accent */
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1.3rem;
  color: #e0e0e0;           /* Off-White */
`;

export const List = styled.ul`
  margin-bottom: 1.6rem;
  padding-left: 1.6rem;

  li {
    margin-bottom: 0.7rem;
    color: #e0e0e0;         /* Off-White */
  }
`;

export const ContactInfo = styled.div`
  background-color: #1a1a1a;
  padding: 28px;
  border-radius: 10px;
  margin: 35px 0;
  border-left: 6px solid #28a745;
  color: #ffffff;

  strong {
    display: block;
    margin-bottom: 12px;
    font-size: 1.15rem;
    color: #ffffff;
  }

  a {
    color: #28a745;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterNote = styled.p`
  margin-top: 70px;
  font-size: 0.95rem;
  color: #aaaaaa;
  font-style: italic;
  text-align: center;
`;