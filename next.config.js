/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["journey-health-images.s3.us-west-1.amazonaws.com"]
  },
}

module.exports = nextConfig
