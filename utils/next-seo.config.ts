import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "http://localhost:3000/",
    siteName: "pedlar",
  },
  titleTemplate: "pedlar",
  defaultTitle: "pedlar",
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default config;
