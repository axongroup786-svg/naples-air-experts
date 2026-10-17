import type { Metadata } from "next";
import { BUSINESS, SERVICES } from "@/lib/site";
import { Icon } from "@/components/icons";
import LeadForm from "@/components/lead-form";
import { Crumbs, Label, TrustBar } from "@/components/ui";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/components/jsonld";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Naples Air Experts | Free HVAC Estimate in Naples, FL",
  },
  description:
    "Contact Naples Air Experts at 3899 Mannix Dr, Naples, FL 34114 or call (239) 765-4321. Request a free HVAC estimate, book AC service, or ask about emergency repair.",
  alternates: { canonical: "/contact/" },
};

const CONTACT_FAQS = [
  {
    q: "How do I request service from Naples Air Experts?",
    a: "Call (239) 765-4321 to speak with a coordinator, or submit the estimate form on this page with your name, phone, service needed, and a short description. We call back with an appointment window and confirm the details before anyone is dispatched.",
  },
  {
    q: "Where are you located?",
    a: "Naples Air Experts is based at 3899 Mannix Dr, Naples, FL 34114, and services homes and businesses across Naples and all of Collier County. The address is available on the map below if you need directions.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. You can request a free estimate for installation, replacement, ductwork, and other scoped work. Repairs start with a diagnostic so we can give you a firm written price before anything is approved or completed.",
  },
  {
    q: "What are your hours?",
    a: "Naples Air Experts is open 24 hours a day, seven days a week, with emergency AC repair available around the clock. Call (239) 765-4321 at any hour and we will give you the next available arrival window.",
  },
];

export const dynamic = "force-static";

const MAP_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("3899 Mannix Dr, Naples, FL 34114") +
  "&output=embed";

export default function ContactPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Contact" }];

  return (
    <>
      <JsonLd data={faqSchema(CONTACT_FAQS)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? "/contact/" })))} />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-7 sm:pb-14 sm:pt-9">
          <Crumbs items={crumbs} />
          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="micro mb-4 flex items-center gap-3 text-flare">
                <span className="tnum">CONTACT</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                <span>24/7 · Naples, FL</span>
              </p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,3.6rem)] text-white">
                Contact Naples Air Experts
              </h1>
              <div className="mt-6 border border-white/20 bg-white/5 p-4 sm:p-5">
                <p className="micro mb-2 text-flare">Quick answer</p>
                <p className="text-[15.5px] leading-relaxed text-white/85">
                  Reach Naples Air Experts at{" "}
                  <a href={BUSINESS.phoneHref} className="tnum font-bold text-flare">
                    {BUSINESS.phoneDisplay}
                  </a>{" "}
                  or visit 3899 Mannix Dr, Naples, FL 34114. You can also send the form on this page
                  to request a free HVAC estimate or book AC service — we call back fast, seven days
                  a week.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={BUSINESS.phoneHref} className="btn btn-flare !px-6 !py-4 !text-[15px]">
                  <Icon name="phone" className="h-5 w-5" />
                  <span className="tnum">Call {BUSINESS.phoneDisplay}</span>
                </a>
                <a href="#estimate" className="btn btn-outline-light !px-6 !py-4 !text-[15px]">
                  Get Free Estimate
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/20 bg-white/[0.05] p-5 sm:p-6">
                <p className="micro text-flare">Direct lines</p>
                <dl className="mt-4 divide-y divide-white/15">
                  {[
                    ["Phone", BUSINESS.phoneDisplay, BUSINESS.phoneHref],
                    ["Address", BUSINESS.addressFull, null],
                    ["Email", BUSINESS.email, `mailto:${BUSINESS.email}`],
                    ["Hours", BUSINESS.hoursLabel, null],
                  ].map(([k, v, href]) => (
                    <div key={String(k)} className="py-3">
                      <dt className="micro-sm text-white/65">{k}</dt>
                      <dd className="mt-1 text-[15.5px] font-semibold text-white">
                        {href ? (
                          <a href={String(href)} className={k === "Phone" ? "tnum text-flare" : "hover:text-flare"}>
                            {v}
                          </a>
                        ) : (
                          v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      <TrustBar />

      {/* Form + map */}
      <section id="estimate" className="scroll-mt-[140px] bg-panel">
        <div className="hazard h-2" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Label n="01">Request a free estimate</Label>
            <h2 className="display display-lg text-navy">Tell us what you need</h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-muted">
              Fill in the form and a Naples Air Experts coordinator will call you back with an
              appointment window. All fields marked * are required, and there is no obligation — we
              confirm price before any work begins.
            </p>
            <div className="mt-7">
              <LeadForm variant="full" source="contact" page="/contact/" title="Free Estimate Request" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <Label n="02">Find us</Label>
            <h2 className="display display-lg text-navy">3899 Mannix Dr, Naples, FL</h2>

            <div className="mt-5 border border-rule bg-white p-1">
              <div className="relative aspect-[16/11] w-full">
                <iframe
                  title="Map showing Naples Air Experts at 3899 Mannix Dr, Naples, FL 34114"
                  src={MAP_SRC}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="micro-sm border-t border-rule bg-panel px-3 py-2 text-muted">
                Naples Air Experts — {BUSINESS.addressFull}
              </p>
            </div>

            <div className="mt-5 grid gap-px bg-rule sm:grid-cols-2">
              <div className="bg-white p-5">
                <p className="micro text-sky-deep">Office</p>
                <address className="mt-2 not-italic text-[15.5px] leading-relaxed text-navy">
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </address>
                <a
                  href={BUSINESS.phoneHref}
                  className="tnum mt-3 inline-block font-mono text-[17px] font-bold text-flare-ink hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="bg-white p-5">
                <p className="micro text-sky-deep">Social</p>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {(
                    [
                      ["facebook", "Facebook"],
                      ["instagram", "Instagram"],
                      ["x", "X / Twitter"],
                      ["linkedin", "LinkedIn"],
                    ] as const
                  ).map(([k, label]) => (
                    <li key={k}>
                      <a
                        href={BUSINESS.socials[k]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-rule px-3 py-2 text-[13.5px] text-navy transition-colors hover:border-navy hover:bg-panel"
                      >
                        <Icon name={k === "x" ? "air" : k === "linkedin" ? "doc" : k} className="h-4 w-4 text-sky-deep" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services directory */}
      <section className="border-t border-rule bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <Label n="03">What can we help with?</Label>
          <h2 className="display display-md max-w-2xl text-navy">
            Choose a service and request it directly
          </h2>
          <ul className="mt-6 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  className="group flex h-full flex-col bg-white p-5 transition-colors hover:bg-navy"
                >
                  <span className="micro-sm tnum text-muted transition-colors group-hover:text-flare">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display mt-3 text-[17px] leading-tight text-navy transition-colors group-hover:text-white">
                    {s.cardTitle}
                  </span>
                  <span className="mt-2 flex-1 text-[14px] leading-relaxed text-muted transition-colors group-hover:text-white/70">
                    {s.short}
                  </span>
                  <span className="link-arrow mt-4 text-sky-deep transition-colors group-hover:text-flare">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 border-t border-rule px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Label n="04">FAQ</Label>
            <h2 className="display display-md text-navy">Before you call</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Still unsure? Call{" "}
              <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              — we answer around the clock.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="flex items-center justify-between gap-3 border border-rule px-4 py-3 text-[15px] text-navy transition-colors hover:border-navy hover:bg-panel"
                  >
                    {s.cardTitle} in Naples, FL
                    <Icon name="arrow" className="h-4 w-4 text-sky-deep" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <details className="faq-item group border border-rule">
                <summary className="flex items-center justify-between gap-4 px-4 py-4">
                  <h3 className="font-sans text-[16px] font-semibold text-navy">
                    Do you work weekends and after hours?
                  </h3>
                  <span className="faq-plus flex h-7 w-7 shrink-0 items-center justify-center border border-navy">
                    <Icon name="plus" className="h-4 w-4 text-navy" />
                  </span>
                </summary>
                <p className="px-4 pb-4 text-[15.5px] leading-relaxed text-muted">
                  Yes. Naples Air Experts operates 24 hours a day, seven days a week, and emergency
                  AC repair is available outside normal business hours for homes and businesses
                  across Naples, FL.
                </p>
              </details>
            </div>
            <div className="mt-6">
              <Label n="05">Other questions</Label>
              <ul className="space-y-2.5">
                {CONTACT_FAQS.map((f) => (
                  <li key={f.q} className="border-b border-rule pb-3">
                    <p className="text-[15.5px] font-semibold text-navy">{f.q}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
