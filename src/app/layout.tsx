import type { Metadata } from "next";
import { Inter, Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranabalvir Group | Building Trust. Driving Growth.",
  description: "Ranabalvir Group Private Limited — Sustainable recycling, scrap metal processing, industrial waste management, and materials trading.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ranabalvir Group Private Limited",
  url: "https://ranabalvirgroup.com",
  logo: "https://ranabalvirgroup.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9457141414",
    contactType: "customer service"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rana Bhawan, Village Wazidpur Khurd",
    addressLocality: "Khatauli, Dist. Muzaffarnagar",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.linkedin.com/company/ranabalvirgroup"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${spaceMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
