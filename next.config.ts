import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is only for the Docker/self-hosted build (see Dockerfile).
  // Vercel has its own optimized build output and this mode conflicts with
  // its file-tracing step, so skip it when building on Vercel.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  images: {
    // sharp's native postinstall script didn't run in this environment,
    // making the built-in optimizer unreliable for local images.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
