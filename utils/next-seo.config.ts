import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pedlar.store/",
    siteName: "pedlar",
  },
  titleTemplate: "Pedlar",
  defaultTitle: "Pedlar",
  additionalLinkTags: [
    {
      rel: "favicon",
      href: "/pedlarIcon.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/pedlarIcon.png",
      sizes: "76x76",
    },
  ],
  description:
    "We’re always here to help.  Contact us at hello@pedlar.store and our customer service team will be in touch.",
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default config;
