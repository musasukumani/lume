import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 78, 80, 82, 85],
    minimumCacheTTL: 86400,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
