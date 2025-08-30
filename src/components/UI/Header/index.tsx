'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/images/logo2.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { Getafreesitevisit } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 60; // Adjust this value based on your actual header height
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after navigation
    }
  };

  return (
    <Wrapper style={{ top: isVisible ? '0' : '-100px', transition: 'top 0.3s' }}>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" width={90} height={56} priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink
              key={i}
              title={link.linkTo}
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.url)}
            />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Login" />
          <Getafreesitevisit padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;