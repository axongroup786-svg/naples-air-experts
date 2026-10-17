import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

const paths: Record<string, React.ReactNode> = {
  wrench: (
    <>
      <path d="M14.7 6.3a4.5 4.5 0 0 0 5.9 5.9L21 12l-8.6 8.6a2.6 2.6 0 1 1-3.7-3.7L17.3 8.3" />
      <path d="M14.7 6.3 12 3.6 4.6 11l2.7 2.7" />
    </>
  ),
  install: (
    <>
      <rect x="3" y="3" width="18" height="9" rx="1.5" />
      <path d="M7 12v3M12 12v5M17 12v3" />
      <path d="M6.5 18.5c0 1.4 1.2 2.5 2.6 2.5M12 21c1.4 0 2.6-1.1 2.6-2.5M17.5 18.5c0 1.4-1.1 2.5-2.6 2.5" />
    </>
  ),
  swap: (
    <>
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
      <rect x="3" y="19" width="6" height="2.5" rx="0.6" />
      <rect x="15" y="2.5" width="6" height="2.5" rx="0.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12l5-3.5" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M21 12v3M17.5 5.5 15.4 7.6M6.5 5.5l2.1 2.1" />
    </>
  ),
  siren: (
    <>
      <path d="M6 20v-6a6 6 0 0 1 12 0v6" />
      <path d="M4 20h16" />
      <path d="M12 3v2M4.9 6.4 6.3 7.8M19.1 6.4 17.7 7.8" />
      <path d="M9.5 16.5h5" />
    </>
  ),
  heat: (
    <>
      <path d="M12 3c2.5 2.6 1.4 4.6.6 5.6-.9 1.1-1.6 2-.6 3.4" />
      <path d="M16.5 4.5c1.9 2 1.1 3.5.5 4.3-.7.8-1.2 1.5-.5 2.6" />
      <path d="M7.5 4.5c-1.9 2-1.1 3.5-.5 4.3.7.8 1.2 1.5.5 2.6" />
      <path d="M5 18.5c1.4-1.2 2.6-1.2 4 0s2.6 1.2 4 0 2.6-1.2 4 0 2.6 1.2 4 0" />
    </>
  ),
  pump: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17M3.5 12h17" />
      <path d="M12 12c2.6-2.6 5.2-2.6 7 0M12 12c-2.6 2.6-5.2 2.6-7 0" />
    </>
  ),
  duct: (
    <>
      <path d="M3 7h8v10H3z" />
      <path d="M11 9h5v6h5" />
      <path d="M17 6.5v3M20.5 6.5v3" />
      <path d="M6 7V5M6 19v-2" />
    </>
  ),
  air: (
    <>
      <path d="M3 8h9.5a2.8 2.8 0 1 0-2.8-2.8" />
      <path d="M3 12.5h13a3 3 0 1 1-3 3" />
      <path d="M3 17h6.5" />
    </>
  ),
  thermostat: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21" />
    </>
  ),
  commercial: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l6-4v17" />
      <path d="M11 21V10l8 3v8" />
      <path d="M7.5 11.5v0M7.5 15v0M14.5 15.5v0M17 16.5v0" />
    </>
  ),
  phone: (
    <path
      d="M6.2 3.5h3l1.5 4-2 1.3a12 12 0 0 0 6.5 6.5l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.6 2.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.3 2.9 7.6 7 9.3 4.1-1.7 7-5 7-9.3V5.8Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12.5V4h8.5L21 13.5 13.5 21Z" />
      <circle cx="7.5" cy="8" r="1.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  home: (
    <>
      <path d="m3 11 9-7.5 9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2" />
    </>
  ),
};

export function Icon({ name, ...p }: P & { name: string }) {
  return <svg {...base(p)}>{paths[name] ?? paths.check}</svg>;
}

export function Mark(p: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...p}>
      <rect x="0" y="0" width="48" height="48" fill="#0B2545" />
      <rect x="3" y="3" width="42" height="42" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.55" />
      <g stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round">
        <path d="M24 9v30M11 16.5l26 15M11 31.5l26-15" />
      </g>
      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
        <path d="M24 13.5 20.5 17M24 13.5 27.5 17M24 34.5 20.5 31M24 34.5 27.5 31" />
        <path d="M14.5 19.5 14.4 23.5M14.5 19.5 18.2 20.4M33.5 28.5l.1-4M33.5 28.5l-3.7-.9" />
        <path d="M14.5 28.5 14.6 24.5M14.5 28.5l3.7.9M33.5 19.5l-.1 4M33.5 19.5l-3.7-.9" />
      </g>
      <rect x="0" y="42" width="48" height="6" fill="#F97316" />
    </svg>
  );
}
