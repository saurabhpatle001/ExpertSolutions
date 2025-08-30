import { StaticImageData } from 'next/image';
// import arjun_sharma from '../../../../public/images/arjun_sharma.png';
// import priya_mehta from '../../../../public/images/priya_mehta.png';
// import rahul_verma from '../../../../public/images/rahul_verma.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData | null;
};

export const testimonials = [
  {
    testimony:
      "Expert Waterproofing Solutions saved my home and factory from monsoon leaks in Indore! As Indore's No.1 Waterproofing Service, their team was professional, and the coating works everywhere—homes, industries, and more. Highly recommend!",
    person: 'Rakesh Agrawal',
    avatar: null,
  },
  {
    testimony:
      "I’m so thankful to Expert Heatproofing Solutions. The temperature in my industrial unit and house has dropped significantly, making summers bearable. Excellent service across Indore and beyond!",
    person: 'Sneha Bohra',
    avatar: null,
  },
  {
    testimony:
      "Expert Roofcoating Solutions has transformed my commercial building and home. No more cracks or leaks, suitable for all setups. Their tailored approach is perfect for Indian weather, especially in Indore!",
    person: 'Vikram Mehta',
    avatar: null,
  },
  {
    testimony:
      "The heatproofing by Expert Heatproofing Solutions has been a game-changer for my office and warehouse in Delhi. Indore's No.1 Waterproofing Service extends its expertise everywhere—highly satisfied!",
    person: 'Amit Mittal',
    avatar: null,
  },
  {
    testimony:
      "Expert Waterproofing Solutions and Roofcoating Solutions are top-notch. My home and industrial site in Chennai are now protected from heavy rains, with Indore’s leading service delivering quick and reliable results.",
    person: 'Priya Jain',
    avatar: null,
  },
  {
    testimony:
      "Their rainwater harvesting system installed at my warehouse in Pune is exceptional. Expert Solutions’ eco-friendly approach and strong client network make them the best in Indore and across India!",
    person: 'Rajesh Gupta',
    avatar: null,
  },
  {
    testimony:
      "Expert Solutions handled my industrial waterproofing project in Jaipur flawlessly. Their expertise in big constructions and warehouses is unmatched, with top-notch management and service.",
    person: 'Suresh Tiwari',
    avatar: null,
  },
  {
    testimony:
      "The roof coating for my factory in Ujjain was done perfectly by Expert Roofcoating Solutions. Their network and client base reflect their reliability across Madhya Pradesh and beyond!",
    person: 'Kunal Parmar',
    avatar: null,
  },
  {
    testimony:
      "Expert Heatproofing Solutions made my warehouse in Raipur comfortable. Indore’s leading service delivered eco-friendly results with a professional team—highly recommended!",
    person: 'Vijay Panwar',
    avatar: null,
  },
];

export const desktopHeaderPhrase = ['Trusted by Thousands of Indians'];