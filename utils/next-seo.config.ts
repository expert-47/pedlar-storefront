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
      rel: "favicon",
      href: "/new-favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/new-favicon.ico",
      sizes: "76x76",
    },
  ],
};

export default config;
