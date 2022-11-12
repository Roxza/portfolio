/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'i.ibb.co', 'capture-website-api.herokuapp.com'],
  },
}

module.exports = nextConfig
