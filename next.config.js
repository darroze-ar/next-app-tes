/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
