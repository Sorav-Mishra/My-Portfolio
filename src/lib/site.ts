export const siteConfig = {
  name: "KiranaCart",
  url: "https://kiranacart1.vercel.app",
  description: "KiranaCart - Grocery Delivery",
  tagline: "10-Minute Grocery Delivery*",
  longDescription:
    "KiranaCart is a grocery delivery platform focused on making daily essentials accessible and affordable for families in towns and villages of India.",

  business: {
    legalName: "KiranaCart",
    type: "Sole Proprietorship",
    owner: "Abhishek Mishra",
    email: "abhiishekmishraa2025@gmail.com",
    futureEmail: "support@kiranacart.in",
    phone: "+91 8858344648",

    address: {
      city: "Shahjahanpur",
      state: "Uttar Pradesh",
      country: "India",
      full: "Shahjahanpur, Uttar Pradesh, India",
    },

    serviceArea:
      "Currently serving selected towns and villages in Shahjahanpur district, Uttar Pradesh, India. (Service area will expand in future.)",

    hours: "Monday – Sunday, 7:00 AM – 10:00 PM IST",

    supportResponseTime: "Within 24–48 business hours",
  },

  links: {
    twitter: "https://twitter.com/kiranacart",
  },

  ogImage: "/og-image.png",
} as const;

export type SiteConfig = typeof siteConfig;
