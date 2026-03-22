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
  title: "Aqsa Zam Zam Mirza Johar Baig | Constitutional Law Blog & Portfolio",
  description: "Explore Aqsa Zam Zam Mirza Johar Baig’s journey as a BA LLB student, legal researcher, and public policy enthusiast. Insights into constitutional provisions, landmark cases, and amendments.",
  keywords: [
    "Aqsa Zam Zam Mirza Johar Baig", 
    "Aqsa Mirza", 
    "Aqsa Zam Zam",
    "Mirza Johar Baig",
    "Aqsa Johar Baig",
    "Constitutional Law Blog", 
    "BA LLB", 
    "CLAT AIR 42", 
    "Legal Researcher", 
    "Indian Constitution", 
    "NITI Aayog enthusiast"
  ],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig", url: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/" }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  publisher: "Aqsa Zam Zam Mirza Johar Baig",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqsa Zam Zam Mirza Johar Baig | Law Student & Legal Researcher",
    description: "Explore the official portfolio and constitutional law blog of Aqsa Zam Zam Mirza Johar Baig, BA LLB student and CLAT AIR 42.",
    url: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
    siteName: "Aqsa Zam Zam Mirza Johar Baig - Constitutional Law Blog",
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
    title: "Aqsa Zam Zam Mirza Johar Baig | Law Student & Legal Researcher",
    description: "Explore the official portfolio and constitutional law blog of Aqsa Zam Zam Mirza Johar Baig, BA LLB student and CLAT AIR 42.",
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
    "name": "Aqsa Zam Zam Mirza Johar Baig",
    "alternateName": ["Aqsa Mirza", "Aqsa Johar Baig"],
    "url": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
    "image": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/profile.png",
    "jobTitle": "Law Student & Legal Researcher",
    "description": "BA LLB student, CLAT 2022 AIR 42, and legal researcher specializing in Constitutional Law, Human Rights, and Public Policy.",
    "nationality": {
      "@type": "Country",
      "name": "India"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI"
      }
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "National Human Rights Commission (NHRC)"
    },
    "knowsAbout": ["Constitutional Law", "Human Rights Law", "Medico-Legal Issues", "Public Policy", "Civil Litigation"],
    "sameAs": [
      "https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/",
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aqsa Zam Zam Mirza Johar Baig - Constitutional Law Blog",
    "url": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
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
