'use client'

import { useEffect, useState } from 'react'
import { Wrapper, Card, Loader, ProgressBar } from './styles'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const ThankYou = () => {
  const [countdown, setCountdown] = useState(3)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  useEffect(() => {
    // Google Ads Contact Conversion
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18374080715/swq2CO_xkd4cEMvxuLlE',
        value: 1.0,
        currency: 'INR',
      })
    }

    // Get WhatsApp URL saved before redirecting to Thank You page
    const url = sessionStorage.getItem('whatsappUrl')

    if (!url) return

    setWhatsappUrl(url)

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)

          sessionStorage.removeItem('whatsappUrl')

          window.open(url, '_blank', 'noopener,noreferrer')

          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOpenWhatsapp = () => {
    if (!whatsappUrl) return

    sessionStorage.removeItem('whatsappUrl')

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Wrapper>
      <Card>
        <div>✓</div>

        <h1>Thank You!</h1>

        <h3>Your Inquiry Has Been Submitted Successfully.</h3>

        <p>
          Thank you for contacting <strong>Expert Solutions.</strong>
          <br />
          We are preparing your WhatsApp chat.
        </p>

        <Loader />

        <ProgressBar>
          <div />
        </ProgressBar>

        <span>
          Redirecting to WhatsApp in{' '}
          <strong>{countdown}</strong>{' '}
          second{countdown !== 1 ? 's' : ''}...
        </span>

        <p className="small">
          If WhatsApp doesn&apos;t open automatically, click below.
        </p>

        <button onClick={handleOpenWhatsapp}>
          Open WhatsApp Now
        </button>
      </Card>
    </Wrapper>
  )
}

export default ThankYou