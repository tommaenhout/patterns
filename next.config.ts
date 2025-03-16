import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    baseUrl: "src/",
    paths: {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
};

export default nextConfig;
