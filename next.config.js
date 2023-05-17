/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STATIC === "true" && "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
};

module.exports = nextConfig;
