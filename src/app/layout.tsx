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
    default: "Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) | Constitutional Law & Legal Research Blogs",
    template: "%s | Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)",
  },
  description:
    "Official profile, constitutional law blogs, academic research, and direct contact for Aqsa Zam Zam Mirza Johar Baig (also known as Aqsa Zam Zam Mirza and Aqsa Mirza).",
  keywords: [
    "AQSA ZAM ZAM MIRZA JOHAR BAIG",
    "Aqsa Zam Zam Mirza Johar Baig",
    "aqsa zam zam mirza johar baig",
    "AQSA ZAM ZAM MIRZA",
    "Aqsa Zam Zam Mirza",
    "aqsa zam zam mirza",
    "AQSA MIRZA",
    "Aqsa Mirza",
    "aqsa mirza",
    "Software Developer",
    "Computer Science Portfolio",
    "AI & ML Engineer",
    "Full-Stack Developer",
    "Constitutional Law Researcher",
    "Y.C. College Student",
    "Y.C College",
    "Yashwantrao College Student"
  ],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)", url: SITE_URL }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  publisher: "Aqsa Zam Zam Mirza Johar Baig",
  verification: {
    google: "googlee89522a79f5eb2c7",
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) | Developer & Constitutional Law",
    description:
      "Explore Aqsa Zam Zam Mirza Johar Baig's technical portfolio, constitutional research, engineering case studies, and AI writing in one place.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/profile.png"),
        width: 1200,
        height: 630,
        alt: "Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) – Developer & Legal Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) | Developer & AI/ML",
    description:
      "Explore technical portfolio, constitutional law case studies, and AI research by Aqsa Zam Zam Mirza Johar Baig.",
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
    "alternateName": [
      "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      "Aqsa Zam Zam Mirza Johar Baig",
      "aqsa zam zam mirza johar baig",
      "AQSA ZAM ZAM MIRZA",
      "Aqsa Zam Zam Mirza",
      "aqsa zam zam mirza",
      "AQSA MIRZA",
      "Aqsa Mirza",
      "aqsa mirza",
      "Aqsa Johar Baig",
      "Aqsa M. J. Baig"
    ],
    "givenName": "Aqsa",
    "familyName": "Mirza Johar Baig",
    "additionalName": "Zam Zam",
    "url": SITE_URL,
    "image": absoluteUrl("/profile.png"),
    "jobTitle": "Software Developer & AI/ML Specialist",
    "description": "Aqsa Zam Zam Mirza Johar Baig (also known as Aqsa Zam Zam Mirza and Aqsa Mirza) is a Computer Science student at Y.C. College (Yashwantrao Chavan College, Grade O Outstanding, Open Category), specializing in AI/ML, Full-stack development, and Constitutional Law research.",
    "disambiguatingDescription": "Official entity record for Aqsa Zam Zam Mirza Johar Baig, also searched as Aqsa Zam Zam Mirza and Aqsa Mirza.",
    "nationality": {
      "@type": "Country",
      "name": "India"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Y.C. College (Yashwantrao Chavan College)"
      }
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "Mahalaxmi Tailors, FalcoVita"
    },
    "knowsAbout": ["Full-Stack Development", "Artificial Intelligence", "Machine Learning", "Cloud Architecture (AWS)", "Data Structures & Algorithms", "Constitutional Law"],
    "sameAs": [
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG",
      "https://www.linkedin.com/in/aqsamirza08",
      "https://www.kaggle.com/aqsamirza08",
      "https://aqsamirza08.medium.com/",
      "https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig",
      "https://www.youtube.com/@aqsamirza08",
      "https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/",
      "https://aqsa-zam-zam-mirza-johar-baig-portfolio-3.vercel.app/",
      "https://aqsazamzammirzajoharbaig.com/",
      "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/",
      "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
      "https://firgenerator.org/",
      "https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/",
      "https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/",
      "https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/",
      "https://www.aqsazamzammirzajoharbaig.com/",
      "https://aqsa-zam-zam-mirza-johar-baig.github.io/Yashwantrao-chavan-mahavidyalaya/"
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
