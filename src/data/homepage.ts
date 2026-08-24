// Homepage imagery and the three headline service highlights.
// Images point at T&T's existing CDN for now — Phase 8 downloads and optimizes
// local copies via Astro's <Image>. Copy is taken verbatim from the live site.

const CDN = "https://tandtlawnandlandscape.com/wp-content/uploads/2026/05";

export const hero = {
  image: `${CDN}/commercial-landscape-maintenance-Charleston-SC.webp`,
};

export interface ServiceHighlight {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
}

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: "Lawn Care",
    href: "/services/lawn-care/",
    image: `${CDN}/turf-installer-Charleston-SC.webp`,
    alt: "Turf installer laying fresh sod on a Charleston SC lawn",
    description:
      "Mowing, edging, fertilization, weed control, and seasonal cleanups to keep your grass thick, green, and healthy.",
  },
  {
    title: "Landscape Design",
    href: "/services/landscaping/",
    image: `${CDN}/backyard-fire-pit-Charleston-SC.webp`,
    alt: "Backyard fire pit and landscaped seating area in Charleston SC",
    description:
      "Custom landscaping that fits your home, your style, and the Lowcountry climate. We design, install, and maintain.",
  },
  {
    title: "Hardscaping & Irrigation",
    href: "/services/hardscaping/",
    image: `${CDN}/decorative-rock-installation-Charleston-SC.webp`,
    alt: "Decorative rock and hardscape installation in Charleston SC",
    description:
      "Patios, walkways, retaining walls, and irrigation systems built to last through Charleston's heat and storms.",
  },
];

export const whyUs = {
  image: `${CDN}/About-TT-lawn-and-Landscape.webp`,
  alt: "Beautifully maintained residential property by T&T Lawn & Landscape",
  points: [
    "Licensed, bonded, and fully insured",
    "Free, no-pressure estimates",
    "Reliable weekly and biweekly service",
    "Residential and commercial expertise",
  ],
};
