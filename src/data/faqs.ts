// FAQs from the T&T site. Reused on the homepage AND emitted as FAQPage
// schema.org markup in Phase 8 so they can appear as rich results.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What areas do you serve?",
    answer: "Charleston, South Carolina and all surrounding towns.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Every estimate is free, on-site, and comes with no pressure to commit. We'll walk the property with you, talk through options, and follow up with a clear written quote.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "We are fully licensed, bonded, and insured. We're happy to provide documentation before any work begins so you can hire with total confidence.",
  },
  {
    question: "How often should my lawn be serviced?",
    answer:
      "Most Charleston-area lawns do best with weekly service during the growing season (spring through fall) and biweekly visits in cooler months. We'll recommend a schedule based on your grass type, property size, and goals.",
  },
];
