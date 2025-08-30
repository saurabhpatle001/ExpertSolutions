'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { ServicesContainer, CardsContainer, ServiceCard } from './styles';
import { services } from './constants';

const OurWork = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const isMobile = useIsMobile();
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardWidth = 250; // Match min-width and max-width of ServiceCard
  const totalCards = services.length * 2; // Double length for infinite loop
  const totalWidth = cardWidth * totalCards; // Total width of duplicated cards
  const cycleWidth = cardWidth * services.length; // Width of one full cycle
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isTouching, setIsTouching] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  let animationInterval: NodeJS.Timeout;

  useEffect(() => {
    animationInterval = setInterval(() => {
      if (!isTouching) {
        setCurrentPosition((prev) => {
          const newPosition = prev + 2; // Faster increment for speed
          return newPosition % totalWidth; // Loop back smoothly using modulo
        });
      }
    }, 30); // 30ms interval for smooth animation

    // Play videos after mount
    videoRefs.current.forEach((video) => {
      if (video) {
        video
          .play()
          .catch((error) => console.error('Video play failed:', error));
      }
    });

    const handleTouchStart = (e: TouchEvent) => {
      if (isMobile) {
        setTouchStart(e.touches[0].clientX);
        setIsTouching(true);
        clearInterval(animationInterval); // Pause animation during touch
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isMobile && touchStart !== null) {
        const touchMove = e.touches[0].clientX;
        const diff = touchStart - touchMove;
        setCurrentPosition((prev) => {
          const newPosition = prev + diff;
          return newPosition % totalWidth; // Allow free scrolling with looping
        });
        setTouchStart(touchMove); // Update touch start for continuous sliding
      }
    };

    const handleTouchEnd = () => {
      if (isMobile && touchStart !== null) {
        setIsTouching(false);
        setTouchStart(null);
        animationInterval = setInterval(() => {
          if (!isTouching) {
            setCurrentPosition((prev) => {
              const newPosition = prev + 2;
              return newPosition % totalWidth;
            });
          }
        }, 30); // Resume animation after touch ends
      }
    };

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
      clearInterval(animationInterval);
    };
  }, [isMobile, totalWidth, touchStart, isTouching]);

  return (
    <ServicesContainer id="our-works" className="section">
      <h2>Our Works Gallery</h2>
      <CardsContainer>
        <div
          className="cards-wrapper"
          ref={cardsWrapperRef}
          style={{
            transform: `translateX(${-(currentPosition % cycleWidth)}px)`,
            transition: 'transform 10s linear', // Consistent 10s animation
          }}
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard key={index}>
              <div className="image-container">
                {service.type === 'image' ? (
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                    className="card-image"
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={service.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                    className="card-image"
                    onError={(e) => console.error('Video error:', e)}
                  />
                )}
              </div>
            </ServiceCard>
          ))}
        </div>
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurWork;