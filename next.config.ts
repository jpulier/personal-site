import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lovemewrong",
        destination: "https://too.fm/ere4zpa",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
