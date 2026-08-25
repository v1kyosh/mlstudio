import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // sharp's native postinstall script didn't run in this environment,
    // making the built-in optimizer unreliable for local images.
    unoptimized: true,
  },
};

export default nextConfig;
