import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#080810',
      borderTop: '1px solid rgba(99,102,241,0.2)',
      paddingTop: '60px',
      paddingBottom: '32px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px',
            }}>AQSA MIRZA</div>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.8', maxWidth: '240px' }}>
              Software Developer, AI/ML Specialist & Cloud Architect dedicated to building scalable intelligent systems and robust web platforms.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a href="https://www.linkedin.com/in/aqsamirza08" target="_blank" rel="noopener noreferrer" style={{
                width: '38px', height: '38px', borderRadius: '10px',
                backgroundColor: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a78bfa', textDecoration: 'none', fontWeight: 700, fontSize: '13px',
              }}>in</a>
              <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" style={{
                width: '38px', height: '38px', borderRadius: '10px',
                backgroundColor: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a78bfa', textDecoration: 'none', fontWeight: 700, fontSize: '12px',
              }}>GH</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '16px', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home', href: '/' }, { name: 'Technical Blogs', href: '/posts' },
                { name: 'About', href: '/about' }, { name: 'Experience', href: '/experience' },
                { name: 'Certifications', href: '/publications' }, { name: 'Awards & Hackathons', href: '/moots-awards' },
                { name: 'Official Profile', href: '/aqsa-zam-zam-mirza-johar-baig' }, { name: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.name}>
                   <Link href={link.href} style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '16px', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expertise</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Artificial Intelligence', 'Machine Learning', 'Cloud Architecture', 'Full-Stack Development', 'System Design', 'Data Engineering'].map(item => (
                <li key={item} style={{ color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#6366f1', flexShrink: 0, display: 'inline-block' }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '16px', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: '#64748b', fontSize: '14px' }}>📍 Pune, Maharashtra, India</div>
              <div style={{ color: '#64748b', fontSize: '14px' }}>
                📧 <a href="mailto:aqsamirz6306@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>aqsamirz6306@gmail.com</a>
              </div>
              <div style={{ color: '#64748b', fontSize: '14px' }}>🎓 VIIT Pune | IIT Madras</div>
            </div>
            <Link href="/contact" style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}>Get In Touch →</Link>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}>
          <p style={{ color: '#475569', fontSize: '13px', textAlign: 'center' }}>
            &copy; {currentYear} AQSA MIRZA. All rights reserved.
          </p>
          <p style={{ color: '#334155', fontSize: '12px', textAlign: 'center' }}>Last Updated: March 2026</p>
        </div>
      </div>
    </footer>
  );
}
