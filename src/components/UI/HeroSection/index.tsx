'use client';

import Image from 'next/image';

import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  HeroSubtitle,
  HeroBenefits,
  HeroActions,
  CallButton,
  ParallaxImages,
  Navigation,
  DotContainer,
} from './styles';

import round_white_next from '../../../../public/svgs/round-white-next-icon.svg';
import round_white_prev from '../../../../public/svgs/round-white-prev-icon.svg';

import MaskText from '@/components/Common/MaskText';
import { Getafreesitevisit } from '@/components';

import { useIsMobile } from '../../../../libs/useIsMobile';

import ParallaxText from '@/components/Common/ParallaxImages';

import companies_image from '../../../../public/images/companies.png';

import slide1 from '../../../../public/images/slide1.jpg';
import slide2 from '../../../../public/images/slide2.jpg';
import slide3 from '../../../../public/images/slide4.jpg';

import { useState, useEffect, useCallback } from 'react';

import {
  mobilePhrases,
  phrases,
  mobileParagraphPhrases,
  paragraphPhrases,
  mobileFeaturedSlides,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = isMobile
    ? mobileFeaturedSlides.map((src) => ({ src }))
    : [
        { src: slide1.src },
        { src: slide2.src },
        { src: slide3.src },
      ];

  /*
   * Slide timing:
   *
   * Slide 1 = 8 seconds
   * Slide 2 = 5 seconds
   * Slide 3 = 5 seconds
   *
   * Slide 1 gets extra time because it contains:
   * - Location
   * - Main heading
   * - Subtitle
   * - Benefits
   * - WhatsApp CTA
   * - Call CTA
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  /*
   * Automatic slide timing
   *
   * First slide:
   * Desktop = 8 seconds
   * Mobile = 9 seconds
   *
   * Other slides:
   * Desktop = 5 seconds
   * Mobile = 5 seconds
   */
  useEffect(() => {
    const slideDuration =
      currentSlide === 0
        ? isMobile
          ? 9000
          : 8000
        : 5000;

    const timeout = setTimeout(() => {
      nextSlide();
    }, slideDuration);

    return () => clearTimeout(timeout);
  }, [currentSlide, isMobile, nextSlide]);

  return (
    <Wrapper>
      <Inner $background={slides[currentSlide].src}>
        {currentSlide === 0 && (
          <>
            <Pill>
              <span>📍 Serving Indore & Nearby Areas</span>
            </Pill>

            <HeroTextContainer>
              {isMobile ? (
                <MaskText phrases={mobilePhrases} tag="h1" />
              ) : (
                <MaskText phrases={phrases} tag="h1" />
              )}

              <HeroSubtitle>
                {isMobile
                  ? mobileParagraphPhrases[0]
                  : paragraphPhrases[0]}
              </HeroSubtitle>

              <HeroBenefits>
                <span>✓ Free Site Inspection</span>
                <span>✓ Transparent Quote</span>
                <span>✓ Warranty Available</span>
              </HeroBenefits>

              <HeroActions>
                <Getafreesitevisit padding="1rem 2rem" />

                <CallButton href="tel:+919993337967">
                  ☎ Call Now
                </CallButton>
              </HeroActions>
            </HeroTextContainer>
          </>
        )}
      </Inner>

      {/* Parallax Section */}
      <ParallaxImages>
        <ParallaxText baseVelocity={-4}>
          <Image
            src={companies_image}
            alt="Companies and clients served by Expert Waterproofing Solutions"
          />
        </ParallaxText>
      </ParallaxImages>

      {/* Navigation Arrows - Desktop only */}
      {!isMobile && (
        <Navigation>
          <Image
            src={round_white_prev}
            alt="Previous waterproofing project"
            onClick={prevSlide}
            style={{
              cursor: 'pointer',
              filter: 'brightness(0)',
            }}
          />

          <Image
            src={round_white_next}
            alt="Next waterproofing project"
            onClick={nextSlide}
            style={{
              cursor: 'pointer',
              filter: 'brightness(0)',
            }}
          />
        </Navigation>
      )}

      {/* Slide Dots */}
      <DotContainer>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setCurrentSlide(index);
              }
            }}
            style={{
              width: '10px',
              height: '10px',
              background:
                currentSlide === index ? '#fff' : '#666',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </DotContainer>
    </Wrapper>
  );
};

export default HeroSection;