'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/posts' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Publications', path: '/publications' },
    { name: 'Moots', path: '/moots-awards' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(10,10,20,0.95)' : 'rgba(10,10,20,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
      padding: '0',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AQSA MIRZA</span>
            <span style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '0.15em', fontWeight: 500 }}>LAW · RESEARCH · POLICY</span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} style={{
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#cbd5e1',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(99,102,241,0.15)';
                (e.target as HTMLElement).style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = '#cbd5e1';
              }}>
                {link.name}
              </Link>
            ))}
            <a href="/assets/aqsa-mirza-resume.pdf" download style={{
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 20px rgba(99,102,241,0.4)',
              transition: 'all 0.2s',
              marginLeft: '8px',
            }}>
              Resume ↓
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: 'rgba(10,10,20,0.98)',
          borderTop: '1px solid rgba(99,102,241,0.2)',
          padding: '16px 24px',
        }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} style={{
              display: 'block',
              padding: '12px 0',
              color: '#94a3b8',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              fontSize: '14px',
              fontWeight: 500,
            }}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
