'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
  const swiperRef = useRef<any>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isMobile && swiperRef.current && typeof swiperRef.current.slideTo === 'function') {
      swiperRef.current.slideTo(0); // Reset to first slide on mobile view change
    }
  }, [isMobile]);

  // Add loop for desktop slider
  useEffect(() => {
    if (!isMobile && !manualSlideTimeout) {
      slideIntervalRef.current = setInterval(() => {
        nextServiceSlide();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, [isMobile, manualSlideTimeout, nextServiceSlide]);

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
            transform: !isMobile ? `translateX(-${currentSlide * 20}%)` : `translateX(${currentPosition}px)`,
            transition: !isMobile ? 'transform 0.7s ease-in-out' : (manualSlideTimeout ? 'none' : 'transform 0.5s ease-in-out'),
            display: isMobile ? 'none' : 'flex',
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
        </div>
        {isMobile && (
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ thresholdDelta: 70 }}
            spaceBetween={60}
            loop={true}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
            className="swiper-mobile"
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <ServiceCard>
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
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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
        {isMobile && <div className="decorative-arrows"><span className="slide-text">Slide Card</span></div>}
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;