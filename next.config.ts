import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a plain static site into the `out` folder; Netlify serves it as files,
  // so no server, functions or Next.js runtime plugin is needed.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
