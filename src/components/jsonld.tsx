import { BUSINESS, SERVICES } from "@/lib/site";

const S = BUSINESS;

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, trusted markup built from local constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const commonAddress = {
  "@type": "PostalAddress",
  streetAddress: S.street,
  addressLocality: S.city,
  addressRegion: S.state,
  postalCode: S.zip,
  addressCountry: "US",
};

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": `${S.url}/#business`,
    name: S.name,
    description:
      "Naples Air Experts provides HVAC and air conditioning repair, installation, maintenance, emergency service, ductwork, indoor air quality, and commercial HVAC services in Naples, Florida and nearby Collier County communities.",
    url: S.url,
    telephone: "+1-239-765-4321",
    email: S.email,
    image: `${S.url}/images/hero-technician.jpg`,
    priceRange: "$$",
    address: commonAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: S.geo.lat,
      longitude: S.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S.addressFull)}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Naples", sameAs: "https://en.wikipedia.org/wiki/Naples,_Florida" },
      { "@type": "City", name: "Bonita Springs" },
      { "@type": "City", name: "Estero" },
      { "@type": "City", name: "Marco Island" },
      { "@type": "City", name: "Golden Gate" },
      { "@type": "City", name: "North Naples" },
      { "@type": "AdministrativeArea", name: "Collier County, Florida" },
    ],
    sameAs: [S.socials.facebook, S.socials.instagram, S.socials.x, S.socials.linkedin],
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${s.cardTitle} in Naples, FL`,
        serviceType: s.cardTitle,
        url: `${S.url}/${s.slug}/`,
      },
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, slug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} in Naples, FL`,
    serviceType: name,
    description,
    url: `${S.url}/${slug}/`,
    provider: { "@id": `${S.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Naples, FL" },
      { "@type": "City", name: "Bonita Springs, FL" },
      { "@type": "City", name: "Estero, FL" },
      { "@type": "City", name: "Marco Island, FL" },
      { "@type": "AdministrativeArea", name: "Collier County, FL" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${S.url}${it.path}`,
    })),
  };
}
