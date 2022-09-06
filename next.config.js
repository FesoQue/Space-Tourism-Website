/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com/FesoQue/Space-Tourism-Website/main/public/data.json', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
