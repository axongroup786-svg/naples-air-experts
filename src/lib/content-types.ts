export type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "list"; items: string[] }
  | { t: "olist"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "callout"; text: string };

export type Section = { id: string; h2: string; blocks: Block[] };

export type ServiceContent = {
  slug: string;
  num: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  quickAnswer: string;
  intro: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
  image?: { src: string; alt: string };
};
