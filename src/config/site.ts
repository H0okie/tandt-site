// Single source of truth for T&T's business information.
// Everything on the site (header, footer, schema.org, contact page) reads from
// here, so a phone number or address only ever changes in ONE place.

export const site = {
  name: "T&T Lawn & Landscape",
  legalName: "T&T Lawn & Landscape LLC",
  tagline: "The grass is always greener on your side of the fence",
  description:
    "Licensed, insured, and committed to quality lawn care and landscaping in Charleston, South Carolina. Over 25 years of trusted, professional service.",

  // Contact
  phone: "843-305-7025",
  phoneHref: "tel:+18433057025",
  email: "info@tandtlawnandlandscape.com", // update if a public address is confirmed

  // Location (NAP — must stay identical everywhere for local SEO)
  address: {
    street: "2124 Parsons Corner",
    city: "Charleston",
    state: "SC",
    zip: "29414",
    country: "US",
  },
  // Approx. coordinates for Charleston, SC — refine to the exact address later
  geo: { lat: 32.7765, lng: -79.9311 },

  areaServed: "Charleston, South Carolina and all surrounding towns",
  hours: [
    { days: "Monday – Friday", open: "08:00", close: "17:00" },
  ],
  hoursLabel: "Mon – Fri: 8:00 a.m. – 5:00 p.m.",

  yearsExperience: 25,
  credentials: ["Licensed", "Bonded", "Fully insured"],

  // Live production URL (used for canonical tags, sitemap, schema)
  url: "https://tandtlawnandlandscape.com",

  social: {
    facebook: "https://www.facebook.com/tandtlawnlandscape/",
    instagram: "https://www.instagram.com/tandtlawnsfowler/",
  },

  // Headline stats shown on the homepage
  stats: [
    { value: "1,000+", label: "Commercial projects" },
    { value: "1,000+", label: "Residential projects" },
    { value: "25+", label: "Years of experience" },
  ],
} as const;

export type Site = typeof site;
