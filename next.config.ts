import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_PAGES === "true" ? "export" : undefined,
  trailingSlash: process.env.GITHUB_PAGES === "true",
  // The static Pages build does not use the Cloudflare-only database modules.
  typescript: {
    ignoreBuildErrors: process.env.GITHUB_PAGES === "true",
  },
};

export default nextConfig;
