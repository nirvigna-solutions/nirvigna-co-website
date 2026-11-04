// ─────────────────────────────────────────────────────────────
// COMPANY SETTINGS — edit this one file to change company details
// everywhere on the website (header, footer, contact, about, legal
// pages, SEO tags, sitemap).
// ─────────────────────────────────────────────────────────────

export const site = {
  // Names
  brand: "Nirvigna",
  legalName: "Nirvigna Cloud Compliance Private Limited",
  tagline: "Compliance, without obstacles.",
  description:
    "Nirvigna helps Indian businesses stay on top of licences, registrations, returns and inspections — through simple cloud tools and expert support.",

  // Web
  domain: "nirvigna.co",
  url: "https://nirvigna.co",

  // Contact
  email: "support@nirvigna.co",
  phoneDisplay: "+91 96407 17374",
  phoneE164: "+919640717374", // used for tel: links
  whatsappUrl: "https://wa.me/919640717374",
  businessHours: "Monday to Saturday, 10 AM – 6 PM IST",

  // Registered office (each line shows on its own row)
  address: [
    "Flat No. 201, B Block, Raheja Vistas",
    "IE Nacharam, Uppal",
    "Hyderabad – 500076, Telangana, India",
  ],

  // Statutory identifiers
  cin: "U62011TS2026PTC223955",
  // GSTIN: leave empty until it is issued. While empty, it is NOT shown
  // anywhere on the site. Once filled in, it appears in the footer and
  // on the About page automatically.
  gstin: "",
  incorporatedYear: 2026,
  city: "Hyderabad, Telangana",
} as const;

export const products = [
  {
    name: "Nirvigna Cloud Compliance",
    href: "/cloud-compliance",
  },
  {
    name: "Nirvigna FoodSafe",
    href: "/foodsafe",
  },
] as const;
