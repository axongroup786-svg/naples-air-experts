import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/site";
import { CallBand, Crumbs, Label } from "@/components/ui";
import { breadcrumbSchema, JsonLd } from "@/components/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Naples Air Experts" },
  description:
    "Terms of service for Naples Air Experts HVAC work in Naples, FL — scheduling, pricing, payment, warranties, and site access. Call (239) 765-4321.",
  alternates: { canonical: "/terms-of-service/" },
  robots: { index: true, follow: true },
};

export const dynamic = "force-static";

const SECTIONS: { id: string; h: string; body: string[] }[] = [
  {
    id: "acceptance",
    h: "1. Acceptance of these terms",
    body: [
      `These Terms of Service ("Terms") govern use of the Naples Air Experts website and the HVAC services we provide in Naples, FL and surrounding Collier County communities. By using this website, submitting a request form, or accepting service, you agree to these Terms. If you do not agree, please do not use the website or request service.`,
      `Naples Air Experts may be referred to as "we", "us", or "our". Our mailing and service address is ${BUSINESS.addressFull} and our phone number is ${BUSINESS.phoneDisplay}.`,
    ],
  },
  {
    id: "services",
    h: "2. Services we provide",
    body: [
      "We provide residential and light-commercial heating, ventilation, and air conditioning services, including AC repair, installation and replacement, maintenance and tune-ups, emergency AC repair, heating and furnace repair, heat pump services, duct cleaning, ductwork repair and installation, indoor air quality solutions, thermostat installation, and commercial HVAC service.",
      "The specific scope of any job is the scope described in the written estimate, work order, or invoice you approve. Work outside that scope will not be performed without additional authorization from you.",
    ],
  },
  {
    id: "estimates",
    h: "3. Estimates, pricing, and diagnostics",
    body: [
      "Estimates provided through our website or by phone are given in good faith based on the information available at the time. A final price may change once the technician has inspected the equipment, since hidden conditions cannot be diagnosed remotely.",
      "Repair work begins with a diagnostic. The technician will present findings and an upfront price before any repair is performed. No repair work is authorized until you approve the price, verbally or in writing.",
      "Prices are subject to change without notice and may vary by equipment type, access, part availability, permit requirements, and time of service, including after-hours and emergency calls.",
    ],
  },
  {
    id: "scheduling",
    h: "4. Scheduling, access, and cancellations",
    body: [
      "We provide an arrival window when an appointment is booked. Windows may shift due to emergencies, weather, parts availability, or conditions beyond our control, and we will communicate material changes as soon as we can.",
      "You agree to provide safe access to the equipment, including the outdoor unit, attic, closet, crawlspace, or roof where applicable, and to disclose any hazards such as pets, mold, asbestos-containing materials, or structural concerns.",
      "If you need to cancel or reschedule, please contact us as early as possible at the phone number above so the time can be released to another customer.",
    ],
  },
  {
    id: "payment",
    h: "5. Payment terms",
    body: [
      `Payment is due upon completion of work unless separate written terms have been agreed in advance. We accept the payment methods communicated at the time of service. For questions about an invoice, contact us at ${BUSINESS.phoneDisplay} within a reasonable time of receiving it.`,
      "Past-due balances may be subject to collection activity and any costs reasonably incurred to recover the amount owed. Returned payments may be assessed a fee where permitted by law.",
    ],
  },
  {
    id: "warranty",
    h: "6. Warranties and parts",
    body: [
      "Workmanship warranties, where offered, apply to the specific work performed and are stated on your invoice or work order. Equipment and parts are covered by the manufacturer's warranty, which varies by product and component. Manufacturer warranties generally do not cover labor unless specifically stated.",
      "Warranties are void where equipment has been altered, improperly maintained, subjected to power surges, or operated in conditions outside the manufacturer's specifications. Registering equipment with the manufacturer where applicable is the customer's responsibility.",
      "There is no warranty on refrigerant loss resulting from a leak that is not repaired as part of the approved scope of work.",
    ],
  },
  {
    id: "liability",
    h: "7. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Naples Air Experts is not liable for indirect, incidental, special, consequential, or punitive damages, including loss of use, loss of data, or loss of business, arising from the use of this website or delays in service.",
      "Our total liability for any claim related to a service visit will not exceed the amount paid for that specific service. Nothing in these Terms limits liability that cannot be limited under applicable law, including liability for fraud or gross negligence.",
    ],
  },
  {
    id: "website",
    h: "8. Website use and content",
    body: [
      "All content on this website — including text, images, layout, and design — belongs to Naples Air Experts or its licensors and may not be reproduced without written permission. You agree not to misuse the website, interfere with its operation, or attempt unauthorized access to any systems.",
      "Information on this website is provided for general information purposes and does not constitute a binding offer or professional engineering advice. Equipment recommendations depend on a site-specific assessment.",
    ],
  },
  {
    id: "disputes",
    h: "9. Governing law and disputes",
    body: [
      `These Terms are governed by the laws of the State of Florida without regard to conflict-of-law principles. Any dispute arising from these Terms or our services will be brought in the courts located in Collier County, Florida.`,
      `Before filing a claim, please contact us at ${BUSINESS.addressFull} or ${BUSINESS.phoneDisplay}. Most concerns are resolved directly and quickly.`,
    ],
  },
  {
    id: "changes",
    h: "10. Changes and contact",
    body: [
      "We may update these Terms from time to time. Changes take effect when posted on this page. Continued use of the website or acceptance of service after changes are posted constitutes acceptance of the revised Terms.",
      `Questions about these Terms may be directed to Naples Air Experts, ${BUSINESS.addressFull}, by phone at ${BUSINESS.phoneDisplay}, or by email at ${BUSINESS.email}.`,
    ],
  },
];

export default function TermsPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Terms of Service" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? "/terms-of-service/" })))} />

      <section className="bg-navy text-white">
        <div className="blueprint">
          <div className="mx-auto max-w-[1240px] px-4 pb-9 pt-7 sm:pb-11 sm:pt-9">
            <Crumbs items={crumbs} />
            <p className="micro mb-4 mt-5 flex items-center gap-3 text-flare">
              <span className="tnum">LEGAL</span>
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              <span>Last updated: January 2026</span>
            </p>
            <h1 className="display text-[clamp(2rem,5vw,3.4rem)] text-white">Terms of Service</h1>
            <p className="mt-4 max-w-2xl text-[16.5px] leading-relaxed text-white/75">
              The terms that apply when you request HVAC service from Naples Air Experts in Naples,
              FL, and when you use this website.
            </p>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-[132px]">
            <Label n="00">On this page</Label>
            <nav aria-label="Terms of service sections">
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
              <p className="micro text-sky-deep">Service &amp; pricing questions</p>
              <a
                href={BUSINESS.phoneHref}
                className="tnum mt-2 block font-mono text-[20px] font-bold text-flare-ink"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mt-2 text-[14.5px] text-muted">{BUSINESS.addressFull}</p>
              <Link href="/contact/" className="btn btn-navy mt-4 w-full !py-2.5 !text-[13px]">
                Contact Us
              </Link>
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
        </article>
      </div>

      <CallBand
        heading="Ready to book HVAC service in Naples, FL?"
        text={`Call ${BUSINESS.phoneDisplay} for upfront pricing before any work begins — repairs, replacements, and maintenance across Collier County.`}
      />

      <nav aria-label="Related pages" className="border-t border-rule bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-2 px-4 py-8">
          <span className="micro mr-2 text-sky-deep">Related</span>
          <Link href="/privacy-policy/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            Privacy Policy
          </Link>
          <Link href="/about/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            About Us
          </Link>
          <Link href="/contact/" className="border border-rule px-3 py-2 text-[13.5px] text-navy hover:border-navy hover:bg-panel">
            Contact
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
        </div>
      </nav>
    </>
  );
}
