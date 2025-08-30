'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  Wrapper,
  SectionContent,
  ContactContainer,
  ContactForm,
  InquiryForm,
  ContactImage,
  FreeCapContainer,
  ContactInfo
} from './styles'
import { formFields } from './constants'

interface FormData {
  name: string
  mobile: string
  pincode: string
  city: string
  area: string
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    pincode: '',
    city: '',
    area: ''
  })
  const isMobile = useIsMobile()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const currentDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '') // Format: DD/MM/YYYY, HH:MM AM/PM
    const whatsappMessage = `Hey Experts, I'm interested in your services%0A%0A**Here are my details:**%0A**Name:** ${formData.name}%0A**Contact No:** ${formData.mobile}%0A**Pin:** ${formData.pincode}%0A**Address:** ${formData.city}%0A**Area Sq. Feet:** ${formData.area} sq ft%0A%0A**Submitted on:** ${currentDate} IST`
    const whatsappUrl = `https://wa.me/8120197587?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Wrapper id="contact">
      <SectionContent>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-envelope"></i> Contact Us
        </motion.h2>
        <ContactContainer>
          <ContactForm>
            <FreeCapContainer>
              <Image src="/images/free.png" alt="Free Offer" width={120} height={90} className="free-cap-image" />
              <p>Register for a free site visit or get a free quote!</p>
            </FreeCapContainer>
            <InquiryForm onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <motion.input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleInputChange}
                  required
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
              <motion.button
                type="submit"
                className="hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: formFields.length * 0.1 }}
                viewport={{ once: true }}
              >
                <i className="fab fa-whatsapp"></i> Send Inquiry via WhatsApp
              </motion.button>
            </InquiryForm>
            <ContactInfo>
              <p>Contact us at: 32, Anurag Nagar, Gate no 2, Near Jain Mandir, Indore, Madhya Pradesh</p>
              <p>Phone: <a href="tel:+919644400650">9644400650</a></p>
            </ContactInfo>
          </ContactForm>
          <ContactImage>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src="/images/why-choose-us.png" alt="Why Choose Us" width={500} height={400} />
            </motion.div>
          </ContactImage>
        </ContactContainer>
      </SectionContent>
    </Wrapper>
  )
}

export default ContactUs