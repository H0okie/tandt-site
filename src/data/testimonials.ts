// The live site's Reviews section renders empty. This is a typed placeholder
// so the homepage has a real, well-designed testimonials block instead of a
// blank gap. Replace with genuine, permissioned reviews before launch — do
// not invent customer quotes.

export interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  rating: number; // 1–5
}

export const testimonials: Testimonial[] = [
  // Example shape — swap in real reviews (e.g. pulled from Google) before launch:
  // {
  //   quote: "T&T transformed our backyard...",
  //   name: "Jane D.",
  //   location: "Mount Pleasant, SC",
  //   rating: 5,
  // },
];
