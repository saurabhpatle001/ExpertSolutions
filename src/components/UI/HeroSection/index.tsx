'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  ParallaxImages,
  Navigation,
  DotContainer,
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import round_white_next from '../../../../public/svgs/round-white-next-icon.svg';
import round_white_prev from '../../../../public/svgs/round-white-prev-icon.svg';
import { Getafreesitevisit } from '@/components';
import MaskText from '@/components/Common/MaskText';
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
  mobileFeaturedSlides,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = isMobile
    ? mobileFeaturedSlides.map((src) => ({ src }))
    : [slide1, slide2, slide3];

  // useCallback to prevent ESLint warning
  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    [slides.length]
  );

  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    [slides.length]
  );

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Wrapper>
      <Inner $background={slides[currentSlide].src}>
        {currentSlide === 0 && (
          <>
            <Pill>
              <span>Introducing Expert Waterproofing Solutions</span>
              <Image src={ic_chevron_right} alt="chevron-right" />
            </Pill>
            <HeroTextContainer>
              {isMobile ? (
                <MaskText phrases={mobilePhrases} tag="h1" />
              ) : (
                <MaskText phrases={phrases} tag="h1" />
              )}
            </HeroTextContainer>
            <Getafreesitevisit padding="1rem 2rem" />
          </>
        )}
      </Inner>

      {/* Parallax Section */}
      <ParallaxImages>
        <ParallaxText baseVelocity={-4}>
          <Image src={companies_image} alt="companies" />
        </ParallaxText>
      </ParallaxImages>

      {/* Navigation Arrows (Desktop only) */}
      {!isMobile && (
        <Navigation>
          <Image
            src={round_white_prev}
            alt="previous"
            onClick={prevSlide}
            style={{ cursor: 'pointer', filter: 'brightness(0)' }}
          />
          <Image
            src={round_white_next}
            alt="next"
            onClick={nextSlide}
            style={{ cursor: 'pointer', filter: 'brightness(0)' }}
          />
        </Navigation>
      )}

      {/* Dots */}
      <DotContainer>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              background: currentSlide === index ? '#fff' : '#666',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </DotContainer>
    </Wrapper>
  );
};

export default HeroSection;
