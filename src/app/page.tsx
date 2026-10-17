import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, HOME_FAQS, HOME_SERVICES_SLUGS, PROCESS, QUICK_ANSWERS, SERVICES, TRUST, WHY } from "@/lib/site";
import { AREAS } from "@/lib/site";
import { Icon } from "@/components/icons";
import LeadForm from "@/components/lead-form";
import { CallBand, FaqList, Label, TrustBar } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/jsonld";

export const metadata: Metadata = {
  title: "Naples Air Experts | HVAC & AC Repair in Naples, FL | (239) 765-4321",
  description:
    "Reliable HVAC services in Naples, FL. Naples Air Experts provides fast AC repair, installation, maintenance, heating and indoor air quality service for homes and businesses. Call (239) 765-4321.",
  alternates: { canonical: "/" },
};

const HOME_PATHS = [
  { name: "Home", path: "/" },
  { name: "HVAC Services" },
];

export default function HomePage() {
  const homeServices = HOME_SERVICES_SLUGS.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean);

  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <JsonLd
        data={breadcrumbSchema(HOME_PATHS.map((p) => ({ name: p.name, path: p.path ?? "/" })))}
      />

      {/* ============================= HERO ============================= */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-technician.jpg"
          alt="Naples Air Experts technician servicing an outdoor air conditioning condenser at a home in Naples, FL"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[68%_50%]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10 bg-navy/85 lg:bg-[linear-gradient(100deg,#0B2545_0%,#0B2545_44%,rgba(11,37,69,.86)_58%,rgba(11,37,69,.42)_100%)]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-[1240px] items-start gap-8 px-4 pb-12 pt-9 sm:pb-16 sm:pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-14">
          <div className="lg:col-span-7">
            <p className="micro mb-5 flex flex-wrap items-center gap-3 text-flare">
              <span className="tnum">EST. NAPLES, FL</span>
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              <span>Collier County · 24/7 Service</span>
            </p>

            <h1 className="display text-[clamp(2.4rem,5.6vw,4.4rem)] text-white">
              Reliable HVAC Services in Naples, FL
            </h1>

            <p className="mt-5 max-w-2xl text-[17px] leading-[1.68] text-white/80 sm:text-[18.5px]">
              Naples Air Experts provides fast AC repair, installation, maintenance, heating, and
              indoor air quality services for homes and businesses across Naples and nearby
              communities.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={BUSINESS.phoneHref} className="btn btn-flare !px-6 !py-4 !text-[15px]">
                <Icon name="phone" className="h-5 w-5" />
                <span className="tnum">Call {BUSINESS.phoneDisplay}</span>
              </a>
              <a href="#estimate" className="btn btn-outline-light !px-6 !py-4 !text-[15px]">
                Get a Free Estimate
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-5">
              {["Licensed & Insured Technicians", "24/7 Emergency Service", "Upfront Pricing", "Satisfaction Focused Service"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-[13.5px] text-white/75">
                    <Icon name="check" className="h-4 w-4 text-flare" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Carbon-copy work-order ticket */}
          <div className="relative z-10 lg:col-span-5 lg:-ml-4 lg:translate-y-1">
            <LeadForm variant="ticket" source="hero" page="/" title="Work Order — Request Service" />
          </div>
        </div>

        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      {/* ============================= TRUST BAR ============================= */}
      <TrustBar />

      {/* ============================= ABOUT + QUICK ANSWERS ============================= */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Label n="01">About Naples Air Experts</Label>
            <h2 className="display display-lg text-navy">
              A local Naples, FL HVAC company built for the long cooling season
            </h2>
            <p className="measure mt-5 text-[17px] leading-[1.72] text-navy/85">
              Naples Air Experts is a licensed and insured HVAC contractor based at 3899 Mannix Dr,
              Naples, FL 34114. We repair, install, and maintain air conditioners, heat pumps,
              ductwork, and indoor air quality equipment for homeowners, landlords, property
              managers, and small commercial businesses across Naples and nearby communities.
            </p>
            <p className="measure mt-4 text-[16.5px] leading-[1.72] text-muted">
              Our work covers the whole Collier County map — from Gulf-front condos in Pelican Bay
              and Marco Island to inland estates in Golden Gate and North Naples — with 24/7
              emergency service available, upfront written pricing on every job, and technicians
              who explain what they found before they pick up a tool. The goal is simple: fast,
              professional HVAC service and a system that keeps up with a Naples summer.
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-4">
              {[
                ["24/7", "Emergency line"],
                ["100%", "Upfront pricing"],
                ["10", "Communities served"],
                ["1", "Number to call"],
              ].map(([v, k]) => (
                <div key={k} className="bg-white px-4 py-4">
                  <dt className="display text-[26px] text-navy sm:text-[30px]">{v}</dt>
                  <dd className="micro-sm mt-1.5 text-muted">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Quick answers — AEO block */}
          <div className="lg:col-span-5">
            <div className="border-2 border-navy">
              <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-white/30 bg-navy px-4 py-3">
                <p className="micro text-flare">Quick Answers</p>
                <span className="micro-sm tnum text-white/60">NAPLES, FL</span>
              </div>
              <dl className="divide-y divide-rule bg-white">
                {QUICK_ANSWERS.map((qa, i) => (
                  <div key={qa.q} className="px-4 py-4">
                    <dt className="flex gap-3 text-[14.5px] font-semibold text-navy">
                      <span className="micro-sm tnum mt-0.5 shrink-0 text-sky-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {qa.q}
                    </dt>
                    <dd className="mt-1.5 pl-7 text-[15px] leading-relaxed text-muted">{qa.a}</dd>
                  </div>
                ))}
              </dl>
              <div className="bg-navy px-4 py-4">
                <p className="micro-sm text-white/60">Service, parts & pricing questions</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="tnum mt-1 block font-mono text-[24px] font-bold text-flare"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SERVICES ============================= */}
      <section id="services" className="scroll-mt-[130px] border-t border-rule bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Label n="02">What we do in Naples, FL</Label>
              <h2 className="display display-lg max-w-2xl text-navy">
                HVAC services for homes and businesses
              </h2>
            </div>
            <Link
              href="/contact/"
              className="link-arrow shrink-0 text-sky-deep hover:text-navy"
            >
              See all 12 services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                data-reveal
                className="group relative flex flex-col border-b border-r border-rule p-5 transition-colors duration-200 hover:bg-navy sm:p-6"
              >
                <span className="absolute left-0 top-0 h-1 w-0 bg-flare transition-all duration-300 group-hover:w-full" />
                <span className="micro-sm tnum text-muted transition-colors group-hover:text-flare">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center bg-navy text-white transition-colors duration-200 group-hover:bg-flare group-hover:text-navy">
                  <Icon name={s.icon} className="h-[22px] w-[22px]" />
                </span>
                <span className="display mt-5 text-[19px] leading-tight text-navy transition-colors group-hover:text-white sm:text-[21px]">
                  {s.cardTitle}
                </span>
                <span className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted transition-colors group-hover:text-white/75">
                  {s.short}
                </span>
                <span className="link-arrow mt-5 text-sky-deep transition-colors group-hover:text-flare">
                  Learn More
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {SERVICES.filter((s) => !HOME_SERVICES_SLUGS.includes(s.slug)).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  className="inline-block border border-rule px-3 py-2 text-[13.5px] text-navy transition-colors hover:border-navy hover:bg-panel"
                >
                  + {s.cardTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================= MID CTA ============================= */}
      <CallBand
        heading="Cooling problem happening right now?"
        text={`No-cool calls are prioritized across Naples, FL. Call ${BUSINESS.phoneDisplay} for a real arrival window — 24/7 emergency service available, upfront pricing before any work begins.`}
      />

      {/* ============================= WHY CHOOSE ============================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-8 max-w-3xl">
            <Label n="03">Why choose Naples Air Experts</Label>
            <h2 className="display display-lg text-navy">
              Six reasons Collier County calls us first
            </h2>
          </div>

          <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.n} data-reveal className="bg-white p-6 transition-colors hover:bg-panel sm:p-7">
                <p className="micro tnum text-flare-ink">{w.n}</p>
                <h3 className="display mt-4 text-[19px] leading-tight text-navy sm:text-[21px]">
                  {w.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CUSTOMER FEEDBACK ============================= */}
      <section className="border-t border-rule bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Label n="04">Customer feedback</Label>
              <h2 className="display display-lg max-w-2xl text-navy">
                What customers across Collier County tell us
              </h2>
            </div>
            <p className="micro-sm max-w-xs text-muted md:text-right">
              Comments from customers we have served. Names and exact addresses are withheld for
              privacy.
            </p>
          </div>

          <div className="grid gap-px bg-rule md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                q: "Came out the same afternoon, found the failed part, and told me the price before touching anything. The house was cool again by dinner.",
                who: "Homeowner",
                where: "Naples Park, FL",
              },
              {
                q: "We manage rentals across North Naples and Golden Gate. One number for every service call, clear invoices on each property, no chasing anyone down.",
                who: "Property manager",
                where: "North Naples, FL",
              },
              {
                q: "Our rooftop unit quit during a Saturday lunch rush. They talked us through keeping the doors open, then came out that evening so we could trade again.",
                who: "Restaurant owner",
                where: "Estero, FL",
              },
              {
                q: "The original ductwork never balanced and the second floor was always hot. They showed us the readings, sealed the trunk line, and it holds temperature now.",
                who: "Homeowner",
                where: "Golden Gate, FL",
              },
            ].map((c) => (
              <figure key={c.where} data-reveal className="flex h-full flex-col bg-white p-6">
                <span className="display text-[42px] leading-none text-flare" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[15.5px] leading-relaxed text-navy/85">
                  {c.q}
                </blockquote>
                <figcaption className="mt-5 border-t border-rule pt-3.5">
                  <span className="block text-[14px] font-semibold text-navy">{c.who}</span>
                  <span className="micro-sm mt-1 block text-muted">{c.where}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 border-l-4 border-sky bg-panel px-5 py-4 text-[15px] leading-relaxed text-navy">
            Satisfaction focused service is the standard we work to on every call in Naples, FL —
            licensed and insured technicians, upfront pricing, and 24/7 emergency service when a
            system quits. Prefer to hear it directly? Call{" "}
            <a href={BUSINESS.phoneHref} className="tnum font-bold text-flare-ink hover:underline">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ============================= PROCESS ============================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-9 max-w-3xl">
            <Label n="05" tone="dark">
              How it works
            </Label>
            <h2 className="display display-lg text-white">
              Three steps from call to comfort
            </h2>
          </div>

          <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {PROCESS.map((p) => (
              <li key={p.n} data-reveal className="relative border border-white/20 bg-white/[0.04] p-6 sm:p-7">
                <span className="display text-[46px] leading-none text-flare sm:text-[56px]">
                  {p.n}
                </span>
                <h3 className="display mt-4 text-[20px] leading-tight text-white sm:text-[23px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{p.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col gap-3 border-t border-white/15 pt-7 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="btn btn-flare">
              <Icon name="phone" className="h-[18px] w-[18px]" />
              <span className="tnum">Call {BUSINESS.phoneDisplay}</span>
            </a>
            <Link href="/contact/" className="btn btn-outline-light">
              Book AC Service
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= SERVICE AREAS ============================= */}
      <section id="areas" className="scroll-mt-[130px] bg-panel">
        <div className="hazard h-2" aria-hidden="true" />
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Label n="06">Where we work</Label>
              <h2 className="display display-lg max-w-2xl text-navy">
                Serving Naples, FL and nearby communities
              </h2>
            </div>
            <Link href="/service-areas/" className="link-arrow shrink-0 text-sky-deep hover:text-navy">
              Full service area guide
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <p className="measure mb-7 text-[16.5px] leading-relaxed text-muted">
            Naples Air Experts covers Naples, Bonita Springs, Estero, Marco Island, Golden Gate,
            North Naples, and nearby Collier County communities. Every area below is on our regular
            route — same technicians, same upfront pricing, same phone number.
          </p>

          <ul className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  href="/service-areas/"
                  className="group flex h-full flex-col bg-white p-5 transition-colors hover:bg-navy"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="display text-[18px] leading-tight text-navy transition-colors group-hover:text-white">
                      {a.name}
                    </span>
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-flare" />
                  </span>
                  <span className="micro-sm tnum mt-2 block text-muted transition-colors group-hover:text-white/65">
                    {a.zip}
                  </span>
                  <span className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted transition-colors group-hover:text-white/75">
                    {a.concerns[0]}
                  </span>
                  <span className="link-arrow mt-4 text-sky-deep transition-colors group-hover:text-flare">
                    Services
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section id="faq" className="scroll-mt-[130px] bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Label n="07">FAQ</Label>
            <h2 className="display display-md text-navy">
              HVAC questions from Naples, FL homeowners
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Clear answers on cost, timing, and what to expect. If your question is not here,
              call <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">{BUSINESS.phoneDisplay}</a> — someone answers.
            </p>
            <div className="mt-6 border border-rule bg-panel p-5">
              <p className="micro text-sky-deep">Still deciding?</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Send a short description of the problem and we will call back with next steps and
                an upfront price range.
              </p>
              <a href="#estimate" className="btn btn-navy mt-4 w-full">
                Get Free Estimate
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA ============================= */}
      <section id="estimate" className="scroll-mt-[130px] bg-navy text-white">
        <div className="hazard-alert h-2" aria-hidden="true" />
        <div className="relative overflow-hidden">
          <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
          <img
            src="/images/van-panel.jpg"
            alt="Naples Air Experts service van exterior with company livery in Naples, FL"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
            loading="lazy"
          />
          <div className="relative mx-auto grid max-w-[1240px] gap-9 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Label n="08" tone="dark">
                Final step
              </Label>
              <h2 className="display text-[clamp(2rem,4.6vw,3.4rem)] text-white">
                Need AC Repair or Installation in Naples, FL?
              </h2>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/75">
                Contact Naples Air Experts for fast, professional HVAC service. Licensed and
                insured technicians, upfront pricing, and 24/7 emergency service available across
                Naples and nearby Collier County communities.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={BUSINESS.phoneHref} className="btn btn-flare !px-6 !py-4 !text-[15px]">
                  <Icon name="phone" className="h-5 w-5" />
                  <span className="tnum">Call {BUSINESS.phoneDisplay}</span>
                </a>
                <a href="/contact/" className="btn btn-outline-light !px-6 !py-4 !text-[15px]">
                  Get Free Estimate
                </a>
              </div>

              <address className="mt-8 border-t border-white/15 pt-6 not-italic text-[15.5px] text-white/70">
                <p className="display text-[17px] text-white">{BUSINESS.name}</p>
                <p className="mt-1.5">{BUSINESS.addressFull}</p>
                <p className="tnum mt-1 font-mono font-bold text-flare">{BUSINESS.phoneDisplay}</p>
              </address>
            </div>

            <div className="lg:col-span-6">
              <LeadForm
                variant="full"
                source="final-cta"
                page="/"
                title="Free Estimate Request"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= TRUST FOOTER STRIP ============================= */}
      <TrustBar tone="dark" />
    </>
  );
}
