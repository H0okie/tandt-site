import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../../config/site";

export async function getStaticPaths() {
  const services = await getCollection("services", ({ data }) => !data.draft);
  const categories = await getCollection("serviceCategories");
  const catById = new Map(categories.map((c) => [c.id, c]));
  return services.map((service) => {
    const category = catById.get(service.data.category.id)!;
    const siblings = services
      .filter((s) => s.data.category.id === service.data.category.id && s.id !== service.id)
      .map((s) => s.id);
    return { params: { service: service.id }, props: { service, category, siblings } };
  });
}

export const GET: APIRoute = ({ props }) => {
  const { service, category, siblings } = props as any;
  const page = `${site.url}/services/${category.id}/${service.id}/`;
  let md = `---\ntype: service\nname: ${service.data.title}\ncategory: ${category.data.title}\nprovider: ${site.name}\narea_served: ${site.areaServed}\ncanonical: ${page}\n---\n\n`;
  md += `# ${service.data.title}\n\n${service.data.shortDescription}\n\n`;
  if (service.data.features?.length) {
    md += `## What's included\n${service.data.features.map((f: string) => `- ${f}`).join("\n")}\n\n`;
  }
  md += `## Edges\n`;
  md += `- category → [${category.data.title}](${site.url}/services/${category.id}/)\n`;
  md += `- page → [${service.data.title}](${page})\n`;
  md += `- provider → [${site.name}](${site.url}/okf/index.md)\n`;
  for (const sib of siblings) {
    md += `- related → [${sib}](${site.url}/okf/${sib}.md)\n`;
  }
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
