import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Who Is Aqsa Zam Zam Mirza Johar Baig? Official Profile 2026',
  description:
    'Official profile of Aqsa Zam Zam Mirza Johar Baig – academic background, full-stack engineering achievements, and AI/ML specialization.',
  alternates: {
    canonical: `${SITE_URL}/aqsa-zam-zam-mirza-johar-baig`,
  },
  openGraph: {
    title: 'Aqsa Zam Zam Mirza Johar Baig – Official Profile',
    description:
      "Read Aqsa's official profile, including education, software engineering experience, and links to technical projects and publications.",
    url: `${SITE_URL}/aqsa-zam-zam-mirza-johar-baig`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

export default function NameDisambiguationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_URL}/`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Aqsa Zam Zam Mirza Johar Baig",
      "item": `${SITE_URL}/aqsa-zam-zam-mirza-johar-baig`
    }]
  };

  return (
    <div style={{ fontFamily: "'Geist Sans', Arial, sans-serif", color: '#e2e8f0', backgroundColor: '#080810', minHeight: '100vh', padding: '120px 24px 60px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: 600 }}>
          ← Back to Home
        </Link>
        
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #1e1e38', marginBottom: '24px' }}>
            <Image
              src="/profile.png"
              alt="Aqsa Zam Zam Mirza Johar Baig"
              fill
              className="object-cover"
              sizes="200px"
              priority
            />
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1 }}>
            Aqsa Zam Zam Mirza Johar Baig
          </h1>
          <p style={{ fontSize: '20px', color: '#a78bfa', fontWeight: 600, marginBottom: '24px' }}>
            Software Developer, AI/ML Specialist, Cloud Architect
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '16px', lineHeight: 1.8 }}>
            <p>Welcome to the official profile of <strong>Aqsa Zam Zam Mirza Johar Baig</strong>. This page provides a comprehensive overview of my technical expertise, academic background in Computer Science, and my journey in building scalable intelligent systems.</p>
          </div>
        </header>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '24px', borderBottom: '1px solid #1e1e38', paddingBottom: '12px' }}>
            How can I verify Aqsa Zam Zam Mirza Johar Baig's academic profile?
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '18px', lineHeight: 1.7 }}>
            This section lists current degree programs and institutions so visitors can validate identity and educational context quickly.
            The names and credentials are kept consistent across metadata, schema, and page content.
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: '#cbd5e1' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ color: '#8b5cf6', marginTop: '4px' }}>▹</span>
              <div>
                <strong style={{ display: 'block', color: '#f8fafc', fontSize: '16px' }}>B.Tech in Computer Science & Engineering (AI & ML)</strong>
                <span style={{ fontSize: '15px', color: '#94a3b8' }}>Vishwakarma Institute of Information Technology (VIIT), Pune (8.77 CGPA)</span>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ color: '#8b5cf6', marginTop: '4px' }}>▹</span>
              <div>
                <strong style={{ display: 'block', color: '#f8fafc', fontSize: '16px' }}>B.S. in Data Science</strong>
                <span style={{ fontSize: '15px', color: '#94a3b8' }}>Indian Institute of Technology (IITM), Madras (7.44 CGPA)</span>
              </div>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '24px', borderBottom: '1px solid #1e1e38', paddingBottom: '12px' }}>
            Which projects prove practical full-stack and AI/ML experience?
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '18px', lineHeight: 1.7 }}>
            The highlighted projects below represent production-focused engineering across cloud deployment, data workflows, and secure application architecture.
            Each example maps to real execution rather than generic technology claims.
          </p>
          <div style={{ backgroundColor: '#0d0d1f', border: '1px solid rgba(99,102,241,0.2)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>Full-Stack Development & Cloud Deployment</h3>
            <p style={{ fontSize: '14px', color: '#8b5cf6', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MERN & AWS Expert</p>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
              <strong>Aqsa Zam Zam Mirza Johar Baig</strong> has successfully built and deployed production-ready applications like Mahalaxmi Tailors and FalcoVita. Her expertise includes architecting serverless functions on AWS Lambda, managing NoSQL clusters, and implementing high-security auth protocols.
            </p>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '24px' }}>
            Connect with Aqsa Zam Zam Mirza Johar Baig
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '12px 24px', backgroundColor: '#0077b5', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              LinkedIn Profile
            </a>
            <Link href="/contact" style={{ display: 'inline-flex', padding: '12px 24px', backgroundColor: '#6366f1', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
