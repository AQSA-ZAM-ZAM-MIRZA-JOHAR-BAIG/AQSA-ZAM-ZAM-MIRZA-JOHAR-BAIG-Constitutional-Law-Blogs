import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  let recentPosts: any[] = [];

  try {
    const connectToDatabase = (await import('@/lib/db')).default;
    const { Post } = await import('@/models/Post');
    await import('@/models/User');
    await connectToDatabase();
    recentPosts = await Post.find({ published: true })
      .populate('author', 'name')
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .lean();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  const technicalSkills = [
    {
      icon: '💻',
      title: 'Programming',
      details: 'Java, Python, C++, JavaScript',
      desc: 'Building robust applications with object-oriented and functional paradigms.',
      color: '#6366f1',
    },
    {
      icon: '🌐',
      title: 'Web Dev',
      details: 'React, Vue, Node, Flask',
      desc: 'Crafting responsive, high-performance UIs and scalable RESTful backends.',
      color: '#8b5cf6',
    },
    {
      icon: '🤖',
      title: 'AI & ML',
      details: 'PyTorch, TensorFlow, Scikit-learn',
      desc: 'Implementing supervised/unsupervised learning and deep neural networks.',
      color: '#a78bfa',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      details: 'AWS (EC2, S3, RDS, Lambda)',
      desc: 'Architecting scalable, fault-tolerant cloud infrastructures and CI/CD pipelines.',
      color: '#60a5fa',
    },
    {
      icon: '🗄️',
      title: 'Databases',
      details: 'PostgreSQL, MongoDB, Redis',
      desc: 'Optimizing data storage and retrieval using SQL and NoSQL solutions.',
      color: '#34d399',
    },
    {
      icon: '🧠',
      title: 'Core CS',
      details: 'DSA, System Design, OS',
      desc: 'Applying fundamental principles to solve complex engineering challenges.',
      color: '#f59e0b',
    },
  ];

  const topProjects = [
    {
      name: 'Mahalaxmi Tailors',
      tech: 'MERN, JWT, AWS, Razorpay',
      desc: 'Full-stack production e-commerce platform with secure auth and cloud deployment.',
    },
    {
      name: 'FalcoVita',
      tech: 'Vue, Flask, Redis, Celery',
      desc: 'Scalable healthcare platform with asynchronous task pipelines and data visualization.',
    },
    {
      name: 'IPO Success Predictor',
      tech: 'Python, Ensemble Learning',
      desc: 'Machine learning model achieving 80% accuracy in predicting IPO performance.',
    },
  ];

  return (
    <div style={{ fontFamily: "'Geist Sans', Arial, sans-serif", color: '#e2e8f0', backgroundColor: '#080810' }}>
      <div
        style={{
          position: "sticky",
          top: "74px",
          zIndex: 20,
          backgroundColor: "rgba(8,8,16,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "10px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#answer-box" style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 700 }}>Quick Answer</a>
          <a href="#identity" style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 700 }}>Identity</a>
          <a href="#skills" style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 700 }}>Skills</a>
          <a href="#projects" style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 700 }}>Projects</a>
          <a href="#faq" style={{ color: "#a78bfa", fontSize: "13px", fontWeight: 700 }}>FAQ</a>
        </div>
      </div>

      <section id="answer-box" style={{ padding: "22px 24px 10px", backgroundColor: "#0a0a18" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", border: "1px solid rgba(99,102,241,0.28)", borderRadius: "14px", padding: "16px 18px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "8px", color: "#f8fafc" }}>
            Who is Aqsa Zam Zam Mirza Johar Baig?
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: 1.7 }}>
            Aqsa Zam Zam Mirza Johar Baig is a full-stack developer and AI/ML specialist with formal studies at VIIT Pune and IIT Madras.
            This official profile consolidates verified identity, education, projects, technical publications, and direct contact links.
          </p>
        </div>
      </section>

      {/* ======= HERO SECTION ======= */}
      <section id="identity" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 60px',
        background: 'linear-gradient(135deg, #080810 0%, #0d0d1f 50%, #10101e 100%)',
      }}>
        {/* Decorative orbs */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          top: '-100px', right: '-100px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          bottom: '100px', left: '-100px', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '48px' }}>
          {/* Text Content */}
          <div style={{ flex: '1 1 500px', maxWidth: '620px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '100px', padding: '6px 16px',
              fontSize: '12px', fontWeight: 600, color: '#a78bfa',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a78bfa', display: 'inline-block' }}></span>
              CS & ENGINEERING (AI & ML) · VIIT PUNE
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 62px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              color: '#f8fafc',
            }}>
              Aqsa Zam Zam Mirza Johar Baig
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(20px, 3.5vw, 36px)',
                fontWeight: 600,
                marginTop: '8px',
                letterSpacing: '-0.01em',
              }}>
                Full-Stack Developer · AI/ML Resident · Cloud Architect
              </span>
            </h1>

            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: '1.8', marginBottom: '24px', maxWidth: '540px' }}>
              Specializing in Artificial Intelligence and Machine Learning with a focus on building <strong style={{ color: '#a78bfa' }}>scalable full-stack applications</strong> and cloud-based distributed systems.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {[
                { num: '8.77', label: 'VIIT CGPA' },
                { num: '7.44', label: 'IITM CGPA' },
                { num: '10+', label: 'AWS Services' },
                { num: '5+', label: 'Live Projects' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#a78bfa' }}>{stat.num}</div>
                  <div style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/experience" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', fontWeight: 700, fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(99,102,241,0.4)',
              }}>View Experience →</Link>
              <Link href="/posts" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '12px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#94a3b8', fontWeight: 600, fontSize: '15px',
                textDecoration: 'none',
              }}>Read My Tech Blogs</Link>
            </div>
          </div>

          {/* Profile image */}
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '320px', height: '320px',
            }}>
              {/* Glowing ring */}
              <div style={{
                position: 'absolute', inset: '-3px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute', inset: '3px', borderRadius: '50%',
                background: '#0d0d1f',
                zIndex: 1,
              }} />
              <div style={{
                position: 'absolute', inset: '8px', borderRadius: '50%',
                overflow: 'hidden', zIndex: 2,
              }}>
                <Image
                  src="/profile.png"
                  alt="Aqsa Zam Zam Mirza Johar Baig - Software Developer"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '16px', right: '-12px', zIndex: 10,
                backgroundColor: 'rgba(13,13,31,0.95)',
                border: '1px solid rgba(99,102,241,0.4)',
                borderRadius: '12px', padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>CERTIFIED</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#a78bfa' }}>AWS Practitioner</div>
              </div>
              <div style={{
                position: 'absolute', top: '20px', left: '-16px', zIndex: 10,
                backgroundColor: 'rgba(13,13,31,0.95)',
                border: '1px solid rgba(99,102,241,0.4)',
                borderRadius: '12px', padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>DATA SCIENCE</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#60a5fa' }}>IIT MADRAS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TECHNICAL SKILLS ======= */}
      <section id="skills" style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              backgroundColor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
              color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Core Competencies</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Modern Technology Stack
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              End-to-end development expertise from frontend aesthetics to backend scalability and AI integration.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {technicalSkills.map((skill, i) => (
              <div key={i} style={{
                padding: '28px',
                borderRadius: '16px',
                backgroundColor: '#0d0d1f',
                border: `1px solid rgba(255,255,255,0.06)`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Gradient accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                    backgroundColor: `${skill.color}20`,
                    border: `1px solid ${skill.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px',
                  }}>{skill.icon}</div>
                  <div>
                    <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px', marginBottom: '2px' }}>{skill.title}</div>
                    <div style={{ color: skill.color, fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>{skill.details}</div>
                  </div>
                </div>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED PROJECTS ======= */}
      <section id="projects" style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #0a0a18 0%, #080810 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
              color: '#34d399', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Selected Work</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Full-Stack & ML Projects
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              Practical implementations of cloud-native apps and intelligent systems.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {topProjects.map((project, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap',
                padding: '28px', borderRadius: '16px',
                backgroundColor: '#0d0d1f',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  flexShrink: 0, width: '56px', height: '56px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', fontWeight: 800, color: '#fff',
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '18px', margin: 0 }}>{project.name}</h3>
                    <span style={{
                      padding: '3px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700,
                      backgroundColor: 'rgba(99,102,241,0.15)', color: '#a78bfa',
                      border: '1px solid rgba(99,102,241,0.3)',
                    }}>{project.tech}</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/experience" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', borderRadius: '12px',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a78bfa', fontWeight: 600, fontSize: '15px',
              textDecoration: 'none', backgroundColor: 'rgba(99,102,241,0.08)',
            }}>Explore All Experience & Certs →</Link>
          </div>
        </div>
      </section>

      {/* ======= ACADEMIC CARDS ======= */}
      <section id="faq" style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Education & Industry Programs
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                icon: '🎓',
                title: 'VIIT & IIT Madras',
                desc: 'Pursuing B.Tech at VIIT Pune (8.77 CGPA) and B.Sc in Data Science at IIT Madras (7.44 CGPA). Focus on AI, ML, and scalable architecture.',
                link: '/about', linkText: 'Academic Profile →',
                color: '#f59e0b',
              },
              {
                icon: '🛠️',
                title: 'Industry Experience',
                desc: 'Developed 5+ responsive apps via EduSkills and deployed 3+ cloud apps using 15+ AWS services. Reduced page loads by 30% through optimization.',
                link: '/experience', linkText: 'Work Experience →',
                color: '#6366f1',
              },
              {
                icon: '📜',
                title: 'Certifications',
                desc: 'Microsoft Azure Fundamentals (AZ-900) & Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.',
                link: '/publications', linkText: 'View Certifications →',
                color: '#34d399',
              },
              {
                icon: '👤',
                title: 'Official Profile',
                desc: 'Complete identity verification, education credentials, and verified contact information for Aqsa Zam Zam Mirza Johar Baig.',
                link: '/aqsa-zam-zam-mirza-johar-baig', linkText: 'View Official Profile →',
                color: '#a78bfa',
              },
            ].map((card, i) => (
              <div key={i} style={{
                padding: '32px',
                borderRadius: '16px',
                backgroundColor: '#0d0d1f',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', flexDirection: 'column', gap: '16px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                }} />
                <div style={{ fontSize: '32px' }}>{card.icon}</div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '20px', margin: 0 }}>{card.title}</h3>
                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7', margin: 0, flex: 1 }}>{card.desc}</p>
                <Link href={card.link} style={{ color: card.color, fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FAQ & SEO Entity ======= */}
      <section style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Entity description — visible to users and crawlers alike */}

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: 'Who is Aqsa Zam Zam Mirza Johar Baig?', a: 'Aqsa Zam Zam Mirza Johar Baig is a Computer Science undergraduate at VIIT Pune and a Data Science student at IIT Madras, specializing in AI/ML and full-stack development.' },
              { q: 'What are Aqsa\'s primary technical skills?', a: 'Her core skills include Java, Python, JavaScript, React.js, AWS Cloud, and Machine Learning frameworks like PyTorch and TensorFlow.' },
              { q: 'What significant projects has she built?', a: 'Key projects include Mahalaxmi Tailors (MERN/AWS), FalcoVita (Flask/Vue/Redis), and an IPO Success Predictor (Machine Learning).' },
              { q: 'How to contact Aqsa Zam Zam Mirza Johar Baig?', a: 'You can contact her via the Contact page, LinkedIn (aqsamirza08), or GitHub (AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG).' },
            ].map((faq, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: '12px',
                backgroundColor: '#0d0d1f', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '16px', marginBottom: '10px' }}>{faq.q}</div>
                <div style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7' }}>{faq.a}</div>
              </div>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is Aqsa Zam Zam Mirza Johar Baig?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Aqsa Zam Zam Mirza Johar Baig is a Computer Science undergraduate at VIIT Pune and a Data Science student at IIT Madras, specializing in AI/ML and full-stack development." }
                  },
                  {
                    "@type": "Question",
                    "name": "What are Aqsa's primary technical skills?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Her core skills include Java, Python, JavaScript, React.js, AWS Cloud, and Machine Learning frameworks like PyTorch and TensorFlow." }
                  },
                  {
                    "@type": "Question",
                    "name": "What significant projects has she built?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Key projects include Mahalaxmi Tailors (MERN/AWS), FalcoVita (Flask/Vue/Redis), and an IPO Success Predictor (Machine Learning)." }
                  },
                  {
                    "@type": "Question",
                    "name": "How to contact Aqsa Zam Zam Mirza Johar Baig?",
                    "acceptedAnswer": { "@type": "Answer", "text": "You can contact her via the Contact page, LinkedIn (aqsamirza08), or GitHub (AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG)." }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      {/* ======= LATEST ARTICLES ======= */}
      {recentPosts && recentPosts.length > 0 && (
        <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #0a0a18 0%, #080810 100%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{
                display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
                backgroundColor: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)',
                color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '16px',
              }}>Tech Blog</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
                Latest Articles
              </h2>
              <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
                Insights on constitutional law, technology, and engineering.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {recentPosts.map((post: any) => (
                <Link key={post._id.toString()} href={`/posts/${post.slug}`} style={{
                  padding: '28px',
                  borderRadius: '16px',
                  backgroundColor: '#0d0d1f',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textDecoration: 'none',
                }}>
                  <div style={{ fontSize: '12px', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>
                    {post.category}
                  </div>
                  <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '20px', margin: 0 }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0, flex: 1 }}>
                    {post.summary && post.summary.length > 100 ? `${post.summary.substring(0, 100)}...` : post.summary}
                  </p>
                  <div style={{ fontSize: '13px', color: '#6366f1', fontWeight: 600, marginTop: '8px' }}>
                    Read Article →
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/posts" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 32px', borderRadius: '12px',
                border: '1px solid rgba(167,139,250,0.4)',
                color: '#a78bfa', fontWeight: 600, fontSize: '15px',
                textDecoration: 'none', backgroundColor: 'rgba(167,139,250,0.08)',
              }}>View All Articles →</Link>
            </div>
          </div>
        </section>
      )}

      {/* ======= CTA BANNER ======= */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            borderRadius: '24px', padding: 'clamp(40px, 6vw, 72px)',
            background: 'linear-gradient(135deg, #1a1a3e 0%, #12122a 50%, #0f0f28 100%)',
            border: '1px solid rgba(99,102,241,0.3)',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Let's Build Something Great
            </h2>
            <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '540px', margin: '0 auto 36px', lineHeight: '1.7' }}>
              Open to roles in Software Engineering, AI Research, and Cloud Architecture.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', fontWeight: 700, fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(99,102,241,0.4)',
              }}>Contact AQSA MIRZA →</Link>
              <Link href="/aqsa-zam-zam-mirza-johar-baig" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#94a3b8', fontWeight: 600, fontSize: '16px',
                textDecoration: 'none',
              }}>View Full Profile</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
