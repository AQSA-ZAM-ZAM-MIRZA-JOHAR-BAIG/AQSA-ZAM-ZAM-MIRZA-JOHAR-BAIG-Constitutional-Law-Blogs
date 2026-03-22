import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/aqsa',
        destination: '/aqsa-zam-zam-mirza-johar-baig',
        permanent: true,
      },
      {
        source: '/aqsa-mirza',
        destination: '/aqsa-zam-zam-mirza-johar-baig',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
