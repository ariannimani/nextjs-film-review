const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "img.youtube.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "vi/**",
      },
    ],
  },
};

module.exports = nextConfig;
