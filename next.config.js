/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const securityHeaders = [
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains'
    }
]
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
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
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    );
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
};

module.exports = nextConfig;
