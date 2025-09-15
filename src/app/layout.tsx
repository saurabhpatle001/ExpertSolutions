import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Expert Solutions | Indore\'s No.1 Waterproofing & Heatproofing Services',
  description: 'Expert Solutions, Indore\'s No.1 waterproofing and heatproofing company, offers top-tier waterproofing, heatproofing, roof coating, and rainwater harvesting services. Serving industries, warehouses, and big constructions across Indore, Bhopal, Ujjain, Jabalpur, Pune, Jaipur, Raipur, and all MP districts, Maharashtra, Rajasthan, Gujarat, Delhi, UP, Odisha, and Chhattisgarh. Eco-friendly, best-managed, with a strong client network. Call us now at 9644400650 for expert solutions!',
  keywords: 'indore\'sno1waterproofing, indore\'sno1rainwaterharvesting, indore\'sno1heatproofing, indore\'sno1roofcoating, indorewaterproofing, indoreheatproofing, indoreroofcoating, indorerainwaterharvesting, expertsolutionsindore, indoreexpertsolutions, bestwaterproofingserviceindore, topwaterproofingindore, premiumheatproofingindore, affordablewaterproofingindore, professionalroofcoatingindore, sustainableharvestingindore, bhopal\'sno1waterproofing, bhopal\'sno1rainwaterharvesting, bhopal\'sno1heatproofing, bhopal\'sno1roofcoating, bhopalwaterproofing, bhopalheatproofing, bhopalroofcoating, bhopalrainwaterharvesting, ujjain\'sno1waterproofing, ujjain\'sno1rainwaterharvesting, ujjain\'sno1heatproofing, ujjain\'sno1roofcoating, ujjainwaterproofing, ujjainheatproofing, ujjainroofcoating, ujjainrainwaterharvesting, jabalpur\'sno1waterproofing, jabalpur\'sno1rainwaterharvesting, jabalpur\'sno1heatproofing, jabalpur\'sno1roofcoating, jabalpurwaterproofing, jabalpurheatproofing, jabalpurroofcoating, jabalpurrainwaterharvesting, pune\'sno1waterproofing, pune\'sno1rainwaterharvesting, pune\'sno1heatproofing, pune\'sno1roofcoating, punewaterproofing, puneheatproofing, puneroofcoating, punerainwaterharvesting, jaipur\'sno1waterproofing, jaipur\'sno1rainwaterharvesting, jaipur\'sno1heatproofing, jaipur\'sno1roofcoating, jaipurwaterproofing, jaipurheatproofing, jaiplurroofcoating, jaipurrainwaterharvesting, raipur\'sno1waterproofing, raipur\'sno1rainwaterharvesting, raipur\'sno1heatproofing, raipur\'sno1roofcoating, raipurwaterproofing, raipurheatproofing, raipurroofcoating, raipurrainwaterharvesting, agarmalwa\'sno1waterproofing, agarmalwa\'sno1rainwaterharvesting, agarmalwa\'sno1heatproofing, agarmalwa\'sno1roofcoating, agarmalwawaterproofing, agarmalwaheatproofing, agarmalwaroofcoating, agarmalwarainwaterharvesting, alirajpur\'sno1waterproofing, alirajpur\'sno1rainwaterharvesting, alirajpur\'sno1heatproofing, alirajpur\'sno1roofcoating, alirajpurwaterproofing, alirajpurheatproofing, alirajpuroofcoating, alirajpurrainwaterharvesting, anuppur\'sno1waterproofing, anuppur\'sno1rainwaterharvesting, anuppur\'sno1heatproofing, anuppur\'sno1roofcoating, anuppurwaterproofing, anuppurheatproofing, anuppuroofcoating, anuppurrainwaterharvesting, ashoknagar\'sno1waterproofing, ashoknagar\'sno1rainwaterharvesting, ashoknagar\'sno1heatproofing, ashoknagar\'sno1roofcoating, ashoknagarwaterproofing, ashoknagarheatproofing, ashoknagarroofcoating, ashoknagarrainwaterharvesting',
  openGraph: {
    title: 'Expert Solutions | Indore\'s No.1 Waterproofing & Heatproofing',
    description: 'Indore\'s leading waterproofing and heatproofing experts, serving industries and warehouses across India with eco-friendly solutions. Contact us at 9644400650!',
    url: 'https://indorewaterproofing.com',
    siteName: 'Expert Solutions',
    images: [
      {
        url: 'https://indorewaterproofing.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Solutions | Indore\'s No.1 Waterproofing Experts',
    description: 'Eco-friendly waterproofing, heatproofing, and roof coating for big constructions. Call 9644400650 for top services across India!',
    images: ['https://indorewaterproofing.com/twitter-image.jpg'],
  },
};

const CallIcon = () => {
  return (
    <a href="tel:+919644400650" aria-label="Call Expert Solutions" style={{
      position: 'fixed',
      bottom: '52px',
      right: '41px',
      width: '53px',
      height: '53px',
      backgroundColor: '#28a745', // Green color
      borderRadius: '20%',         // Makes it round
      overflow: 'hidden',          // Ensures image corners stay inside
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.5)', // Rounded black shadow
      zIndex: 1000,
      textDecoration: 'none',
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src="/images/call.png"
          alt="Call Icon"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </a>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17536235395"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17536235395');
            `,
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
        <CallIcon />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Expert Solutions",
              alternateName: ["expertwaterproofingsolutions", "indoreexpertwaterproofingsolutions", "expertheatproofingsolutions", "experroofcoatingsolutions"],
              description: "Expert Solutions is Indore\'s #1 provider of waterproofing, heatproofing, roof coating, and rainwater harvesting services. Specializing in big constructions, industries, and warehouses with eco-friendly practices, best management, and a strong client network across India.",
              url: "https://indorewaterproofing.com",
              telephone: "+91-9644400650",
              address: {
                "@type": "PostalAddress",
                streetAddress: "32, Anurag Nagar, Gate no 2, Near Jain Mandir, Indore, Madhya Pradesh",
                addressLocality: "Indore",
                addressRegion: "Madhya Pradesh",
                postalCode: "452001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.7196,
                longitude: 75.8577,
              },
              sameAs: [
                "https://facebook.com/expertsolutionsindore",
                "https://instagram.com/expertsolutionsindore",
                "https://twitter.com/expertsolutionsin",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              areaServed: [
                "Indore",
                "Bhopal",
                "Ujjain",
                "Jabalpur",
                "Sagar",
                "Ratlam",
                "Rewa",
                "Balaghat",
                "Sehdol",
                "Singrauli",
                "Gwalior",
                "Pune",
                "Jaipur",
                "Udaipur",
                "Raipur",
                "Nagpur",
                "Mumbai",
                "Ahmedabad",
                "Surat",
                "Delhi",
                "Noida",
                "Lucknow",
                "Kanpur",
                "Bhubaneswar",
                "Cuttack",
                "Bilaspur",
                "Maharashtra",
                "Rajasthan",
                "Gujarat",
                "Uttar Pradesh",
                "Odisha",
                "Chhattisgarh",
                "Agar Malwa",
                "Alirajpur",
                "Anuppur",
                "Ashoknagar",
                "Balaghat",
                "Barwani",
                "Betul",
                "Bhind",
                "Bhopal",
                "Burhanpur",
                "Chhatarpur",
                "Chhindwara",
                "Damoh",
                "Datia",
                "Dewas",
                "Dhar",
                "Dindori",
                "Guna",
                "Gwalior",
                "Harda",
                "Hoshangabad",
                "Indore",
                "Jabalpur",
                "Jhabua",
                "Katni",
                "Khandwa",
                "Khargone",
                "Mandla",
                "Mandsaur",
                "Morena",
                "Narsinghpur",
                "Neemuch",
                "Panna",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rewa",
                "Sagar",
                "Satna",
                "Sehore",
                "Seoni",
                "Shahdol",
                "Shajapur",
                "Sheopur",
                "Shivpuri",
                "Sidhi",
                "Singrauli",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha",
              ],
              serviceType: "Waterproofing, Heatproofing, Roof Coating, Rainwater Harvesting",
              providesService: [
                {
                  "@type": "Service",
                  name: "Industrial Waterproofing",
                  description: "Expert waterproofing solutions for industries and warehouses.",
                },
                {
                  "@type": "Service",
                  name: "Heatproofing Services",
                  description: "Advanced heatproofing for large constructions.",
                },
                {
                  "@type": "Service",
                  name: "Roof Coating",
                  description: "Durable roof coating for industrial and commercial buildings.",
                },
                {
                  "@type": "Service",
                  name: "Rainwater Harvesting",
                  description: "Eco-friendly rainwater harvesting systems.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}