import type { NextConfig } from "next";

const manifestHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      {
        protocol: "https",
        hostname: "**.ufs.sh",
      },
    ],
  },
  experimental: {
    serverActions: {
      // IMPORTANT: list every origin that will call your server actions in prod/preview
      allowedOrigins: [
        "raghavk.dev",
        "www.raghavk.dev",
        // your Vercel preview/prod domains (adjust these to match your actual project):
        "raghav847-portfolio.vercel.app",
        "localhost:3000",
      ],
    },
  },
  async headers() {
    return [{ source: "/site.webmanifest", headers: manifestHeaders }];
  },
};

export default nextConfig;
