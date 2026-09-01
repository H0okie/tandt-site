// Recent-projects gallery. Image URLs currently point at T&T's existing CDN;
// in Phase 8 we'll download and serve optimized local copies via Astro's
// <Image> component. Every item has descriptive alt text (several originals
// shipped empty alt attributes — an accessibility + SEO fix).

export interface Project {
  src: string;
  alt: string;
}

const IMG = "/images/site"; // local, served from the repo (fetched by the image robot)

export const projects: Project[] = [
  { src: `${IMG}/about-tt-lawn-and-landscape.webp`, alt: "Freshly maintained residential lawn and landscaping by T&T in Charleston SC" },
  { src: `${IMG}/landscape-renovation-charleston-sc-1.webp`, alt: "Completed landscape renovation with new beds and plantings in Charleston SC" },
  { src: `${IMG}/drainage-trench-install-charleston.webp`, alt: "Drainage trench installation to solve yard water problems in Charleston" },
  { src: `${IMG}/decorative-rock-installation-charleston-sc.webp`, alt: "Decorative rock installation around a landscaped bed in Charleston SC" },
  { src: `${IMG}/outdoor-structure-builder-charleston-sc.webp`, alt: "Custom outdoor structure built by T&T in a Charleston SC backyard" },
  { src: `${IMG}/backyard-fire-pit-charleston-sc.webp`, alt: "Backyard fire pit and seating area hardscape in Charleston SC" },
  { src: `${IMG}/seasonal-flower-planting-charleston.webp`, alt: "Seasonal flower planting adding color to a Charleston property" },
  { src: `${IMG}/flower-bed-installation-charleston-sc.webp`, alt: "New flower bed installation along a home's foundation in Charleston SC" },
  { src: `${IMG}/garden-bed-installation-charleston-sc.webp`, alt: "Garden bed installation with fresh mulch and plantings in Charleston SC" },
];
