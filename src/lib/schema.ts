import { site } from "../config/site";

const businessId = `${site.url}/#business`;
const ogImage =
  "https://tandtlawnandlandscape.com/wp-content/uploads/2026/05/commercial-landscape-maintenance-Charleston-SC.webp";

// Site-wide LocalBusiness — the anchor every other node references by @id.
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    image: ogImage,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: site.areaServed,
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [site.social.facebook, site.social.instagram],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    areaServed: site.areaServed,
    provider: { "@id": businessId },
  };
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbList(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: new URL(it.href, site.url).href } : {}),
    })),
  };
}

export function blogPosting(
  post: { title: string; description: string; pubDate: Date; author: string },
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": businessId },
    mainEntityOfPage: url,
    url,
  };
}
