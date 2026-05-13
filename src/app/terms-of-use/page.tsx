import {
  Container,
  Title,
  LastUpdated,
  Section,
  SectionTitle,
  Paragraph,
  List,
  FooterNote,
} from '../privacy-policy/styles';   // Reusing same styles

export default function TermsOfUse() {
  return (
    <Container>
      <Title>Terms of Use</Title>
      <LastUpdated>
        <strong>Last Updated:</strong> May 13, 2026
      </LastUpdated>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing or using indorewaterproofing.com, you agree to be bound by these Terms of Use. 
          If you do not agree, please do not use our website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Our Services</SectionTitle>
        <Paragraph>
          Expert Solutions provides waterproofing, heatproofing, roof coating, and rainwater harvesting services 
          using our proprietary chemical solutions designed to protect roofs and structures from water leakage and heat.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Quotations &amp; Contracts</SectionTitle>
        <List>
          <li>All quotations are valid for 15 days unless specified otherwise.</li>
          <li>Final scope of work will be confirmed after site inspection.</li>
          <li>Any changes in scope may result in revised pricing.</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Payment Terms</SectionTitle>
        <List>
          <li>50% advance at the time of booking</li>
          <li>40% after material delivery and work commencement</li>
          <li>10% after successful completion and handover</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Warranty</SectionTitle>
        <Paragraph>
          We provide warranty on workmanship and our specialized chemicals as per the agreement. 
          Warranty is valid only when full payment is received and annual maintenance is followed.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Limitation of Liability</SectionTitle>
        <Paragraph>
          Our liability is limited to the value of the services provided. We are not responsible for any indirect, 
          consequential, or incidental damages.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Governing Law</SectionTitle>
        <Paragraph>
          These terms shall be governed by the laws of India, and any disputes shall be subject to the exclusive 
          jurisdiction of courts in Indore, Madhya Pradesh.
        </Paragraph>
      </Section>

      <FooterNote>
        These Terms of Use may be updated from time to time. Continued use of our website after changes constitutes acceptance of the new terms.
      </FooterNote>
    </Container>
  );
}