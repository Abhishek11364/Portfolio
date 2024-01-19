// next.config.js
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },
  images: {
    domains: ["i.postimg.cc"],
  },
};

module.exports = nextConfig;
