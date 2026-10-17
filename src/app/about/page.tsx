import type { Metadata } from "next";
import Link from "next/link";
import { AREAS, BUSINESS, PROCESS, SERVICES, WHY } from "@/lib/site";
import { Icon, Mark } from "@/components/icons";
import LeadForm from "@/components/lead-form";
import { CallBand, Crumbs, FaqList, Label, TrustBar } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/jsonld";

export const metadata: Metadata = {
  title: {
    absolute: "About Naples Air Experts | Licensed & Insured HVAC Contractor in Naples, FL",
  },
  description:
    "Learn about Naples Air Experts, a licensed and insured HVAC contractor at 3899 Mannix Dr, Naples, FL 34114, serving Collier County with AC repair, installation, and maintenance. Call (239) 765-4321.",
  alternates: { canonical: "/about/" },
};

const ABOUT_FAQS = [
  {
    q: "Who is Naples Air Experts?",
    a: "Naples Air Experts is a licensed and insured HVAC contractor based at 3899 Mannix Dr, Naples, FL 34114. We provide air conditioning repair, installation, maintenance, heating, ductwork, indoor air quality, and commercial HVAC services across Naples and Collier County.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. All technicians working on Naples Air Experts jobs are licensed and insured, and the company carries the coverage expected of a professional HVAC contractor in Florida. Documentation can be provided on request for commercial and association work.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes. 24/7 emergency AC repair is available for homes and businesses across Naples, FL and nearby communities. Call (239) 765-4321 for the next available window — no-cool calls, water leaks, and electrical smells are treated as urgent.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Naples, North Naples, Bonita Springs, Estero, Marco Island, Golden Gate, Naples Park, Pelican Bay, Lely, and the rest of Collier County, Florida. Every area is on our regular route with the same team and the same upfront pricing.",
  },
];

export const dynamic = "force-static";

export default function AboutPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "About Us" }];

  return (
    <>
      <JsonLd data={faqSchema(ABOUT_FAQS)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? "/about/" })))} />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-7 sm:pb-14 sm:pt-9">
          <Crumbs items={crumbs} />
          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="micro mb-4 flex items-center gap-3 text-flare">
                <span className="tnum">NAPLES, FL</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                <span>Licensed &amp; insured</span>
              </p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,3.6rem)] text-white">
                About Naples Air Experts
              </h1>
              <div className="mt-6 border border-white/20 bg-white/5 p-4 sm:p-5">
                <p className="micro mb-2 text-flare">Quick answer</p>
                <p className="text-[15.5px] leading-relaxed text-white/85">
                  Naples Air Experts is a local HVAC contractor at {BUSINESS.addressFull} providing
                  AC repair, installation, maintenance, heating, ductwork, indoor air quality, and
                  commercial HVAC service across Naples, FL and Collier County. Call{" "}
                  <a href={BUSINESS.phoneHref} className="tnum font-bold text-flare">
                    {BUSINESS.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-end lg:col-span-5">
              <img
                src="/images/van-panel.jpg"
                alt="Naples Air Experts service vehicle parked outside a Naples, FL property"
                width={1536}
                height={1024}
                className="h-56 w-full border border-white/20 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      <TrustBar />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Label n="01">Who we are</Label>
            <h2 className="display display-lg text-navy">
              Built for the way Collier County actually lives
            </h2>
            <p className="measure mt-5 text-[17px] leading-[1.72] text-navy/85">
              Naples, FL is not a mild-climate market. The cooling system here runs for most of the
              hours in the year, humidity is a constant load, and the equipment sits outdoors in
              heat, rain, and salt air. That is the environment our team works in every day, and it
              shapes how we diagnose, maintain, and size systems.
            </p>
            <p className="measure mt-4 text-[16.5px] leading-[1.72] text-muted">
              Naples Air Experts was put together around a straightforward idea: give homeowners
              and businesses a clear answer, a written price, and a repair that holds. We are based
              at 3899 Mannix Dr in Naples, so service calls across Collier County come from a local
              team rather than a distant dispatch board. Technicians are licensed and insured, the
              scope of every job is agreed before work begins, and emergency service is available
              around the clock when a system quits.
            </p>
            <p className="measure mt-4 text-[16.5px] leading-[1.72] text-muted">
              The customers we work with are homeowners, landlords, property managers, and small
              commercial businesses — from a Gulf-front condo in Pelican Bay to a retail plaza in
              Estero. That range keeps our team sharp: the same discipline that protects a
              residential air handler also keeps a restaurant's rooftop unit running through a
              Saturday lunch service.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="border-2 border-navy">
              <div className="flex items-center gap-3 border-b-2 border-navy bg-navy px-4 py-4 text-white">
                <Mark className="h-10 w-10" />
                <div>
                  <p className="display text-[16px] leading-none">{BUSINESS.name}</p>
                  <p className="micro-sm mt-1.5 text-white/60">HVAC / Air Conditioning</p>
                </div>
              </div>
              <dl className="divide-y divide-rule">
                {[
                  ["Address", BUSINESS.addressFull],
                  ["Phone", BUSINESS.phoneDisplay],
                  ["Hours", BUSINESS.hoursLabel],
                  ["Coverage", "Naples & all of Collier County, FL"],
                  ["Focus", "Residential & light-commercial HVAC"],
                ].map(([k, v], i) => (
                  <div key={k} className="px-4 py-3.5">
                    <dt className="micro-sm text-muted">{k}</dt>
                    <dd className="mt-1 text-[15.5px] font-semibold text-navy">
                      {i === 1 ? (
                        <a href={BUSINESS.phoneHref} className="tnum text-flare-ink hover:underline">
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-rule bg-panel p-4">
                <a href={BUSINESS.phoneHref} className="btn btn-flare w-full">
                  <Icon name="phone" className="h-4 w-4" />
                  <span className="tnum">Call {BUSINESS.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-rule bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <Label n="02">How we work</Label>
            <h2 className="display display-lg text-navy">Standards we hold on every call</h2>
          </div>
          <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.n} data-reveal className="bg-white p-6 sm:p-7">
                <p className="micro tnum text-flare-ink">{w.n}</p>
                <h3 className="display mt-4 text-[19px] leading-tight text-navy">{w.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-9 max-w-3xl">
            <Label n="03" tone="dark">What working with us looks like</Label>
            <h2 className="display display-lg text-white">Three steps, no surprises</h2>
          </div>
          <ol className="grid gap-6 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <li key={p.n} data-reveal className="border border-white/20 bg-white/[0.04] p-6 sm:p-7">
                <span className="display text-[46px] leading-none text-flare">{p.n}</span>
                <h3 className="display mt-4 text-[20px] leading-tight text-white">{p.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallBand
        heading="Talk to a local Naples HVAC team"
        text={`Call ${BUSINESS.phoneDisplay} for AC repair, installation, maintenance, or a written estimate. 24/7 emergency service available across Collier County.`}
      />

      {/* Services + areas */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Label n="04">What we service</Label>
            <h2 className="display display-md text-navy">Full-service HVAC for Naples, FL</h2>
            <ul className="mt-5 grid gap-px bg-rule sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="group flex items-center justify-between gap-3 bg-white px-4 py-3 transition-colors hover:bg-navy"
                  >
                    <span className="text-[15px] font-medium text-navy transition-colors group-hover:text-white">
                      {s.cardTitle}
                    </span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0 text-sky-deep transition-colors group-hover:text-flare" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Label n="05">Where we work</Label>
            <h2 className="display display-md text-navy">Service areas</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href="/service-areas/"
                    className="inline-block border border-rule px-3 py-2 text-[13.5px] text-navy transition-colors hover:border-navy hover:bg-panel"
                  >
                    {a.name}, FL
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
              Not listed? Call{" "}
              <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              with your address and we will confirm whether it is on our route.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 border-t border-rule px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Label n="06">FAQ</Label>
            <h2 className="display display-md text-navy">Common questions about us</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={ABOUT_FAQS} />
          </div>
        </div>
      </section>

      <section id="estimate" className="scroll-mt-[140px] bg-panel">
        <div className="hazard h-2" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Label n="07">Get in touch</Label>
            <h2 className="display display-lg text-navy">Request service or an estimate</h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-muted">
              Tell us what the system is doing and we will call back with an appointment window and
              an upfront price range. Prefer to talk now? Call{" "}
              <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
            <div className="mt-6">
              <TrustBar />
            </div>
          </div>
          <div className="lg:col-span-6">
            <LeadForm variant="full" source="about" page="/about/" title="Work Order — Contact" />
          </div>
        </div>
      </section>
    </>
  );
}
