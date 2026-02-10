/** @type {import('next').NextConfig} */
const repoName = "your-repo-name";

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
