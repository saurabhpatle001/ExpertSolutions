'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Edge, Edges, Title } from '../FreedomSection/styles';
import Advanced_Waterproofing from '../../../../public/images/Advanced Waterproofing.png';
import Custom_Heatproofing from '../../../../public/images/Custom Heatproofing.png';
import Durable_Roof_Coating from '../../../../public/images/Durable Roof Coating.png';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  Card,
  LeftImage,
  MiddleImage,
  RightImage,
  DotsContainer,
  Dot,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [manualSlideTimeout, setManualSlideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMobile) {
      let interval: NodeJS.Timeout;
      const startInterval = () => {
        interval = setInterval(() => {
          if (!manualSlideTimeout) {
            setCurrentSlide((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
          }
        }, 2500); // 2.5 seconds
      };
      startInterval();

      return () => {
        if (interval) clearInterval(interval);
        if (manualSlideTimeout) clearTimeout(manualSlideTimeout);
      };
    }
  }, [isMobile, manualSlideTimeout]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    if (manualSlideTimeout) {
      clearTimeout(manualSlideTimeout);
      setManualSlideTimeout(null);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const diff = touchStart - touchEnd;
      if (diff > 50) {
        setCurrentSlide((prev) => (prev + 1) % 3);
      } else if (diff < -50) {
        setCurrentSlide((prev) => (prev - 1 + 3) % 3);
      }
      setManualSlideTimeout(setTimeout(() => setManualSlideTimeout(null), 60000)); // 1 minute pause
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const images = [
    { src: Advanced_Waterproofing, alt: 'Advanced Waterproofing' },
    { src: Custom_Heatproofing, alt: 'Custom Heatproofing' },
    { src: Durable_Roof_Coating, alt: 'Durable Roof Coating' },
  ];

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer>
          {isMobile ? (
            <Card
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                position: 'relative',
                width: '200px',
                height: '315px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '600px', // 3 * 200px
                  height: '315px',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentSlide * 200}px)`,
                }}
              >
                {images.map((image, index) => (
                  <div key={index} style={{ width: '200px', height: '315px', position: 'relative' }}>
                    <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                  </div>
                ))}
              </div>
              <DotsContainer>
                {images.map((_, index) => (
                  <Dot key={index} active={index === currentSlide} />
                ))}
              </DotsContainer>
            </Card>
          ) : (
            <>
              <Card>
                <LeftImage>
                  <Image src={Advanced_Waterproofing} alt="Advanced Waterproofing" fill style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                </LeftImage>
              </Card>
              <Card>
                <MiddleImage>
                  <Image src={Custom_Heatproofing} alt="Custom Heatproofing" fill style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                </MiddleImage>
              </Card>
              <Card>
                <RightImage>
                  <Image src={Durable_Roof_Coating} alt="Durable Roof Coating" fill style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                </RightImage>
              </Card>
            </>
          )}
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt={edge.point} width={50} height={50} />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;