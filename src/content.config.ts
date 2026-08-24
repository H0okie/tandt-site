import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// The 6 top-level service groups (Lawn Care, Landscaping, etc.).
// One markdown file per category; the filename is the URL slug.
const serviceCategories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/serviceCategories" }),
  schema: z.object({
    title: z.string(),
    // Short label for compact spots like the mega-menu column header
    menuLabel: z.string().optional(),
    // One-line summary used on cards and the category hero
    description: z.string(),
    // Controls left-to-right / top-to-bottom order in the nav
    order: z.number(),
    // Optional remote/optimized image for the category hero (localized later)
    heroImage: z.string().optional(),
  }),
});

// The individual services (Mowing & Edging, Tree Removal, ...).
// One markdown file per service; filename is the slug; `category` links it
// to a serviceCategories entry by that entry's filename.
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    category: reference("serviceCategories"),
    order: z.number().default(0),
    // Shown on menu items and service cards (keep under ~120 chars)
    shortDescription: z.string(),
    heroImage: z.string().optional(),
    // Bullet-point selling points for the service page
    features: z.array(z.string()).default([]),
    // Set true to keep a page out of nav/sitemap while you draft it
    draft: z.boolean().default(false),
  }),
});

// Blog / news posts. One markdown file per post; filename is the URL slug.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("T&T Lawn & Landscape"),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { serviceCategories, services, posts };
