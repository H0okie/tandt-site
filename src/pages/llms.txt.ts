import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../config/site";

export const GET: APIRoute = async () => {
  const categories = (await getCollection("serviceCategories")).sort((a, b) => a.data.order - b.data.order);
  const services = await getCollection("services", ({ data }) => !data.draft);

  let out = `# ${site.name}\n\n`;
  out += `> ${site.description}\n\n`;
  out += `${site.name} is a lawn care and landscaping company serving ${site.areaServed}. `;
  out += `Licensed, bonded, and insured, with ${site.yearsExperience}+ years of experience. `;
  out += `Phone: ${site.phone}. Address: ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}. Hours: ${site.hoursLabel}.\n\n`;

  out += `## Services\n\n`;
  for (const c of categories) {
    out += `### ${c.data.title}\n`;
    out += `- [${c.data.title} overview](${site.url}/services/${c.id}/): ${c.data.description}\n`;
    for (const s of services.filter((s) => s.data.category.id === c.id).sort((a, b) => a.data.order - b.data.order)) {
      out += `- [${s.data.title}](${site.url}/services/${c.id}/${s.id}/): ${s.data.shortDescription}\n`;
    }
    out += `\n`;
  }

  out += `## More\n`;
  out += `- [About](${site.url}/about/): Company background and credentials.\n`;
  out += `- [Contact](${site.url}/contact/): Request a free, on-site quote.\n`;
  out += `- [News & Tips](${site.url}/blog/): Seasonal lawn and landscaping advice.\n`;
  out += `- [Knowledge graph](${site.url}/okf/index.md): Structured OKF representation of this site.\n`;

  return new Response(out, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
