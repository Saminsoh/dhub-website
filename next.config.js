const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-compatible configuration
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: process.env.NEXT_OUTPUT_MODE,
  
  // Experimental features (compatible with both platforms)
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Image optimization (works on both platforms)
  images: { 
    unoptimized: process.env.NODE_ENV === 'development' ? true : false,
    domains: ['localhost'], // Add your domains here when ready
  },
  
  // Webpack configuration for Web3 compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
