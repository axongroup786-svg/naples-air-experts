export const BUSINESS = {
  name: "Naples Air Experts",
  tagline: "HVAC / Air Conditioning Services",
  phoneDisplay: "(239) 765-4321",
  phoneHref: "tel:+12397654321",
  street: "3899 Mannix Dr",
  city: "Naples",
  state: "FL",
  zip: "34114",
  addressFull: "3899 Mannix Dr, Naples, FL 34114",
  url: "https://www.naplesairexperts.com",
  email: "service@naplesairexperts.com",
  geo: { lat: 26.16409, lng: -81.79897 },
  hours: "Mo-Su 00:00-23:59",
  hoursLabel: "Open 24 hours — 7 days a week",
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export type ServiceMeta = {
  slug: string;
  nav: string;
  cardTitle: string;
  short: string;
  icon: string;
};

export const SERVICES: ServiceMeta[] = [
  {
    slug: "ac-repair-naples-fl",
    nav: "AC Repair",
    cardTitle: "AC Repair",
    short:
      "Diagnostics and repairs for systems that short-cycle, blow warm air, freeze up, or run up your electric bill.",
    icon: "wrench",
  },
  {
    slug: "ac-installation-naples-fl",
    nav: "AC Installation",
    cardTitle: "AC Installation",
    short:
      "Load-calculated system design and clean installation of central air conditioners and mini-splits.",
    icon: "install",
  },
  {
    slug: "ac-replacement-naples-fl",
    nav: "AC Replacement",
    cardTitle: "AC Replacement",
    short:
      "Change out aging or failing equipment for a right-sized, efficient system with a clear written quote.",
    icon: "swap",
  },
  {
    slug: "ac-maintenance-naples-fl",
    nav: "AC Maintenance",
    cardTitle: "AC Maintenance",
    short:
      "Seasonal tune-ups that catch worn parts early and keep Florida systems cooling through peak summer.",
    icon: "gauge",
  },
  {
    slug: "emergency-ac-repair-naples-fl",
    nav: "Emergency Service",
    cardTitle: "Emergency AC Repair",
    short:
      "Urgent response for no-cool calls, water leaks, burnt electrical smells, and after-hours breakdowns.",
    icon: "siren",
  },
  {
    slug: "heating-repair-naples-fl",
    nav: "Heating Repair",
    cardTitle: "Heating & Furnace Repair",
    short:
      "Repairs for furnaces, heat strips, and the heating mode of your heat pump when Collier County gets a cold snap.",
    icon: "heat",
  },
  {
    slug: "heat-pump-services-naples-fl",
    nav: "Heat Pumps",
    cardTitle: "Heat Pump Services",
    short:
      "Repair, installation, and maintenance for the heat pump systems most common across Naples homes.",
    icon: "pump",
  },
  {
    slug: "duct-cleaning-naples-fl",
    nav: "Duct Cleaning",
    cardTitle: "Duct Cleaning",
    short:
      "Removal of dust, debris, and buildup from supply and return ductwork for cleaner airflow.",
    icon: "duct",
  },
  {
    slug: "ductwork-repair-naples-fl",
    nav: "Ductwork Repair",
    cardTitle: "Ductwork Repair & Installation",
    short:
      "Sealing, patching, and new duct runs that fix hot rooms, weak airflow, and energy-wasting leaks.",
    icon: "duct",
  },
  {
    slug: "indoor-air-quality-naples-fl",
    nav: "Indoor Air Quality",
    cardTitle: "Indoor Air Quality",
    short:
      "Filtration, purification, humidity control, and ventilation for humid Gulf-coast air.",
    icon: "air",
  },
  {
    slug: "thermostat-installation-naples-fl",
    nav: "Thermostats",
    cardTitle: "Thermostat Installation",
    short:
      "Supply and install of smart and programmable thermostats, wired and configured correctly.",
    icon: "thermostat",
  },
  {
    slug: "commercial-hvac-naples-fl",
    nav: "Commercial HVAC",
    cardTitle: "Commercial HVAC",
    short:
      "Repair, maintenance, and replacement for offices, retail, restaurants, and small commercial buildings.",
    icon: "commercial",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const TRUST = [
  { n: "01", title: "24/7 Emergency Service", note: "Live help, any day" },
  { n: "02", title: "Licensed & Insured Technicians", note: "Background checked" },
  { n: "03", title: "Upfront Pricing", note: "Approve before we start" },
  { n: "04", title: "Local Naples HVAC Experts", note: "Collier County based" },
];

export const AREAS = [
  {
    name: "Naples",
    slug: "naples",
    zip: "34108 · 34102 · 34103 · 34114",
    blurb:
      "Our home market. From Gulf Shore high-rises to inland single-family homes off Golden Gate Parkway, Naples properties run a heavy cooling load year-round and salt air off the Gulf makes coil and electrical maintenance a real concern.",
    services: ["AC Repair", "AC Installation", "Duct Cleaning", "Emergency Service"],
    concerns: [
      "Salt-air corrosion on outdoor condenser coils",
      "Short-cycling in older bungalows with undersized ductwork",
      "Humidity control in ground-floor condos and villas",
    ],
  },
  {
    name: "North Naples",
    slug: "north-naples",
    zip: "34109 · 34119 · 34120",
    blurb:
      "Newer construction around Immokalee Road and Orangetree tends to use larger variable-speed systems and long duct runs through hot attics, where a single kinked flex line can throw off airflow for an entire floor.",
    services: ["AC Maintenance", "Heat Pump Services", "Ductwork Repair", "Thermostat Installation"],
    concerns: ["Attic duct heat gain on long runs", "Static-pressure issues in two-story homes", "Smart thermostat zoning requests"],
  },
  {
    name: "Bonita Springs",
    slug: "bonita-springs",
    zip: "34134 · 34135",
    blurb:
      "Bonita Springs sits just over the Lee County line, and we regularly service homes and small businesses off Old 41 and Bonita Beach Road where afternoon storms and standing water stress outdoor pads and disconnects.",
    services: ["AC Repair", "AC Replacement", "Emergency Service", "Commercial HVAC"],
    concerns: ["Waterlogged condenser pads after storms", "Rust on disconnect boxes and run capacitors", "Older split systems nearing end of life"],
  },
  {
    name: "Estero",
    slug: "estero",
    zip: "34135 · 33928",
    blurb:
      "Estero's master-planned communities and condo towers mix central split systems with packaged rooftop units, so we keep both residential and light-commercial trucks stocked for the same route.",
    services: ["AC Installation", "Commercial HVAC", "Indoor Air Quality", "AC Maintenance"],
    concerns: ["High shared-wall humidity", "Rooftop unit access scheduling in condo associations", "Filtration upgrades for allergy season"],
  },
  {
    name: "Marco Island",
    slug: "marco-island",
    zip: "34145",
    blurb:
      "Barrier-island living means constant exposure to salt spray. Marco Island equipment typically needs more frequent coil cleaning, tighter electrical checks, and corrosion-resistant replacement parts.",
    services: ["AC Replacement", "Ductwork Repair", "Emergency Service", "Heat Pump Services"],
    concerns: ["Salt corrosion on coils and circuit boards", "Galvanic wear on condenser fan motors", "Rapid filter loading from coastal dust"],
  },
  {
    name: "Golden Gate",
    slug: "golden-gate",
    zip: "34116 · 34117 · 34120",
    blurb:
      "Golden Gate Estates has some of the longest duct runs in Collier County. Many homes here were built with trunk-and-branch systems that have never been sealed, which shows up as uneven rooms and high bills.",
    services: ["Ductwork Repair", "Duct Cleaning", "AC Repair", "AC Maintenance"],
    concerns: ["Unsealed trunk lines in attics", "Hot second floors and far bedrooms", "Dust recurrence after filter changes"],
  },
  {
    name: "Naples Park",
    slug: "naples-park",
    zip: "34102 · 34108",
    blurb:
      "Older Naples Park cottages often still run original equipment with minimal return-air design. We focus on right-sizing and adding returns rather than simply swapping like-for-like units.",
    services: ["AC Replacement", "AC Installation", "Indoor Air Quality", "AC Repair"],
    concerns: ["Undersized returns causing negative pressure", "Original systems past 15 years", "Wall-ceiling condensation from restricted airflow"],
  },
  {
    name: "Pelican Bay",
    slug: "pelican-bay",
    zip: "34108",
    blurb:
      "Pelican Bay's mid- and high-rise buildings use building-level systems and fan coils with individual zones. Service here means coordinating with association rules and working cleanly inside finished residences.",
    services: ["Thermostat Installation", "Indoor Air Quality", "AC Maintenance", "Commercial HVAC"],
    concerns: ["Association-approved access windows", "Fan-coil drain and humidity issues", "Quiet, tidy work in occupied units"],
  },
  {
    name: "Lely",
    slug: "lely",
    zip: "34113",
    blurb:
      "Lely Resorts and Lely areas mix golf-community homes with older inland properties. Many sit on well or reclaimed-water irrigation that drifts onto condenser pads and accelerates rust.",
    services: ["AC Repair", "AC Replacement", "AC Maintenance", "Duct Cleaning"],
    concerns: ["Irrigation overspray causing coil corrosion", "Debris and palm frond buildup on pads", "Uneven cooling across split-level layouts"],
  },
  {
    name: "Collier County",
    slug: "collier-county",
    zip: "All of Collier County, FL",
    blurb:
      "Beyond the incorporated areas we cover Immokalee, Ave Maria, Naples Manor, Vanderbilt, Corkscrew, and unincorporated Collier. If you are unsure whether we reach you, call and we will tell you straight away.",
    services: ["All HVAC Services", "Commercial HVAC", "Emergency Service", "Maintenance Plans"],
    concerns: ["Longer rural response distances", "Mixed residential and agricultural loads", "Whole-home system replacements"],
  },
];

export const HOME_FAQS = [
  {
    q: "How much does AC repair cost in Naples, FL?",
    a: "Most residential AC repairs in Naples fall between a routine diagnostic visit and a major component replacement, depending on the failed part. Simple fixes such as a run capacitor or contactor are on the low end, while a compressor or coil replacement is higher. We inspect the system first and give you a written, upfront price before any work begins.",
  },
  {
    q: "Do you offer emergency AC repair?",
    a: "Yes. Naples Air Experts offers 24/7 emergency AC repair across Naples and nearby Collier County communities. No-cool calls, water leaking from the indoor unit, breaker trips, and burning smells are treated as urgent. Call (239) 765-4321 and we will tell you the next available window.",
  },
  {
    q: "How often should I service my AC in Florida?",
    a: "Once a year for cooling, ideally in early spring before the heat and humidity peak. Florida systems run long hours and work harder than in most states, so an annual tune-up that cleans the coil, checks refrigerant, clears the condensate drain, and tests electrical parts prevents most summer breakdowns.",
  },
  {
    q: "What are signs my AC needs repair?",
    a: "Watch for warm air from the vents, weak airflow, short cycling, a unit that will not start, rising electric bills, ice on the suction line, musty or burnt odors, and water pooling around the air handler. Any of these means the system should be inspected before a small problem becomes a full failure.",
  },
  {
    q: "Do you install energy-efficient AC systems?",
    a: "Yes. We install high-efficiency central air conditioners, inverter heat pumps, and ductless mini-splits sized to the load of your home rather than the size of the old unit. We will walk you through efficiency ratings, runtime, and what each option means for your monthly bill.",
  },
  {
    q: "Do you service heat pumps?",
    a: "Yes. Heat pumps are the most common heating and cooling equipment in Naples, FL. We repair, maintain, and install them, including reversing valves, defrost boards, and backup heat strips that only fail during the first cold snap of the year.",
  },
  {
    q: "Do you offer commercial HVAC services?",
    a: "Yes. Naples Air Experts services offices, retail stores, restaurants, warehouses, and small commercial buildings, including packaged rooftop units, split systems, and make-up air. We offer scheduled maintenance so your business does not lose trading hours to a breakdown.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Naples, North Naples, Bonita Springs, Estero, Marco Island, Golden Gate, Naples Park, Pelican Bay, Lely, and the rest of Collier County, Florida. If you are nearby and not listed, call (239) 765-4321 and we will confirm availability.",
  },
];

export const QUICK_ANSWERS = [
  {
    q: "Do you offer emergency AC repair in Naples?",
    a: "Yes — 24/7 emergency AC repair is available.",
  },
  {
    q: "Do you serve Bonita Springs and Estero?",
    a: "Yes — service covers Naples and nearby communities.",
  },
  {
    q: "Do you handle residential and commercial HVAC?",
    a: "Yes — homes, rentals, and small commercial buildings.",
  },
  {
    q: "How can I request service?",
    a: "Call (239) 765-4321 or submit the online estimate form.",
  },
];

export const WHY = [
  {
    n: "01",
    title: "Local Naples HVAC knowledge",
    body: "Gulf-coast humidity, salt air, afternoon thunderstorms, and hot attics all change how equipment ages here. We service Collier County homes every day, so the diagnosis starts from what actually fails in this climate.",
  },
  {
    n: "02",
    title: "Fast response for cooling emergencies",
    body: "No-cool calls are prioritized. We give you a real arrival window instead of an all-day guess, and 24/7 emergency service is available when a system quits overnight.",
  },
  {
    n: "03",
    title: "Transparent pricing",
    body: "You get the findings and a written price before work starts. If the scope changes mid-job, we stop and re-quote. No surprise line items on the final invoice.",
  },
  {
    n: "04",
    title: "Experienced technicians",
    body: "Licensed and insured technicians who diagnose the whole system — airflow, refrigerant, electrical, and controls — instead of swapping the first part that looks bad.",
  },
  {
    n: "05",
    title: "Residential and commercial service",
    body: "One contractor for the house, the rental portfolio, and the storefront. We handle central AC, heat pumps, mini-splits, ductwork, and rooftop units.",
  },
  {
    n: "06",
    title: "Customer-first approach",
    body: "We protect floors, explain options in plain English, and leave the work area clean. Satisfaction focused service means the job is not finished until the system runs right.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Call or request service online",
    body: "Reach us at (239) 765-4321 or send the estimate form with your address, system type, and what you are seeing. We confirm the appointment window right away.",
  },
  {
    n: "02",
    title: "Get a clear diagnosis and upfront estimate",
    body: "The technician inspects airflow, electrical, refrigerant, and controls, then explains what failed, what it will cost, and what your options are — in writing.",
  },
  {
    n: "03",
    title: "Receive professional HVAC service",
    body: "Once you approve the work, we complete the repair or installation, test the system under load, clean the area, and walk you through what to watch.",
  },
];

export const HOME_SERVICES_SLUGS = [
  "ac-repair-naples-fl",
  "ac-installation-naples-fl",
  "ac-maintenance-naples-fl",
  "emergency-ac-repair-naples-fl",
  "heating-repair-naples-fl",
  "duct-cleaning-naples-fl",
  "indoor-air-quality-naples-fl",
  "commercial-hvac-naples-fl",
];
