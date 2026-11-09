import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import { business } from "@/config/business";
import { professionalServiceSchema, websiteSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — Web design & development for growing businesses`,
    template: `%s · ${business.name}`,
  },
  description:
    "Independent web design and development studio building custom business websites, e-commerce experiences and search-ready digital platforms in India and worldwide.",
  applicationName: business.name,
  authors: [{ name: business.name, url: business.siteUrl }],
  creator: business.name,
  publisher: business.name,
  category: "Web design and development",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: business.name,
    title: `${business.name} — Web design & development`,
    description:
      "Custom websites, e-commerce experiences and SEO-ready digital platforms for businesses that want to grow online.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Web design & development`,
    description:
      "Custom websites, e-commerce experiences and SEO-ready digital platforms for businesses that want to grow online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1e9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileCTA />
        <JsonLd data={[professionalServiceSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
