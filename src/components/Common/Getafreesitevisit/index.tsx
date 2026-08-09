'use client';

import { LinkTo } from './styles';
import { trackWhatsAppConversion } from '@/lib/googleAds';

const WHATSAPP_NUMBER = '919993337967';

const message = encodeURIComponent(
  `Hello Expert Solutions, we are interested in your service

Name:
City:
Address:
Square Feet:
Waterproofing Requirement:`
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

const GetStartedButton = ({
  padding,
}: {
  padding: string;
}) => {
  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <LinkTo
      style={{ padding }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
    >
      ✆ Get a free site visit
    </LinkTo>
  );
};

export default GetStartedButton;