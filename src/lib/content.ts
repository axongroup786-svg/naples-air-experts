import { CONTENT_A } from "./content-a";
import { CONTENT_B } from "./content-b";
import type { ServiceContent } from "./content-types";

export const ALL_CONTENT: ServiceContent[] = [...CONTENT_A, ...CONTENT_B];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return ALL_CONTENT.find((c) => c.slug === slug);
}

export type { ServiceContent } from "./content-types";
