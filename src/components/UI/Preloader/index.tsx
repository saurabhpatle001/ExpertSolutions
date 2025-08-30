'use client';
import Image from 'next/image';
import ic_import from '../../../../public/images/logo.png';
import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['S', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const waterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Logo rotation animation
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)',
      duration: 1.4,
    });
    // Move logo and text up initially
    tl.to([imageRef.current, spans.current], {
      y: '-100%',
      ease: 'back.out(1.7)',
    }, '<');
    // Animate text characters with fade-in and scale-up
    tl.fromTo(
      spans.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        ease: 'back.out(1.7)',
        duration: 1.2,
        stagger: 0.05,
      },
      '<'
    );
    // Water wave animation on text
    tl.to(waterRef.current, {
      y: '-20px',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 1.5,
    }, '<');
    // Animate wrapper and overlay
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9,
    }, '<');
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div ref={waterRef}>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
                style={{ display: 'inline-block' }} // Ensure horizontal alignment
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;