// Homepage imagery and the three headline service highlights.
// Images are local (public/images/site), fetched from the manifest by the image
// robot. Copy is taken verbatim from the live site.

const IMG = "/images/site"; // local, served from the repo (fetched by the image robot)

export const hero = {
  image: `${IMG}/commercial-landscape-maintenance-charleston-sc.webp`,
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
    image: `${IMG}/turf-installer-charleston-sc.webp`,
    alt: "Turf installer laying fresh sod on a Charleston SC lawn",
    description:
      "Mowing, edging, fertilization, weed control, and seasonal cleanups to keep your grass thick, green, and healthy.",
  },
  {
    title: "Landscape Design",
    href: "/services/landscaping/",
    image: `${IMG}/backyard-fire-pit-charleston-sc.webp`,
    alt: "Backyard fire pit and landscaped seating area in Charleston SC",
    description:
      "Custom landscaping that fits your home, your style, and the Lowcountry climate. We design, install, and maintain.",
  },
  {
    title: "Hardscaping & Irrigation",
    href: "/services/hardscaping/",
    image: `${IMG}/decorative-rock-installation-charleston-sc.webp`,
    alt: "Decorative rock and hardscape installation in Charleston SC",
    description:
      "Patios, walkways, retaining walls, and irrigation systems built to last through Charleston's heat and storms.",
  },
];

export const whyUs = {
  image: `${IMG}/about-tt-lawn-and-landscape.webp`,
  alt: "Beautifully maintained residential property by T&T Lawn & Landscape",
  points: [
    "Licensed, bonded, and fully insured",
    "Free, no-pressure estimates",
    "Reliable weekly and biweekly service",
    "Residential and commercial expertise",
  ],
};
