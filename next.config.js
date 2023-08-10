/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  distDir: 'public', // Add this line to specify the output directory
}

module.exports = nextConfig
