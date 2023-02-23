/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { families: ["Cormorant Garamond"], subsets: ["latin"] },
      },
    ],
  },
};

module.exports = nextConfig;
