import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_SLUGS, getService } from "@/lib/site";
import { getServiceContent } from "@/lib/content";
import ServicePage from "@/components/service-page";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceContent(slug);
  if (!data) return {};
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/${slug}/` },
    keywords: [data.h1, "Naples FL HVAC", getService(slug)?.nav ?? "HVAC"],
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${slug}/`,
      type: "article",
    },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = getServiceContent(slug);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
