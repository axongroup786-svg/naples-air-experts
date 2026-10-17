import Link from "next/link";
import { BUSINESS, getService, SERVICES } from "@/lib/site";
import type { Block, ServiceContent } from "@/lib/content-types";
import { Icon } from "@/components/icons";
import LeadForm from "@/components/lead-form";
import { CallBand, Crumbs, FaqList, Label, TrustBar } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/jsonld";

function Blocks({ blocks, num, slug }: { blocks: Block[]; num: string; slug: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === "p")
          return (
            <p key={i} className="measure mb-4 text-[16.5px] leading-[1.72] text-muted">
              {b.text}
            </p>
          );
        if (b.t === "h3")
          return (
            <h3
              key={i}
              className="mb-3 mt-8 font-display text-[20px] font-bold uppercase tracking-[-0.01em] text-navy sm:text-[22px]"
            >
              {b.text}
            </h3>
          );
        if (b.t === "callout")
          return (
            <aside
              key={i}
              className="measure my-7 border-l-4 border-flare bg-panel px-5 py-4 text-[15.5px] leading-relaxed text-navy"
            >
              {b.text}
            </aside>
          );
        if (b.t === "table")
          return (
            <div key={i} className="my-7 overflow-x-auto border border-rule">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    {b.head.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="micro-sm px-3 py-3 font-medium sm:px-4"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, ri) => (
                    <tr
                      key={ri}
                      className={`border-t border-rule ${ri % 2 ? "bg-panel/60" : "bg-white"}`}
                    >
                      {r.map((c, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-3 align-top text-[14.5px] leading-snug sm:px-4 ${
                            ci === 0 ? "font-semibold text-navy" : "text-muted"
                          }`}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        if (b.t === "olist")
          return (
            <ol key={i} className="my-5 space-y-3">
              {b.items.map((it, ii) => (
                <li key={ii} className="flex gap-3.5">
                  <span className="micro-sm tnum mt-1 shrink-0 border border-navy px-1.5 py-0.5 text-navy">
                    {String(ii + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] leading-[1.65] text-muted">{it}</span>
                </li>
              ))}
            </ol>
          );
        return (
          <ul key={i} className="my-5 space-y-2.5">
            {b.items.map((it, ii) => (
              <li key={ii} className="flex gap-3">
                <span className="mt-[9px] h-[6px] w-[6px] shrink-0 bg-flare" aria-hidden="true" />
                <span className="text-[16px] leading-[1.65] text-muted">{it}</span>
              </li>
            ))}
          </ul>
        );
      })}
      {/* quiet internal links so every section passes link equity onward */}
      <p className="measure mt-6 border-t border-rule pt-5 text-[15px] text-muted">
        Related in {num}:{" "}
        <Link href="/service-areas/" className="font-semibold text-sky-deep hover:underline">
          service areas in {BUSINESS.city}, FL
        </Link>{" "}
        ·{" "}
        <Link href="/contact/" className="font-semibold text-sky-deep hover:underline">
          request an estimate
        </Link>
        .
      </p>
      <span hidden id={`anchor-marker-${slug}`} />
    </>
  );
}

export default function ServicePage({ data }: { data: ServiceContent }) {
  const meta = getService(data.slug);
  const related = data.related.map((s) => getService(s)).filter(Boolean);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: meta?.nav ?? data.h1, path: `/${data.slug}/` },
    { name: data.h1 },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(meta?.cardTitle ?? data.h1, data.slug, data.metaDescription)} />
      <JsonLd data={faqSchema(data.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path ?? `/${data.slug}/` })))} />

      {/* ---------- Page header ---------- */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-7 sm:pb-14 sm:pt-9">
          <Crumbs
            items={crumbs.map((c) => ({
              name: c.name,
              path: c.path && c.path !== `/${data.slug}/` ? c.path : undefined,
            }))}
          />
          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="micro mb-4 flex items-center gap-3 text-flare">
                <span className="tnum">{data.num}</span>
                <span className="h-px w-8 bg-white/30" aria-hidden="true" />
                <span>{data.kicker}</span>
              </p>
              <h1 className="display text-[clamp(2.1rem,5.4vw,3.6rem)] text-white">
                {data.h1}
              </h1>

              {/* Direct factual answer for AEO / AI answers */}
              <div className="mt-6 border border-white/20 bg-white/5 p-4 sm:p-5">
                <p className="micro mb-2 text-flare">Quick answer</p>
                <p className="text-[15.5px] leading-relaxed text-white/85">{data.quickAnswer}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={BUSINESS.phoneHref} className="btn btn-flare">
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                  <span className="tnum">{BUSINESS.phoneDisplay}</span>
                </a>
                <a href="#estimate" className="btn btn-outline-light">
                  Get Free Estimate
                </a>
              </div>
            </div>

            {/* Sticky side rail */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-[132px]">
                <div className="bg-white text-navy shadow-[0_24px_50px_-28px_rgba(0,0,0,.7)]">
                  <div className="flex items-center justify-between gap-3 border-b-2 border-dashed border-rule bg-panel px-4 py-3">
                    <p className="micro text-navy">On this page</p>
                    <span className="micro-sm tnum text-muted">#{data.num}</span>
                  </div>
                  <nav aria-label="On this page" className="px-4 py-3">
                    <ul className="space-y-1.5">
                      {data.sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="group flex items-center justify-between gap-3 border-b border-rule py-2 text-[14.5px] font-medium text-navy transition-colors hover:text-sky-deep"
                          >
                            {s.h2}
                            <Icon name="arrow" className="h-4 w-4 shrink-0 text-sky-deep" />
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="#faqs"
                          className="group flex items-center justify-between gap-3 py-2 text-[14.5px] font-medium text-navy transition-colors hover:text-sky-deep"
                        >
                          Frequently asked questions
                          <Icon name="arrow" className="h-4 w-4 shrink-0 text-sky-deep" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="border-t border-rule bg-navy px-4 py-4 text-white">
                    <p className="micro-sm text-white/60">Talk to a technician</p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="tnum mt-1.5 block font-mono text-[24px] font-bold text-flare"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                    <p className="micro-sm mt-1 text-white/65">{BUSINESS.hoursLabel}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="hazard-alert h-2" aria-hidden="true" />
      </section>

      {/* ---------- Body ---------- */}
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <article>
              {data.image && (
                <figure className="mb-8 border border-rule">
                  <img
                    src={data.image.src}
                    alt={data.image.alt}
                    width={1536}
                    height={1024}
                    className="aspect-[16/9] w-full object-cover"
                    loading="eager"
                  />
                  <figcaption className="micro-sm border-t border-rule bg-panel px-3 py-2 text-muted">
                    {data.image.alt}
                  </figcaption>
                </figure>
              )}

              {data.intro.map((p, i) => (
                <p key={i} className="measure mb-4 text-[17px] leading-[1.72] text-navy/85">
                  {p}
                </p>
              ))}

              {data.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="mt-11 scroll-mt-[150px]">
                  <Label n={String(i + 1).padStart(2, "0")}>{data.kicker}</Label>
                  <h2 className="display display-md mb-5 text-navy">{s.h2}</h2>
                  <Blocks blocks={s.blocks} num={data.num} slug={data.slug} />
                </section>
              ))}
            </article>
          </div>

          {/* Right rail — related services */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[132px]">
              <div className="border-2 border-navy">
                <p className="micro border-b-2 border-navy bg-navy px-4 py-3 text-white">
                  Related services
                </p>
                <ul>
                  {related.map((r) => (
                    <li key={r!.slug} className="border-b border-rule last:border-b-0">
                      <Link
                        href={`/${r!.slug}/`}
                        className="group flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:bg-panel"
                      >
                        <span>
                          <span className="block text-[15px] font-semibold text-navy">
                            {r!.cardTitle}
                          </span>
                          <span className="micro-sm text-muted">Naples, FL</span>
                        </span>
                        <Icon name="arrow" className="h-4 w-4 shrink-0 text-sky-deep" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-panel p-5">
                <p className="micro text-sky-deep">Who we serve</p>
                <ul className="mt-3 space-y-2 text-[15px] text-navy">
                  {[
                    "Homeowners in Naples, FL",
                    "Landlords & property managers",
                    "Small commercial buildings",
                    "Condo & association properties",
                  ].map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-flare-ink" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ---------- Middle CTA ---------- */}
      <CallBand
        heading={`Need ${meta?.cardTitle ?? "HVAC service"} in Naples, FL?`}
        text={`Call ${BUSINESS.phoneDisplay} to schedule ${meta?.cardTitle ?? "HVAC"} service, or request a written estimate. Licensed and insured technicians, upfront pricing, and 24/7 emergency service available across Collier County.`}
      />

      {/* ---------- All service pages: trust ---------- */}
      <TrustBar />

      {/* ---------- FAQs ---------- */}
      <section id="faqs" className="scroll-mt-[150px] bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Label n="FAQ">{meta?.cardTitle} · Naples, FL</Label>
              <h2 className="display display-md text-navy">
                {data.h1.replace(" in Naples, FL", "")} — Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
                Straight answers for Naples, FL homeowners and businesses. Need more detail? Call{" "}
                <a href={BUSINESS.phoneHref} className="tnum font-semibold text-sky-deep hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList items={data.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Bottom CTA + estimate form ---------- */}
      <section id="estimate" className="scroll-mt-[150px] bg-panel">
        <div className="hazard h-2" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Label n="CTA">Request service in Naples, FL</Label>
            <h2 className="display display-lg text-navy">
              Need {meta?.cardTitle ?? "HVAC service"} in Naples, FL?
            </h2>
            <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-muted">
              Contact Naples Air Experts for fast, professional HVAC service. Tell us what the
              system is doing and we will call back to confirm an appointment window — usually
              the same day when you reach us earlier in the day.
            </p>

            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ["Call us", BUSINESS.phoneDisplay, BUSINESS.phoneHref],
                ["Visit", BUSINESS.addressFull, "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(BUSINESS.addressFull)],
              ].map(([k, v, href]) => (
                <div key={k} className="border border-rule bg-white p-4">
                  <dt className="micro-sm text-muted">{k}</dt>
                  <dd className="mt-1.5 text-[15.5px] font-semibold text-navy">
                    <a href={href} className={k === "Call us" ? "tnum hover:text-flare-ink" : "hover:text-sky-deep"}>
                      {v}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7">
              <TrustBar />
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadForm variant="full" source="service-page" page={`/${data.slug}/`} title="Estimate Request" />
          </div>
        </div>
      </section>

      {/* ---------- Full service index for internal linking ---------- */}
      <nav aria-label="All HVAC services in Naples, FL" className="border-t border-rule bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-8">
          <p className="micro mb-4 text-sky-deep">All services · Naples, FL</p>
          <ul className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  className={`inline-block border px-3 py-2 text-[13.5px] transition-colors ${
                    s.slug === data.slug
                      ? "border-navy bg-navy text-white"
                      : "border-rule text-navy hover:border-navy hover:bg-panel"
                  }`}
                >
                  {s.cardTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
