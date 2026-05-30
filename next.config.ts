import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    urlImports: ['https://framer.com/', 'https://framerusercontent.com/'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      framer: path.resolve(__dirname, 'src/framer-stub.ts'),
    };
    return config;
  },
};

export default nextConfig;
