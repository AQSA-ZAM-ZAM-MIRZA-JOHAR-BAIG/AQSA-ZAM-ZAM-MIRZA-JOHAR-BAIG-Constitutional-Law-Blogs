import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aqsa Zam Zam Mirza Johar Baig Official Profile (2026)",
    template: "%s | Aqsa Zam Zam Mirza Johar Baig",
  },
  description:
    "Official profile, verified education, featured projects, FAQ answers, and direct contact for Aqsa Zam Zam Mirza Johar Baig.",
  keywords: [
    "Aqsa Zam Zam Mirza Johar Baig",
    "Aqsa Mirza",
    "Software Developer",
    "Computer Science Portfolio",
    "AI & ML Engineer",
    "Full-Stack Developer",
    "Java Python JavaScript",
    "AWS Cloud Practices",
    "MERN Stack",
    "VIIT Pune Student"
  ],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig", url: SITE_URL }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  publisher: "Aqsa Zam Zam Mirza Johar Baig",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Aqsa Zam Zam Mirza Johar Baig | Developer & AI/ML",
    description:
      "Explore Aqsa's technical portfolio, engineering case studies, cloud projects, and AI/ML writing in one place.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/profile.png"),
        width: 1200,
        height: 630,
        alt: "Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsa Zam Zam Mirza Johar Baig | Developer & AI/ML",
    description:
      "Explore Aqsa's technical portfolio, engineering case studies, cloud projects, and AI/ML writing.",
    images: [absoluteUrl("/profile.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aqsa Zam Zam Mirza Johar Baig",
    "alternateName": ["Aqsa Mirza", "Aqsa Johar Baig"],
    "url": SITE_URL,
    "image": absoluteUrl("/profile.png"),
    "jobTitle": "Software Developer & AI/ML Specialist",
    "description": "Computer Science student at VIIT Pune and BSc Data Science at IIT Madras, specializing in AI/ML, Full-stack development, and Cloud Architecture.",
    "nationality": {
      "@type": "Country",
      "name": "India"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Vishwakarma Institute of Information Technology (VIIT), Pune"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Technology (IITM), Madras"
      }
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "Mahalaxmi Tailors, FalcoVita"
    },
    "knowsAbout": ["Full-Stack Development", "Artificial Intelligence", "Machine Learning", "Cloud Architecture (AWS)", "Data Structures & Algorithms"],
    "sameAs": [
      "https://www.linkedin.com/in/aqsamirza08",
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${SITE_NAME} - Developer Portfolio`,
    "url": SITE_URL,
    "author": {
      "@type": "Person",
      "name": "Aqsa Zam Zam Mirza Johar Baig"
    }
  };

  const webPageElementSchema = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Identity Verification Summary",
    "cssSelector": "#answer-box",
    "description":
      "Answer-first element confirming official identity, technical focus, and verified profile links for Aqsa Zam Zam Mirza Johar Baig.",
  };

  const claimReviewSchema = {
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    "url": SITE_URL,
    "claimReviewed": "This website is the official profile of Aqsa Zam Zam Mirza Johar Baig.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
    },
    "author": {
      "@type": "Person",
      "name": "Aqsa Zam Zam Mirza Johar Baig",
    },
    "itemReviewed": {
      "@type": "Person",
      "name": "Aqsa Zam Zam Mirza Johar Baig",
      "sameAs": [
        "https://www.linkedin.com/in/aqsamirza08",
        "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG",
      ],
    },
  };

  const combinedSchema = [personSchema, websiteSchema, webPageElementSchema, claimReviewSchema];

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      </head>
      <body style={{ backgroundColor: '#080810', color: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
