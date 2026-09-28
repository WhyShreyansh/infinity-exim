import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { COMPANY_DATA } from "@/data/company";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

const playfair = Playfair_Display({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infinityexim.com"),
  title: "INFINITY EXIM | Global Trade, Commodities & Logistics",
  description:
    "INFINITY EXIM connects international buyers with commodities sourced from India, backed by practical export, logistics and freight coordination.",
  keywords: [
    "INFINITY EXIM",
    "Commodity Sourcing India",
    "Salt Export India",
    "Bentonite Export",
    "Silica Sand Export",
    "Basmati Rice Export",
    "Mundra Port Exporters",
    "India B2B Trade House",
    "Logistics and Freight Support Mundra"
  ],
  authors: [{ name: "INFINITY EXIM" }],
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: ["/images/logo.png"],
    apple: ["/images/logo.png"]
  },
  openGraph: {
    title: "INFINITY EXIM | Global Trade, Commodities & Logistics",
    description:
      "Modern India-based B2B commodity sourcing and international trade partner connecting global buyers with Indian commodities.",
    url: "https://infinityexim.com",
    siteName: "INFINITY EXIM",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "INFINITY EXIM Global Trade House Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "INFINITY EXIM | Global Trade & Commodity Sourcing",
    description:
      "India-based B2B commodity sourcing, export-import services, logistics support and freight services from Mundra, Gujarat.",
    images: ["/images/logo.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: "https://infinityexim.com",
    logo: "https://infinityexim.com/images/logo.png",
    email: COMPANY_DATA.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_DATA.location.city,
      addressRegion: COMPANY_DATA.location.state,
      addressCountry: COMPANY_DATA.location.country
    },
    contactPoint: COMPANY_DATA.contacts.map((c) => ({
      "@type": "ContactPoint",
      telephone: c.phone,
      contactType: "sales",
      name: c.name
    }))
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#0B1726] text-[#F7F5EF] min-h-screen flex flex-col font-sans selection:bg-[#C08A5D] selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
