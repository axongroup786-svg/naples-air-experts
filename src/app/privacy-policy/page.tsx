import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/site";
import { Icon } from "@/components/icons";
import { CallBand, Crumbs, Label } from "@/components/ui";
import { breadcrumbSchema, JsonLd } from "@/components/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Naples Air Experts" },
  description:
    "How Naples Air Experts collects, uses, and protects information submitted through our website and by calling (239) 765-4321. 3899 Mannix Dr, Naples, FL 34114.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: true, follow: true },
};

export const dynamic = "force-static";

const SECTIONS: { id: string; h: string; body: string[] }[] = [
  {
    id: "overview",
    h: "1. Overview",
    body: [
      `This Privacy Policy describes how Naples Air Experts ("we", "us", or "our") collects, uses, shares, and protects information when you visit our website, submit an estimate or service request form, call ${BUSINESS.phoneDisplay}, or otherwise interact with us. By using our website or requesting service, you agree to the practices described here.`,
      `This policy applies to residents and businesses in Naples, FL and the surrounding Collier County communities we serve, including Bonita Springs, Estero, Marco Island, Golden Gate, North Naples, Naples Park, Pelican Bay, and Lely.`,
    ],
  },
  {
    id: "collect",
    h: "2. Information we collect",
    body: [
      "Information you provide voluntarily includes your full name, phone number, email address, the service you are requesting, your property type (residential or commercial), and any details you include in a message form. When you call us, we may also record the address of the property, the equipment involved, and appointment notes needed to perform the work.",
      "Information collected automatically includes standard technical data such as browser type, device type, referring pages, approximate location derived from your IP address, and the pages you view on our website. We use this in aggregate to understand how visitors use the site.",
      "We do not knowingly collect personal information from children under 13 years of age.",
    ],
  },
  {
    id: "use",
    h: "3. How we use your information",
    body: [
      "We use the information we collect to schedule and deliver HVAC services, respond to your estimate request, contact you about appointment windows, prepare written pricing, maintain a record of work performed on your system, and improve the content and performance of our website.",
      "We may also use your contact details to follow up on a request you made, to send service reminders, or — only where permitted — to share information about services similar to those you asked about. You can ask us to stop non-essential contact at any time.",
    ],
  },
  {
    id: "sharing",
    h: "4. When we share information",
    body: [
      "We do not sell your personal information. We share it only with service providers who help us operate — for example, scheduling, communications, payment processing, or website hosting — and only to the extent needed to perform those services.",
      "We may also disclose information where required by law, to comply with a legal process, to protect the safety of our customers or technicians, or in connection with a transfer of business ownership. Information submitted through a form is stored in our internal lead records.",
    ],
  },
  {
    id: "cookies",
    h: "5. Cookies and analytics",
    body: [
      "Our website may use cookies or similar technologies to remember preferences and to measure page performance. Cookies do not personally identify you on their own. You can block or delete cookies through your browser settings; core site functions will still work, though some convenience features may not.",
    ],
  },
  {
    id: "security",
    h: "6. Data security and retention",
    body: [
      "We take reasonable technical and administrative steps to protect the information you submit, including restricting access to lead records and using reputable providers for form processing and hosting. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
      "We retain information for as long as needed to provide services, maintain service history for your property, meet legal and accounting obligations, and resolve disputes. You may request deletion of your contact information at any time, subject to records we are required to keep.",
    ],
  },
  {
    id: "choices",
    h: "7. Your choices and rights",
    body: [
      "You may request access to, correction of, or deletion of personal information we hold about you by contacting us at the details below. You may also opt out of non-essential communications by replying to a message, calling us, or emailing us directly.",
      "Depending on where you live, you may have additional rights under applicable privacy law. We will respond to verified requests within a reasonable period.",
    ],
  },
  {
    id: "third-party",
    h: "8. Third-party links and embeds",
    body: [
      "Our website may include embedded content such as a map, or links to third-party sites such as social networks. Embedded content and linked sites behave as if you had visited them directly and are governed by their own privacy policies. We are not responsible for the practices of third parties.",
    ],
  },
  {
    id: "changes",
    h: "9. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date, and continued use of the website after changes are posted constitutes acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    h: "10. Contact us",
    body: [
      `Questions about this Privacy Policy can be directed to Naples Air Experts, ${BUSINESS.addressFull}. Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Privacy Policy" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? "/privacy-policy/" })))} />

      <section className="bg-navy text-white">
        <div className="blueprint">
          <div className="mx-auto max-w-[1240px] px-4 pb-9 pt-7 sm:pb-11 sm:pt-9">
            <Crumbs items={crumbs} />
            <p className="micro mb-4 mt-5 flex items-center gap-3 text-flare">
              <span className="tnum">LEGAL</span>
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              <span>Last updated: January 2026</span>
            </p>
            <h1 className="display text-[clamp(2rem,5vw,3.4rem)] text-white">Privacy Policy</h1>
            <p className="mt-4 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
              This page explains how Naples Air Experts handles the information you share when you
              request HVAC service in Naples, FL or use this website.
            </p>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-[132px]">
            <Label n="00">On this page</Label>
            <nav aria-label="Privacy policy sections">
              <ul className="border border-rule">
                {SECTIONS.map((s) => (
                  <li key={s.id} className="border-b border-rule last:border-b-0">
                    <a
                      href={`#${s.id}`}
                      className="block px-4 py-2.5 text-[14.5px] text-navy transition-colors hover:bg-panel"
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 border border-rule bg-panel p-5">
              <p className="micro text-sky-deep">Questions?</p>
              <a
                href={BUSINESS.phoneHref}
                className="tnum mt-2 block font-mono text-[20px] font-bold text-flare-ink"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mt-2 text-[14.5px] text-muted">{BUSINESS.addressFull}</p>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="mb-9 scroll-mt-[150px]">
              <h2 className="display display-md mb-4 text-navy">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="measure mb-4 text-[16.5px] leading-[1.72] text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-8 border-l-4 border-flare bg-panel px-5 py-4">
            <p className="text-[15.5px] leading-relaxed text-navy">
              To request service or ask about your information, call{" "}
              <a href={BUSINESS.phoneHref} className="tnum font-bold text-flare-ink">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              or visit our <Link href="/contact/" className="font-semibold text-sky-deep hover:underline">contact page</Link>.
            </p>
          </div>
        </article>
      </div>

      <CallBand
        heading="Need HVAC service in Naples, FL?"
        text={`Call ${BUSINESS.phoneDisplay} or request a free estimate. Licensed and insured technicians, upfront pricing, 24/7 emergency service available.`}
      />

      <nav aria-label="Related pages" className="border-t border-rule bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-2 px-4 py-8">
          <span className="micro mr-2 text-sky-deep">Related</span>
          <Link href="/terms-of-service/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            Terms of Service
          </Link>
          <Link href="/contact/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            Contact
          </Link>
          <Link href="/service-areas/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            Service Areas
          </Link>
          {SERVICES.slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel"
            >
              {s.cardTitle}
            </Link>
          ))}
          <Icon name="arrow" className="h-4 w-4 text-sky-deep" />
        </div>
      </nav>
    </>
  );
}
