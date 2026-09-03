import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev",
      },
    ],
  },
};

export default nextConfig;
