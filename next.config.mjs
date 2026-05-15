/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/MileMarkRunning",
  assetPrefix: "/MileMarkRunning/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
