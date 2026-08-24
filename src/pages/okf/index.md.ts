import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../../config/site";

export const GET: APIRoute = async () => {
  const categories = (await getCollection("serviceCategories")).sort((a, b) => a.data.order - b.data.order);
  const services = await getCollection("services", ({ data }) => !data.draft);

  let md = `---\ntype: organization\nname: ${site.name}\nurl: ${site.url}\ntelephone: "${site.phone}"\narea_served: ${site.areaServed}\n---\n\n`;
  md += `# ${site.name} — Knowledge Graph\n\n${site.description}\n\n`;
  md += `## Service categories\n\n`;
  for (const c of categories) {
    const kids = services.filter((s) => s.data.category.id === c.id).sort((a, b) => a.data.order - b.data.order);
    md += `- [[${c.data.title}]](${site.url}/services/${c.id}/) — ${c.data.description}\n`;
    for (const s of kids) {
      md += `  - [[${s.data.title}]](${site.url}/okf/${s.id}.md) → [page](${site.url}/services/${c.id}/${s.id}/)\n`;
    }
  }
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
