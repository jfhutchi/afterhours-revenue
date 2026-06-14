import type { NextConfig } from "next";

// Static export for GitHub Pages (no Node server).
// basePath is injected by the deploy workflow as "/<repo-name>" so assets resolve
// under https://<user>.github.io/<repo>/. Left empty for local builds and for
// user/org root sites (https://<user>.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
