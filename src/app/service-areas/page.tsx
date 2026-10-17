import type { Metadata } from "next";
import Link from "next/link";
import { AREAS, BUSINESS, SERVICES } from "@/lib/site";
import { Icon } from "@/components/icons";
import LeadForm from "@/components/lead-form";
import { CallBand, Crumbs, FaqList, Label, TrustBar } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/jsonld";

export const metadata: Metadata = {
  title: "Service Areas | HVAC Service in Naples, Bonita Springs, Estero & Marco Island, FL",
  description:
    "Naples Air Experts serves Naples, North Naples, Bonita Springs, Estero, Marco Island, Golden Gate, Naples Park, Pelican Bay, Lely, and all of Collier County, FL. Call (239) 765-4321.",
  alternates: { canonical: "/service-areas/" },
};

const AREAS_FAQS = [
  {
    q: "Which areas do you serve?",
    a: "Naples Air Experts serves Naples, North Naples, Bonita Springs, Estero, Marco Island, Golden Gate, Naples Park, Pelican Bay, Lely, and the rest of Collier County, Florida. If your address is just outside these areas, call (239) 765-4321 and we will confirm whether it is on our route.",
  },
  {
    q: "Do you charge a trip fee outside Naples?",
    a: "Service area pricing is confirmed when you call, before anyone is dispatched. We tell you the charge for your address up front so there is no surprise when the technician arrives at your property.",
  },
  {
    q: "How fast can you reach Bonita Springs or Estero?",
    a: "Bonita Springs and Estero are on our regular daily route alongside Naples. Response depends on current demand, and we give you a real arrival window rather than an all-day guess when you book.",
  },
  {
    q: "Do you serve Marco Island?",
    a: "Yes. Marco Island properties are serviced regularly, and coastal equipment there often needs additional coil cleaning and corrosion checks because of salt exposure. Ask about maintenance intervals when you call.",
  },
  {
    q: "Do you work in unincorporated Collier County?",
    a: "Yes — Immokalee, Ave Maria, Naples Manor, Vanderbilt, Corkscrew, and other unincorporated parts of Collier County are covered. Rural addresses may have longer travel times, which we confirm when you call.",
  },
];

export const dynamic = "force-static";

export default function ServiceAreasPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Service Areas" }];

  return (
    <>
      <JsonLd data={faqSchema(AREAS_FAQS)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? "/service-areas/" })))} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "HVAC Services across Naples, FL and Collier County",
          serviceType: "HVAC and Air Conditioning Services",
          provider: { "@id": `${BUSINESS.url}/#business` },
          areaServed: AREAS.map((a) => ({
            "@type": a.name === "Collier County" ? "AdministrativeArea" : "City",
            name: `${a.name}, FL`,
          })),
        }}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-7 sm:pb-14 sm:pt-9">
          <Crumbs items={crumbs} />
          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="micro mb-4 flex items-center gap-3 text-flare">
                <span className="tnum">10</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                <span>Communities covered</span>
              </p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,3.6rem)] text-white">
                HVAC Service Areas in Naples, FL &amp; Collier County
              </h1>
              <div className="mt-6 border border-white/20 bg-white/5 p-4 sm:p-5">
                <p className="micro mb-2 text-flare">Quick answer</p>
                <p className="text-[15.5px] leading-relaxed text-white/85">
                  Naples Air Experts provides AC repair, installation, maintenance, heating, duct,
                  and commercial HVAC service throughout Naples, North Naples, Bonita Springs,
                  Estero, Marco Island, Golden Gate, Naples Park, Pelican Bay, Lely, and all of
                  Collier County, FL. Call{" "}
                  <a href={BUSINESS.phoneHref} className="tnum font-bold text-flare">
                    {BUSINESS.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={BUSINESS.phoneHref} className="btn btn-flare">
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                  <span className="tnum">{BUSINESS.phoneDisplay}</span>
                </a>
                <Link href="/contact/" className="btn btn-outline-light">
                  Get Free Estimate
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/20 bg-white/[0.05] p-5 sm:p-6">
                <p className="micro text-flare">Route coverage at a glance</p>
                <ul className="mt-4 divide-y divide-white/15">
                  {AREAS.map((a, i) => (
                    <li key={a.slug} className="flex items-baseline justify-between gap-3 py-2.5">
                      <a href={`#${a.slug}`} className="text-[15.5px] text-white/85 hover:text-flare">
                        {a.name}, FL
                      </a>
                      <span className="micro-sm tnum shrink-0 text-white/65">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      <TrustBar />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-9 max-w-3xl">
            <Label n="01">Local coverage</Label>
            <h2 className="display display-lg text-navy">
              Ten communities, one Naples HVAC team
            </h2>
            <p className="measure mt-5 text-[16.5px] leading-relaxed text-muted">
              Every community below sits on our regular route. That matters: the same technicians
              service these neighborhoods year after year, so they already know the housing stock,
              the duct layouts, and the equipment that tends to fail first in each area. Below each
              area you will find the services we run there, the local HVAC concerns we see most
              often, and a direct line to request service.
            </p>
          </div>

          <div className="grid gap-px bg-rule md:grid-cols-2">
            {AREAS.map((a, i) => (
              <article
                key={a.slug}
                id={a.slug}
                data-reveal
                className="scroll-mt-[140px] bg-white p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
                  <div>
                    <p className="micro tnum text-sky-deep">
                      {String(i + 1).padStart(2, "0")} / Collier County
                    </p>
                    <h3 className="display mt-2 text-[24px] leading-none text-navy sm:text-[28px]">
                      {a.name}, FL
                    </h3>
                  </div>
                  <Icon name="pin" className="mt-1 h-6 w-6 shrink-0 text-flare" />
                </div>

                <p className="micro-sm tnum mt-3 text-muted">{a.zip}</p>

                <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{a.blurb}</p>

                <h4 className="micro mt-5 text-navy">HVAC services available</h4>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {a.services.map((s) => (
                    <li
                      key={s}
                      className="border border-rule bg-panel px-2.5 py-1 text-[12.5px] font-medium text-navy"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <h4 className="micro mt-5 text-navy">Common local concerns</h4>
                <ul className="mt-2.5 space-y-2">
                  {a.concerns.map((c) => (
                    <li key={c} className="flex gap-2.5 text-[15px] leading-snug text-muted">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 bg-flare" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2.5 border-t border-rule pt-4">
                  <a href={BUSINESS.phoneHref} className="btn btn-navy !px-4 !py-2.5 !text-[12.5px]">
                    <Icon name="phone" className="h-4 w-4" />
                    <span className="tnum">{BUSINESS.phoneDisplay}</span>
                  </a>
                  <Link href="/contact/" className="btn btn-ghost !px-4 !py-2.5 !text-[12.5px]">
                    Request Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallBand
        heading="Not sure if you are on the route?"
        text={`Call ${BUSINESS.phoneDisplay} with your address and we will confirm coverage and the next available appointment window straight away.`}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Label n="02">Service area FAQ</Label>
            <h2 className="display display-md text-navy">Coverage questions, answered</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              For anything not covered here, call{" "}
              <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              — we answer seven days a week.
            </p>
            <ul className="mt-6 border border-rule">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug} className="border-b border-rule last:border-b-0">
                  <Link
                    href={`/${s.slug}/`}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-[14.5px] text-navy transition-colors hover:bg-panel"
                  >
                    {s.cardTitle}
                    <Icon name="arrow" className="h-4 w-4 text-sky-deep" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={AREAS_FAQS} />
          </div>
        </div>
      </section>

      <section id="estimate" className="scroll-mt-[140px] bg-panel">
        <div className="hazard h-2" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Label n="03">Book service</Label>
            <h2 className="display display-lg text-navy">Request service in your area</h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-muted">
              Send your address, what the system is doing, and the best number to reach you. We
              confirm coverage and call back with an appointment window.
            </p>
            <address className="mt-6 not-italic text-[15.5px] text-muted">
              <p className="display text-[17px] text-navy">{BUSINESS.name}</p>
              <p className="mt-1.5">{BUSINESS.addressFull}</p>
              <a
                href={BUSINESS.phoneHref}
                className="tnum mt-1 inline-block font-mono font-bold text-flare-ink"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="lg:col-span-6">
            <LeadForm variant="full" source="service-areas" page="/service-areas/" title="Service Request" />
          </div>
        </div>
      </section>
    </>
  );
}
