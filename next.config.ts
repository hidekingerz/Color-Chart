import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages (https://hidekingerz.github.io/Color-Chart/) 配信用。
  // デプロイ時のみワークフローから NEXT_PUBLIC_BASE_PATH=/Color-Chart を指定する。
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  reactStrictMode: true,
};

export default nextConfig;
