import {
  Container,
  Title,
  LastUpdated,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ContactInfo,
  FooterNote,
} from './styles';

export default function PrivacyPolicy() {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <LastUpdated>
        <strong>Last Updated:</strong> May 11, 2026
      </LastUpdated>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Expert Solutions (“we”, “us”, or “our”) operates{' '}
          <strong>indorewaterproofing.com</strong>. We are committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, and protect your information when you 
          visit our website or avail our waterproofing, heatproofing, and rainwater harvesting services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Information We Collect</SectionTitle>
        <List>
          <li>Name, phone number, email address, and property address</li>
          <li>Details about your waterproofing/heatproofing requirements</li>
          <li>Site visit photos and measurements (if provided)</li>
          <li>Technical data: IP address, browser type, cookies</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. How We Use Your Information</SectionTitle>
        <List>
          <li>To provide quotes and deliver waterproofing services</li>
          <li>To contact you regarding your project</li>
          <li>To improve our services and website experience</li>
          <li>For marketing (you can opt out anytime)</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Cookies</SectionTitle>
        <Paragraph>
          We use essential cookies for website functionality and analytics cookies to understand 
          visitor behavior.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Data Sharing</SectionTitle>
        <Paragraph>
          We do not sell your personal data. We may share information only with trusted contractors 
          for project execution or when legally required.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Your Rights</SectionTitle>
        <Paragraph>
          You can request access, correction, or deletion of your data by contacting us.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Contact Us</SectionTitle>
        <ContactInfo>
          <strong>Expert Solutions</strong>
          32, Anurag Nagar, Gate No. 2, Near Jain Mandir,<br />
          Indore, Madhya Pradesh 452001<br />
          Phone: <a href="tel:+919644400650">9644400650</a><br />
          Email: info.indorewaterproofing@gmail.com
        </ContactInfo>
      </Section>

      <FooterNote>
        This Privacy Policy may be updated from time to time. Please review it periodically.
      </FooterNote>
    </Container>
  );
}