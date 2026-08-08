'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6.25rem;

  background: #fcaf17;

  color: var(--white);

  font-size: 1rem;
  font-weight: 600;

  text-decoration: none;

  cursor: pointer;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    opacity: 0.8;
    transform: translateY(0);
  }
`;