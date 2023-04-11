import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pedlar.store/",
    siteName: "pedlar",
  },
  title: "Pedlar",

  additionalLinkTags: [
    {
      rel: "favicon",
      href: "/new-favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/new-favicon.ico",
      sizes: "76x76",
    },
  ],
  description: "Creator storefronts to showcase the brands you love",
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default config;
