import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/"),
  title: "Aqsa Zam Zam Mirza Johar Baig | Full-Stack Developer & AI Resident",
  description: "Aqsa Zam Zam Mirza Johar Baig - Computer Science undergraduate specializing in AI/ML, building scalable full-stack applications and cloud-based systems.",
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
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig", url: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/" }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  publisher: "Aqsa Zam Zam Mirza Johar Baig",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqsa Zam Zam Mirza Johar Baig | Software Developer & AI Enthusiast",
    description: "Official portfolio of Aqsa Zam Zam Mirza Johar Baig, showcasing full-stack development, AI/ML projects, and cloud expertise.",
    url: "https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/",
    siteName: "Aqsa Zam Zam Mirza Johar Baig Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: 'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/profile.png',
        width: 1200,
        height: 630,
        alt: 'Aqsa Zam Zam Mirza Johar Baig Professional Portrait',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsa Zam Zam Mirza Johar Baig | Software Developer & AI Enthusiast",
    description: "Official portfolio of Aqsa Zam Zam Mirza Johar Baig, showcasing full-stack development, AI/ML projects, and cloud expertise.",
    images: ['https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/profile.png'],
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
    "url": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
    "image": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/profile.png",
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
    "name": "Aqsa Zam Zam Mirza Johar Baig - Developer Portfolio",
    "url": "https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/",
    "author": {
      "@type": "Person",
      "name": "Aqsa Zam Zam Mirza Johar Baig"
    }
  };

  const combinedSchema = [personSchema, websiteSchema];

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
