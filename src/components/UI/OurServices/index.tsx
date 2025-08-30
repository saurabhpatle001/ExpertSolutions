'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { ServicesContainer, TextContainer, CardsContainer, ServiceCard, SliderArrow, Dot } from './styles';
import { services } from './constants';

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const nextServiceSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevServiceSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleImageClick = (link: string) => {
    window.location.href = link;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && cardsWrapperRef.current) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;
      if (deltaX > 50) nextServiceSlide(); // Swipe left to next
      else if (deltaX < -50) prevServiceSlide(); // Swipe right to previous
      touchStartX.current = null;
    }
  };

  useEffect(() => {
    if (isMobile && cardsWrapperRef.current) {
      const wrapper = cardsWrapperRef.current;
      wrapper.addEventListener('touchstart', handleTouchStart as any);
      wrapper.addEventListener('touchmove', handleTouchMove as any);
      return () => {
        wrapper.removeEventListener('touchstart', handleTouchStart as any);
        wrapper.removeEventListener('touchmove', handleTouchMove as any);
      };
    }
  }, [isMobile]);

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
            transform: `translateX(-${currentSlide * 20}%)`,
            transition: 'transform 0.7s ease-in-out',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} className={index === currentSlide ? 'active' : ''}>
              <h3>{service.title}</h3>
              <div className="image-container" onClick={() => handleImageClick(service.link)}>
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
          <div className="dots-container">
            {services.slice(0, 4).map((_, index) => (
              <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        )}
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;