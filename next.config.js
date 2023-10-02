/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap"],
  },
};

module.exports = nextConfig;
