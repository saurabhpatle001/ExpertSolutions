'use client'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'

// Note: Ensure these CSS variables are defined in your global CSS (e.g., :root or a theme file)
// Fallback values are provided here
export const Wrapper = styled.section`
  background: var(--contact-bg, #8b9b8a); /* Fallback color */
  padding: 60px 0;
  /* Debug: Check if background is applied */
  border: 1px solid red; /* Temporary debug border */
`

export const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--pink, #fce4ec); /* Fallback color */
    position: relative;
    z-index: 10;

    i {
      color: var(--pink, #fce4ec); /* Fallback color */
      margin-right: 12px;
    }
  }
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  /* Remove mobile stack, keep side-by-side */
  @media (max-width: 1024px) {
    flex-direction: row; /* Force row layout */
    align-items: stretch; /* Stretch items to match height */
  }

  @media (max-width: 768px) {
    flex-direction: row; /* Force row layout on mobile */
    align-items: stretch; /* Stretch items */
  }

  @media (max-width: 480px) {
    flex-direction: row; /* Force row layout */
    align-items: stretch; /* Stretch items */
  }
`

export const ContactForm = styled.div`
  flex: 1;
  max-width: 600px; /* Limit form width */
  padding-right: 10px; /* Small spacing */

  @media (max-width: 1024px) {
    max-width: 50%; /* Reduce width on tablet */
    padding-right: 5px;
  }

  @media (max-width: 768px) {
    max-width: 45%; /* Further reduce on mobile */
    padding-right: 5px;
    font-size: 0.9em; /* Slightly smaller text */
  }

  @media (max-width: 480px) {
    max-width: 40%; /* Even smaller on small mobile */
    font-size: 0.8em; /* Smaller text */
  }
`

export const InquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0;
  gap: 12px; /* Reduced gap */
  background: var(--contact-bg, #8b9b8a); /* Fallback color */
  padding: 15px; /* Reduced padding */
  border-radius: 8px;

  input {
    padding: 10px; /* Reduced padding */
    font-size: 0.9em; /* Smaller input text */
    border: 1px solid var(--yellow, #e1b152); /* Fallback color */
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: var(--navy, #2c2c5c); /* Fallback color */
      box-shadow: 0 0 5px rgba(44, 44, 92, 0.3);
      outline: none;
    }
  }

  button {
    background: var(--whatsapp, #25D366); /* Fallback color */
    color: var(--white, #FFFFFF); /* Fallback color */
    padding: 10px; /* Reduced padding */
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em; /* Smaller font */
    font-weight: 500;
    width: 100%;
    max-width: 250px; /* Reduced max width */
    margin: 0 auto;

    i {
      margin-right: 8px; /* Reduced margin */
    }

    &:hover {
      background: var(--whatsapp-hover, #1ebe57); /* Fallback color */
    }
  }

  @media (max-width: 1024px) {
    gap: 10px; /* Further reduced gap */
    padding: 12px; /* Reduced padding */
  }

  @media (max-width: 768px) {
    gap: 8px; /* Even smaller gap */
    padding: 10px; /* Smaller padding */
  }

  @media (max-width: 480px) {
    gap: 6px; /* Smallest gap */
    padding: 8px; /* Smallest padding */
  }
`

export const ContactImage = styled.div`
  flex: 1;
  background: var(--contact-bg, #8b9b8a); /* Fallback color */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  max-height: 400px;
  margin-top: 0;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    height: 350px; /* Slightly smaller on tablet */
    max-height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px; /* Smaller on mobile */
    max-height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px; /* Smallest on small mobile */
    max-height: 250px;
  }
`

export const FreeCapContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Reduced margin */

  img.free-cap-image {
    width: 120px;
    height: 90px;
    object-fit: contain;
    margin-right: 10px;
  }

  p {
    color: var(--white, #FFFFFF); /* Fallback color */
    margin-left: 10px;
    font-size: 1.1em;
    flex: 1;
  }

  @media (max-width: 1024px) {
    margin-bottom: 12px;
    img.free-cap-image {
      width: 100px;
      height: 75px;
    }
    p {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    img.free-cap-image {
      width: 90px;
      height: 67.5px;
    }
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;
    img.free-cap-image {
      width: 80px;
      height: 60px;
    }
    p {
      font-size: 0.8em;
    }
  }
`

export const ContactInfo = styled.div`
  margin-top: 15px; /* Reduced margin */

  p {
    color: var(--white, #FFFFFF); /* Fallback color */
    font-size: 1em;
    margin: 6px 0; /* Reduced margin */
    text-align: left;

    a {
      color: var(--yellow, #e1b152); /* Fallback color */
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 12px;
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    p {
      font-size: 0.8em;
    }
  }

  @media (max-width: 480px) {
    margin-top: 8px;
    p {
      font-size: 0.7em;
    }
  }
`