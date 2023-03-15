/**
 * EDITME: Config Site and Meta
 *
 * Site-wide info and meta data, mostly for information and SEO purpose
 */

const isDevelopment = process.env.NODE_ENV === "development";

// For general
export const configSite = {
  domain: isDevelopment ? "localhost:3000" : "superdupergallery.com",

  name: "Super Duper Gallery",
  title: "Super Duper Gallery: Remix Tailwind Starter Kit",
  description:
    "Super Duper Gallery is a Remix stack with Tailwind CSS, Radix UI, and their ecosystem. Made by @jonathannicolasdev.",

  links: {
    website: "https://example.com",
    github: "https://github.com/jonathannicolasdev/superdupergallery",
    twitter: "https://twitter.com/jonathannicolasdev",
    youtube: "https://youtube.com/jonathannicolasdev",
  },

  twitter: {
    site: "@jonathannicolasdev",
    creator: "@jonathannicolasdev",
  },

  mainNavItems: [
    { to: "/", title: "Home", icon: "home" },
    { to: "/about", title: "About", icon: "about" },
    { to: "/examples", title: "Examples", icon: "examples" },
    { to: "/demo", title: "Demo", icon: "demo" },
    { to: "/database", title: "Database", icon: "database" },
  ],
};

// For Remix meta function
export const configMeta = {
  defaultName: configSite?.name,
  defaultTitle: configSite?.title,
  defaultTitleSeparator: "—",
  defaultDescription: configSite?.description,

  locale: "en_US",
  url: isDevelopment
    ? "http://localhost:3000"
    : `https://${configSite?.domain}`,
  canonicalPath: "/",
  color: "#3399cc",
  ogType: "website",
  ogImageAlt: configSite?.title,
  ogImageType: "image/png",
  ogImagePath: "/assets/opengraph/superdupergallery-og.png",
  twitterImagePath: "/assets/opengraph/superdupergallery-og.png",
  fbAppId: "",

  author: {
    name: "Jonathan Nicolas",
    handle: "@jonathannicolasdev",
    url: "https://jonathannicolasdev.com",
    company: {
      name: "Catamyst",
      handle: "@catamyst",
      url: "https://catamyst.com",
    },
  },

  mailingListName: "Rewind and Catalyze",
};

export type NavItem = {
  to?: string;
  title: string;
  icon?: string;
  disabled?: boolean;
  external?: boolean;
};
