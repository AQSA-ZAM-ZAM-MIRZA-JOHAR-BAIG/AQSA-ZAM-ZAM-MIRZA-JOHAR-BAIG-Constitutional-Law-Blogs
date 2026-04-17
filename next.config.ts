import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: '/aqsa-zam-zam-mirza-johar-baig.html',
        destination: '/aqsa-zam-zam-mirza-johar-baig',
        permanent: true,
      },
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/login/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
