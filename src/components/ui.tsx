import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { Icon } from "@/components/icons";

export function Crumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="micro-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-flare">
                /
              </span>
            )}
            {it.path ? (
              <Link
                href={it.path}
                className="text-white/70 underline-offset-4 transition-colors hover:text-flare hover:underline"
              >
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Label({ n, children, tone = "light" }: { n?: string; children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={`micro mb-4 flex items-center gap-3 ${tone === "dark" ? "text-flare" : "text-sky-deep"}`}>
      {n && <span className="tnum">{n}</span>}
      <span className={`h-px w-8 ${tone === "dark" ? "bg-white/30" : "bg-rule"}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function TrustBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const items = [
    { icon: "clock", t: "24/7 Emergency Service", s: "Live answer, any day" },
    { icon: "shield", t: "Licensed & Insured Technicians", s: "Fully credentialed" },
    { icon: "tag", t: "Upfront Pricing", s: "Approve before we start" },
    { icon: "pin", t: "Local Naples HVAC Experts", s: "Based in Collier County" },
  ];
  const dark = tone === "dark";
  return (
    <ul
      className={`grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 ${
        dark ? "divide-white/10 bg-navy text-white" : "divide-rule bg-white text-navy"
      }`}
    >
      {items.map((it, i) => (
        <li
          key={it.t}
          data-reveal
          className={`flex items-start gap-3 px-4 py-4 sm:px-5 ${
            dark ? "sm:border-r sm:border-white/10" : "sm:border-r sm:border-rule"
          } ${i === items.length - 1 ? "sm:border-r-0" : ""} ${
            i < 2 ? "sm:border-b lg:border-b-0" : ""
          } ${dark ? "sm:border-b-white/10" : "sm:border-b-rule"}`}
        >
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center ${
              dark ? "bg-flare text-navy" : "bg-navy text-white"
            }`}
          >
            <Icon name={it.icon} className="h-[17px] w-[17px]" />
          </span>
          <span>
            <span className="block text-[14px] font-semibold leading-snug">{it.t}</span>
            <span className={`micro-sm mt-1 block ${dark ? "text-white/65" : "text-muted"}`}>
              {it.s}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CallBand({
  heading,
  text,
  id = "cta-mid",
}: {
  heading: string;
  text: string;
  id?: string;
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-start gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="max-w-2xl">
          <p className="micro mb-3 text-flare">Ready when you are</p>
          <h2 className="display display-md text-white">{heading}</h2>
          <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-white/70">{text}</p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row md:items-center">
          <a href={BUSINESS.phoneHref} className="btn btn-flare">
            <Icon name="phone" className="h-[18px] w-[18px]" />
            <span className="tnum">{BUSINESS.phoneDisplay}</span>
          </a>
          <Link href="/contact/" className="btn btn-outline-light">
            Get Free Estimate
          </Link>
        </div>
      </div>
      <div className="hazard-alert h-2" aria-hidden="true" />
    </section>
  );
}

export function FaqList({
  items,
  tone = "light",
}: {
  items: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={dark ? "text-white" : "text-navy"}>
      {items.map((f, i) => (
        <details
          key={f.q}
          data-reveal
          className={`faq-item group border-b ${dark ? "border-white/15" : "border-rule"} ${i === 0 ? (dark ? "border-t border-white/15" : "border-t border-rule") : ""}`}
        >
          <summary className="flex items-start justify-between gap-4 py-4 text-left sm:py-5">
            <span className="flex items-start gap-3 sm:gap-4">
              <span
                className={`micro-sm tnum mt-1 shrink-0 ${dark ? "text-flare" : "text-sky-deep"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-[16px] font-semibold leading-snug sm:text-[17px]">
                {f.q}
              </h3>
            </span>
            <span
              className={`faq-plus flex h-7 w-7 shrink-0 items-center justify-center border ${
                dark ? "border-white/30 text-white" : "border-navy text-navy"
              }`}
              aria-hidden="true"
            >
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <div
            className={`pb-5 pl-0 text-[15.5px] leading-relaxed sm:pl-11 ${dark ? "text-white/70" : "text-muted"}`}
          >
            <p className="measure">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-7 border-l-4 border-sky bg-panel px-5 py-4">
      <p className="text-[15.5px] leading-relaxed text-navy">{children}</p>
    </aside>
  );
}
