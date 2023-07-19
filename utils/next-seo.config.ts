import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pedlar.store/",
    siteName: "pedlar",
    description: "Creator storefronts to showcase the brands you love",
    article: {
      authors: [
        {
          url: "/new-favicon.ico",
          width: 800,
          height: 600,
          alt: "Pedlar Image",
        },
        {
          url: "/new-favicon.ico",
          width: 800,
          height: 600,
          alt: "Pedlar Image",
        },
      ],
    },
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
    description: "Creator storefronts to showcase the brands you love",
    images: [
      {
        url: "/new-favicon.ico",
        width: 800,
        height: 600,
        alt: "Pedlar Image",
      },
      {
        url: "/new-favicon.ico",
        width: 800,
        height: 600,
        alt: "Pedlar Image",
      },
    ],
  },
  title: "Pedlar",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "48x48",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "76x76",
    },
  ],
};

export default config;
