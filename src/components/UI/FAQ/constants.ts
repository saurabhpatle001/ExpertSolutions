type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is the 7-layer waterproofing process?',
    answer: 'Our 7-layer waterproofing process includes thorough surface cleaning, crack filling, priming, and the application of multiple high-quality waterproofing coats, ensuring maximum protection against water ingress.',
  },
  {
    question: 'How long does the waterproofing last?',
    answer: 'We offer a 5-year warranty on our waterproofing solutions, guaranteeing long-lasting durability and effective protection against leaks and moisture damage.',
  },
  {
    question: 'Do you serve areas outside Madhya Pradesh?',
    answer: 'Yes, we extend our waterproofing and heatproofing services to major cities across India, including Pune, Jaipur, Mumbai, and Delhi, tailored to your location.',
  },
  {
    question: 'What is heatproofing?',
    answer: 'Heatproofing involves applying specialized reflective and insulating coatings to reduce heat absorption, helping to keep interiors cooler, enhance comfort, and improve energy efficiency.',
  },
  {
    question: 'What materials are used in your waterproofing solutions?',
    answer: 'We use premium materials such as polymer-based membranes, acrylic sealants, and polyurethane coatings, selected for their durability and effectiveness in various weather conditions.',
  },
  {
    question: 'How can I prepare my property for waterproofing?',
    answer: 'To prepare, clear the area of debris, repair visible cracks, and ensure proper drainage. Our team will also conduct a detailed inspection before starting the process.',
  },
  {
    question: 'Is heatproofing suitable for all types of buildings?',
    answer: 'Yes, our heatproofing solutions are adaptable for residential, commercial, and industrial buildings, with customized applications based on structure type and climate.',
  },
];