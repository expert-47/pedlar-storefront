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
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
  ],
};

export default config;
