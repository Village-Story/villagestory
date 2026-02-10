/** @type {import('next').NextConfig} */
const repoName = "villagestory";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

module.exports = nextConfig;
