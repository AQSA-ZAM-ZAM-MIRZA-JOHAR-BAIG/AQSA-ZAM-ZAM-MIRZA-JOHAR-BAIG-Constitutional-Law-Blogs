import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Constitutional Law Blog | Aqsa Zam Zam Mirza Johar Baig",
  description: "A platform for insights into constitutional provisions, case interpretations, and amendments by Aqsa Zam Zam Mirza Johar Baig, BA LLB student, CLAT 2022 AIR 42, and Legal Researcher.",
  keywords: [
    "Aqsa Zam Zam Mirza Johar Baig", 
    "Aqsa Mirza", 
    "Constitutional Law Blog", 
    "BA LLB", 
    "CLAT AIR 42", 
    "Legal Researcher", 
    "Indian Constitution", 
    "Law Blog"
  ],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig" }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  openGraph: {
    title: "Constitutional Law Blog | Aqsa Zam Zam Mirza Johar Baig",
    description: "Insights into constitutional provisions, landmark cases, and pivotal amendments by Aqsa Zam Zam Mirza Johar Baig (BA LLB, CLAT AIR 42).",
    url: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/",
    siteName: "Constitutional Law Blog",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constitutional Law Blog | Aqsa Zam Zam Mirza Johar Baig",
    description: "Insights into constitutional provisions, landmark cases, and pivotal amendments by Aqsa Zam Zam Mirza Johar Baig (BA LLB, CLAT AIR 42).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
