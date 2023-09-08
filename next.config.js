/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];
const nextConfig = withPWA({
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "storage.googleapis.com", "cdn.shopify.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
});

module.exports = nextConfig;
