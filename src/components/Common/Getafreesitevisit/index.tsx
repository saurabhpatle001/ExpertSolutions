'use client';
import { useState, useEffect } from 'react';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const [clickCount, setClickCount] = useState(0);
  const whatsappNumbers = ['9644400650', '8120197587'];
  const message = encodeURIComponent(
    'Hello Expert Solutions, we are interested in your service\n' +
    'Name:\n' +
    'City:\n' +
    'Address:\n' +
    'Square Feet:'
  );

  useEffect(() => {
    const storedCount = localStorage.getItem('whatsappClickCount');
    if (storedCount) {
      setClickCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleClick = () => {
    const newCount = (clickCount + 1) % whatsappNumbers.length;
    setClickCount(newCount);
    localStorage.setItem('whatsappClickCount', newCount.toString());
    const selectedNumber = whatsappNumbers[newCount];
    window.location.href = `https://wa.me/${selectedNumber}?text=${message}`;
  };

  return (
    <LinkTo
      style={{ padding: padding }}
      href="#"
      onClick={handleClick}
    >
      ✆ Get a free site visit
    </LinkTo>
  );
};

export default GetStartedButton;