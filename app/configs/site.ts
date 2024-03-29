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
  title: "Super Duper Gallery",
  description:
    "Super Duper Gallery is a contemporary art gallery based in 🇵🇭 QC, Philippines.",

  links: {
    website: "https://superdupergallery.com",
    github: "https://github.com/jonathannicolasdev/superduper",
    twitter: "https://twitter.com/superdupergallery",
    facebook: "https://facebook.com/superdupergallery",
    instagram: "https://instagram.com/superdupergallery",
  },

  twitter: {
    site: "@superdupergallery",
    creator: "@jonathannicolas",
  },

  mainNavItems: [
    { to: "/about", title: "About", icon: "about" },
    { to: "/artworks", title: "Artworks", icon: "artworks" },
    { to: "/artists", title: "Artists", icon: "artists" },
    { to: "/exhibitions", title: "Exhibitions", icon: "exhibitions" },
    { to: "/contact", title: "Contact", icon: "contact" },
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
  color: "#111111",
  ogType: "website",
  ogImageAlt: configSite?.title,
  ogImageType: "image/png",
  ogImagePath: "/assets/opengraph/superdupergallery-og.png",
  twitterImagePath: "/assets/opengraph/superdupergallery-og.png",
  fbAppId: "",

  author: {
    name: "Super Duper Gallery",
    handle: "@jonathannicolasdev",
    url: "https://jonathannicolasdev.com",
    company: {
      name: "Super Duper Gallery",
      handle: "@superdupergallery",
      url: "https://superdupergallery.com",
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
