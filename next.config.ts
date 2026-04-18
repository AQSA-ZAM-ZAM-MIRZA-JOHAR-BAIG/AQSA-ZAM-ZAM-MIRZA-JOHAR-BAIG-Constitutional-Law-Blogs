import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Restrict device sizes to avoid serving unnecessarily large images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Warn if unoptimized images exceed this threshold
    minimumCacheTTL: 60,
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
        source: "/login",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/login/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      // Cache static assets aggressively
      {
        source: "/og-image.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
