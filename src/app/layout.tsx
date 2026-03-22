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
  title: "AQSA MIRZA | Law Student, Legal Researcher & Policy Enthusiast",
  description: "Explore AQSA MIRZA’s journey as a BA LLB student, legal researcher, and public policy enthusiast. Insights into constitutional provisions, landmark cases, and amendments.",
  keywords: [
    "Aqsa Zam Zam Mirza Johar Baig", 
    "Aqsa Mirza", 
    "Constitutional Law Blog", 
    "BA LLB", 
    "CLAT AIR 42", 
    "Legal Researcher", 
    "Indian Constitution", 
    "NITI Aayog enthusiast"
  ],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig" }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  openGraph: {
    title: "AQSA MIRZA | Law Student & Legal Researcher",
    description: "Explore AQSA MIRZA’s journey as a BA LLB student, legal researcher, and public policy enthusiast.",
    url: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
    siteName: "Constitutional Law Blog & Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: 'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/profile.png',
        width: 1200,
        height: 630,
        alt: 'AQSA MIRZA Professional Portrait',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQSA MIRZA | Law Student & Legal Researcher",
    description: "Explore AQSA MIRZA’s journey as a BA LLB student, legal researcher, and public policy enthusiast.",
    images: ['https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/profile.png'],
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
    "name": "AQSA MIRZA",
    "jobTitle": "Law Student & Legal Researcher",
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": "DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI"
    },
    "knowsAbout": ["Human Rights Law", "Medico-Legal Issues", "Public Policy", "Civil and Criminal Litigation", "International Trade in Services", "Constitutional Law"],
    "sameAs": [
      "https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/",
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
