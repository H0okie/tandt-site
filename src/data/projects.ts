// Recent-projects gallery. Image URLs currently point at T&T's existing CDN;
// in Phase 8 we'll download and serve optimized local copies via Astro's
// <Image> component. Every item has descriptive alt text (several originals
// shipped empty alt attributes — an accessibility + SEO fix).

export interface Project {
  src: string;
  alt: string;
}

const CDN = "https://tandtlawnandlandscape.com/wp-content/uploads/2026/05";

export const projects: Project[] = [
  { src: `${CDN}/About-TT-lawn-and-Landscape.webp`, alt: "Freshly maintained residential lawn and landscaping by T&T in Charleston SC" },
  { src: `${CDN}/landscape-renovation-Charleston-SC-1.webp`, alt: "Completed landscape renovation with new beds and plantings in Charleston SC" },
  { src: `${CDN}/drainage-trench-install-Charleston.webp`, alt: "Drainage trench installation to solve yard water problems in Charleston" },
  { src: `${CDN}/decorative-rock-installation-Charleston-SC.webp`, alt: "Decorative rock installation around a landscaped bed in Charleston SC" },
  { src: `${CDN}/outdoor-structure-builder-Charleston-SC.webp`, alt: "Custom outdoor structure built by T&T in a Charleston SC backyard" },
  { src: `${CDN}/backyard-fire-pit-Charleston-SC.webp`, alt: "Backyard fire pit and seating area hardscape in Charleston SC" },
  { src: `${CDN}/seasonal-flower-planting-Charleston.jpg`, alt: "Seasonal flower planting adding color to a Charleston property" },
  { src: `${CDN}/flower-bed-installation-Charleston-SC.webp`, alt: "New flower bed installation along a home's foundation in Charleston SC" },
  { src: `${CDN}/garden-bed-installation-Charleston-SC.webp`, alt: "Garden bed installation with fresh mulch and plantings in Charleston SC" },
];
