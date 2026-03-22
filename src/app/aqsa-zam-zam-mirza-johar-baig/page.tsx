import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Aqsa Zam Zam Mirza Johar Baig | Official Profile & Legal Researcher",
  description: "The official profile of Aqsa Zam Zam Mirza Johar Baig, CLAT AIR 42, BA LLB student at Dr Panjabrao Deshmukh College of Law, Amravati. Constitutional law researcher and public policy enthusiast.",
  alternates: {
    canonical: "/aqsa-zam-zam-mirza-johar-baig",
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
      "item": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Aqsa Zam Zam Mirza Johar Baig",
      "item": "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/aqsa-zam-zam-mirza-johar-baig"
    }]
  };

  return (
    <div style={{ fontFamily: "'Geist Sans', Arial, sans-serif", color: '#e2e8f0', backgroundColor: '#080810', minHeight: '100vh', padding: '120px 24px 60px' }}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>

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
            BA LLB Student, CLAT AIR 42, Legal Researcher
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '16px', lineHeight: 1.8 }}>
            <p>Welcome to the official profile of <strong>Aqsa Zam Zam Mirza Johar Baig</strong>. This page provides a comprehensive overview of my academic achievements, legal research experience, and professional aspirations in constitutional law and public policy.</p>
          </div>
        </header>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '24px', borderBottom: '1px solid #1e1e38', paddingBottom: '12px' }}>
            Academic Profile
          </h2>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: '#cbd5e1' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ color: '#8b5cf6', marginTop: '4px' }}>▹</span>
              <div>
                <strong style={{ display: 'block', color: '#f8fafc', fontSize: '16px' }}>BA LLB (5-Year Integrated Course)</strong>
                <span style={{ fontSize: '15px', color: '#94a3b8' }}>Dr. Panjabrao Deshmukh College of Law, Amravati (77.34% aggregate)</span>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ color: '#8b5cf6', marginTop: '4px' }}>▹</span>
              <div>
                <strong style={{ display: 'block', color: '#f8fafc', fontSize: '16px' }}>CLAT 2022 Top Ranker</strong>
                <span style={{ fontSize: '15px', color: '#94a3b8' }}>Secured All India Rank (AIR) 42 in the Common Law Admission Test under specific categories.</span>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ color: '#8b5cf6', marginTop: '4px' }}>▹</span>
              <div>
                <strong style={{ display: 'block', color: '#f8fafc', fontSize: '16px' }}>AILET 2022 Top Ranker</strong>
                <span style={{ fontSize: '15px', color: '#94a3b8' }}>Secured All India Rank (AIR) 34 in the All India Law Entrance Test.</span>
              </div>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#f1f5f9', marginBottom: '24px', borderBottom: '1px solid #1e1e38', paddingBottom: '12px' }}>
            Recent Legal Research Experience
          </h2>
          <div style={{ backgroundColor: '#0d0d1f', border: '1px solid rgba(99,102,241,0.2)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>National Human Rights Commission (NHRC)</h3>
            <p style={{ fontSize: '14px', color: '#8b5cf6', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Winter Intern | Jan 2025 – Feb 2025</p>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
              As an intern at the NHRC, <strong>Aqsa Zam Zam Mirza Johar Baig</strong> analyzed human rights violations, examined statutory protection mechanisms, and assisted in drafting complaints and reports under the supervision of senior officers.
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
