'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  ServicesContainer,
  TextContainer,
  CardsContainer,
  ServiceCard,
  SliderArrow,
} from './styles';
import { services } from './constants';

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [manualSlideTimeout, setManualSlideTimeout] = useState<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  const nextServiceSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, []);

  const prevServiceSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const handleImageClick = useCallback((link: string) => {
    window.location.href = link;
  }, []);

  const slideSpeed = 0.4; // Slow speed for constant sliding

  const animate = useCallback(() => {
    if (!isMobile || !cardsWrapperRef.current) return;
    setCurrentPosition((prev) => {
      const newPos = prev - slideSpeed;
      const maxScroll = cardsWrapperRef.current!.scrollWidth - cardsWrapperRef.current!.clientWidth;
      return newPos;
    });
    animationRef.current = requestAnimationFrame(animate);
  }, [isMobile, slideSpeed]);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (manualSlideTimeout) {
        clearTimeout(manualSlideTimeout);
        setManualSlideTimeout(null);
      }
    },
    [manualSlideTimeout]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (touchStartX.current !== null && cardsWrapperRef.current) {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;
        cardsWrapperRef.current.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
        cardsWrapperRef.current.style.transform = `translateX(${currentPosition - deltaX}px)`;
      }
    },
    [currentPosition]
  );

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current !== null && cardsWrapperRef.current) {
      const touchEndX = touchStartX.current;
      const deltaX = touchStartX.current - (touchEndX - (cardsWrapperRef.current.getBoundingClientRect().left || 0));
      setCurrentPosition((prev) => prev - deltaX); // Unlimited sliding
      cardsWrapperRef.current.style.transition = 'transform 0.5s ease-in-out'; // Ensure smooth end
      setManualSlideTimeout(
        setTimeout(() => {
          setManualSlideTimeout(null);
          animationRef.current = requestAnimationFrame(animate);
        }, 30000)
      );
    }
    touchStartX.current = null;
  }, [animate]);

  useEffect(() => {
    if (isMobile && !manualSlideTimeout) {
      animationRef.current = requestAnimationFrame(animate);
    }
    const wrapper = cardsWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('touchstart', handleTouchStart);
      wrapper.addEventListener('touchmove', handleTouchMove);
      wrapper.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('touchstart', handleTouchStart);
        wrapper.removeEventListener('touchmove', handleTouchMove);
        wrapper.removeEventListener('touchend', handleTouchEnd);
      }
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (manualSlideTimeout) clearTimeout(manualSlideTimeout);
    };
  }, [isMobile, manualSlideTimeout, animate, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <ServicesContainer id="our-services" className="section">
      <TextContainer>
        <h1>Our Services</h1>
      </TextContainer>
      <CardsContainer>
        {!isMobile && (
          <SliderArrow className="left" onClick={prevServiceSlide}>
            <Image
              src="/svgs/round-white-prev-icon.svg"
              alt="Previous"
              width={30}
              height={30}
            />
          </SliderArrow>
        )}
        <div
          className="cards-wrapper"
          ref={cardsWrapperRef}
          style={{
            transform: isMobile
              ? `translateX(${currentPosition}px)`
              : `translateX(-${currentSlide * 20}%)`,
            transition: isMobile
              ? manualSlideTimeout
                ? 'none'
                : 'transform 0.5s ease-in-out'
              : 'transform 0.7s ease-in-out',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              className={!isMobile && index === currentSlide ? 'active' : ''}
            >
              <h3>{service.title}</h3>
              <div
                className="image-container"
                onClick={() => handleImageClick(service.link)}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '20px' }}
                  className="card-image"
                />
              </div>
            </ServiceCard>
          ))}
          {isMobile &&
            services.map((service) => (
              <ServiceCard key={`${service.title}-dup`}>
                <h3>{service.title}</h3>
                <div
                  className="image-container"
                  onClick={() => handleImageClick(service.link)}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                    className="card-image"
                  />
                </div>
              </ServiceCard>
            ))}
        </div>
        {!isMobile && (
          <SliderArrow className="right" onClick={nextServiceSlide}>
            <Image
              src="/svgs/round-white-next-icon.svg"
              alt="Next"
              width={30}
              height={30}
            />
          </SliderArrow>
        )}
        {isMobile && (
  <div className="decorative-arrows">
    <span className="slide-text">Slide Card</span>
  </div>
)}

      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;