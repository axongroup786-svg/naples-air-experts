"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/site";
import { Icon, Mark } from "@/components/icons";

const TOP_LINKS = [
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Dispatch strip */}
      <div className="bg-navy text-white/80">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-1.5">
          <p className="micro-sm truncate">
            <span className="text-flare">■</span> Collier County, FL — Licensed
            &amp; Insured Technicians
          </p>
          <p className="micro-sm hidden shrink-0 items-center gap-4 sm:flex">
            <span className="text-white/60">Open 24 hours</span>
            <a
              href={BUSINESS.phoneHref}
              className="tnum text-white transition-colors hover:text-flare"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      {/* Hazard rule */}
      <div className="hazard h-1.5" aria-hidden="true" />

      <div className="border-b-2 border-navy bg-white">
        <div className="mx-auto flex h-[66px] max-w-[1240px] items-center justify-between gap-3 px-4">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <Mark className="h-9 w-9 shrink-0" />
            <span className="leading-none">
              <span className="display block text-[16px] leading-none sm:text-[18px]">
                Naples Air Experts
              </span>
              <span className="micro-sm mt-1 block text-muted">
                HVAC · Naples, FL
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group relative">
                <span className="flex cursor-pointer items-center gap-1 px-3 py-5 font-sans text-[13.5px] font-semibold uppercase tracking-wide text-navy transition-colors group-hover:text-sky-deep">
                  Services
                  <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true">
                    <path d="M0.5 0.5 4.5 5 8.5 0.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <div className="invisible absolute left-0 top-full z-50 w-[540px] translate-y-1 border-2 border-navy bg-white p-2 opacity-0 shadow-[0_24px_50px_-24px_rgba(11,37,69,.6)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="grid grid-cols-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}/`}
                          className={`block px-3 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-panel hover:text-sky-deep ${
                            path === `/${s.slug}/` ? "bg-panel text-sky-deep" : "text-navy"
                          }`}
                        >
                          {s.cardTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center justify-between gap-3 border-t border-rule bg-navy px-3 py-2.5">
                    <span className="micro-sm text-white/70">
                      Not sure what you need?
                    </span>
                    <a
                      href={BUSINESS.phoneHref}
                      className="tnum font-mono text-[13px] font-bold text-flare"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
              </li>
              {TOP_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`px-3 py-5 font-sans text-[13.5px] font-semibold uppercase tracking-wide transition-colors hover:text-sky-deep ${
                      path === l.href ? "text-sky-deep" : "text-navy"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={BUSINESS.phoneHref}
              className="hidden items-center gap-2 border-2 border-navy px-3 py-2 transition-colors hover:bg-navy hover:text-white md:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-flare-ink" />
              <span className="tnum font-mono text-[15px] font-bold">
                {BUSINESS.phoneDisplay}
              </span>
            </a>
            <Link
              href="/contact/"
              className="btn btn-flare hidden !px-4 !py-2.5 !text-[12.5px] sm:inline-flex"
            >
              Get Free Estimate
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-110px)] overflow-y-auto border-b-2 border-navy bg-white shadow-[0_30px_60px_-30px_rgba(11,37,69,.7)] lg:hidden">
          <nav aria-label="Mobile" className="px-4 py-3">
            <p className="micro-sm mb-2 text-muted">Services</p>
            <ul className="mb-4 border-t border-rule">
              {SERVICES.map((s) => (
                <li key={s.slug} className="border-b border-rule">
                  <Link
                    href={`/${s.slug}/`}
                    className="flex items-center justify-between py-3 text-[15px] font-medium text-navy"
                  >
                    {s.cardTitle}
                    <Icon name="arrow" className="h-4 w-4 text-sky-deep" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="micro-sm mb-2 text-muted">Company</p>
            <ul className="border-t border-rule">
              {[{ href: "/", label: "Home" }, ...TOP_LINKS].map((l) => (
                <li key={l.href} className="border-b border-rule">
                  <Link
                    href={l.href}
                    className="flex items-center justify-between py-3 text-[15px] font-medium text-navy"
                  >
                    {l.label}
                    <Icon name="arrow" className="h-4 w-4 text-sky-deep" />
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phoneHref}
              className="btn btn-navy mt-4 w-full"
            >
              <Icon name="phone" className="h-4 w-4" /> Call{" "}
              {BUSINESS.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-navy bg-white lg:hidden">
      <div className="hazard h-1" aria-hidden="true" />
      <div className="grid grid-cols-2 gap-px bg-navy">
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center justify-center gap-2 bg-flare px-3 py-3.5 text-navy"
        >
          <Icon name="phone" className="h-[18px] w-[18px]" />
          <span className="display text-[14px]">Call Now</span>
        </a>
        <Link
          href="/contact/"
          className="flex items-center justify-center gap-2 bg-navy px-3 py-3.5 text-white"
        >
          <Icon name="doc" className="h-[18px] w-[18px]" />
          <span className="display text-[14px]">Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}

const FOOT_SERVICES = SERVICES.slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="hazard-alert h-2" aria-hidden="true" />
      <div className="mx-auto max-w-[1240px] px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* NAP */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Mark className="h-11 w-11" />
              <span>
                <span className="display block text-[19px] leading-none">
                  Naples Air Experts
                </span>
                <span className="micro-sm mt-1.5 block text-sky-deepLIGHTTMP">
                  HVAC / Air Conditioning
                </span>
              </span>
            </div>
            <address className="mt-5 space-y-1.5 not-italic text-[15px] text-white/75">
              <p className="font-medium text-white">{BUSINESS.name}</p>
              <p>{BUSINESS.addressFull}</p>
              <p>
                <a
                  href={BUSINESS.phoneHref}
                  className="tnum font-mono font-bold text-flare hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-flare">
                  {BUSINESS.email}
                </a>
              </p>
              <p className="pt-1 text-white/65">{BUSINESS.hoursLabel}</p>
            </address>
            <div className="mt-5 flex gap-2">
              {(
                [
                  ["facebook", "Facebook"],
                  ["instagram", "Instagram"],
                  ["x", "X"],
                  ["linkedin", "LinkedIn"],
                ] as const
              ).map(([k, label]) => (
                <a
                  key={k}
                  href={BUSINESS.socials[k]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BUSINESS.name} on ${label}`}
                  className="flex h-9 w-9 items-center justify-center border border-white/25 text-white/70 transition-colors hover:border-flare hover:bg-flare hover:text-navy"
                >
                  <Icon name={k === "x" ? "air" : k === "linkedin" ? "doc" : k} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="micro mb-4 text-flare">01 / Services</p>
            <ul className="space-y-2.5 text-[14.5px] text-white/75">
              {FOOT_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="transition-colors hover:text-flare">
                    {s.cardTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/heat-pump-services-naples-fl/" className="transition-colors hover:text-flare">
                  Heat Pump Services
                </Link>
              </li>
              <li>
                <Link href="/ductwork-repair-naples-fl/" className="transition-colors hover:text-flare">
                  Ductwork Repair &amp; Installation
                </Link>
              </li>
              <li>
                <Link href="/thermostat-installation-naples-fl/" className="transition-colors hover:text-flare">
                  Thermostat Installation
                </Link>
              </li>
              <li>
                <Link href="/ac-replacement-naples-fl/" className="transition-colors hover:text-flare">
                  AC Replacement
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="micro mb-4 text-flare">02 / Service Areas</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14.5px] text-white/75 lg:grid-cols-1">
              {[
                "Naples, FL",
                "North Naples, FL",
                "Bonita Springs, FL",
                "Estero, FL",
                "Marco Island, FL",
                "Golden Gate, FL",
                "Naples Park, FL",
                "Pelican Bay, FL",
                "Lely, FL",
                "Collier County, FL",
              ].map((a) => (
                <li key={a}>
                  <Link href="/service-areas/" className="transition-colors hover:text-flare">
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="micro mb-4 text-flare">03 / Quick Links</p>
            <ul className="space-y-2.5 text-[14.5px] text-white/75">
              {[
                { href: "/", label: "Home" },
                { href: "/about/", label: "About Us" },
                { href: "/contact/", label: "Contact" },
                { href: "/service-areas/", label: "Service Areas" },
                { href: "/privacy-policy/", label: "Privacy Policy" },
                { href: "/terms-of-service/", label: "Terms of Service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-flare">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href={BUSINESS.phoneHref} className="btn btn-flare w-full !px-3 !py-2.5 !text-[12px]">
                <Icon name="phone" className="h-4 w-4" /> Call Now
              </a>
              <Link href="/contact/" className="btn btn-outline-light w-full !px-3 !py-2.5 !text-[12px]">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="micro-sm text-white/65">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="micro-sm text-white/65">
            {BUSINESS.street} · {BUSINESS.city}, {BUSINESS.state}{" "}
            {BUSINESS.zip} · {BUSINESS.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
