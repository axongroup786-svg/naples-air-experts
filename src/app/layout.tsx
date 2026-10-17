import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { BUSINESS } from "@/lib/site";
import { Header, Footer, MobileBar } from "@/components/chrome";
import MotionInit from "@/components/motion-init";
import { JsonLd, businessSchema } from "@/components/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Naples Air Experts | HVAC & AC Repair in Naples, FL | (239) 765-4321",
    template: "%s | Naples Air Experts",
  },
  description:
    "Naples Air Experts provides fast AC repair, installation, maintenance, heating, and indoor air quality services for homes and businesses across Naples, FL and nearby communities. Call (239) 765-4321.",
  keywords: [
    "AC repair Naples FL",
    "HVAC Naples Florida",
    "air conditioning installation Naples",
    "emergency AC repair Collier County",
    "heat pump services Naples FL",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    title: "Naples Air Experts | HVAC & AC Repair in Naples, FL",
    description:
      "Fast AC repair, installation, maintenance, heating and indoor air quality services in Naples, FL. Licensed & insured. Call (239) 765-4321.",
    url: BUSINESS.url,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONT_HREF} rel="stylesheet" />
      </head>
      <body>
        <JsonLd data={businessSchema()} />
        <MotionInit />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
