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

  const constitutionalTopics = [
    {
      icon: '⚖️',
      title: 'Fundamental Rights',
      articles: 'Articles 12–35',
      desc: 'The bedrock of Indian democracy — enforceable rights guaranteeing equality, freedom, and protection against state arbitrariness.',
      color: '#6366f1',
    },
    {
      icon: '🏛️',
      title: 'Directive Principles',
      articles: 'Articles 36–51',
      desc: 'Non-justiciable guidelines directing state policy toward social and economic justice, inspired by the Irish Constitution.',
      color: '#8b5cf6',
    },
    {
      icon: '🔒',
      title: 'Habeas Corpus & Writs',
      articles: 'Articles 32 & 226',
      desc: "Constitutional remedies — the 'heart and soul' of fundamental rights as described by Dr. Ambedkar. A citizen's shield against illegal detention.",
      color: '#a78bfa',
    },
    {
      icon: '🗳️',
      title: 'Federalism & Centre-State',
      articles: 'Articles 245–263',
      desc: 'India\'s "quasi-federal" structure — examining legislative, administrative and financial relations between Union and States.',
      color: '#60a5fa',
    },
    {
      icon: '📜',
      title: 'Constitutional Amendments',
      articles: 'Article 368',
      desc: 'The delicate balance between parliamentary supremacy and constitutional rigidity — from the 42nd to the 101st Amendment.',
      color: '#34d399',
    },
    {
      icon: '⚡',
      title: 'Judicial Review',
      articles: 'Basic Structure Doctrine',
      desc: 'Kesavananda Bharati (1973) and beyond — how the Supreme Court acts as the guardian of the Constitution.',
      color: '#f59e0b',
    },
  ];

  const landmarks = [
    {
      case: 'Kesavananda Bharati v. State of Kerala',
      year: '1973',
      principle: 'Basic Structure Doctrine',
      desc: 'The Supreme Court held that while Parliament may amend the Constitution, it cannot alter its basic structure — perhaps the most consequential judgment in Indian constitutional history.',
    },
    {
      case: 'Maneka Gandhi v. Union of India',
      year: '1978',
      principle: 'Expanded Article 21',
      desc: "Redefined 'procedure established by law' to mean just, fair and reasonable procedure — transforming Article 21 into a living, expanding fundamental right.",
    },
    {
      case: 'S.R. Bommai v. Union of India',
      year: '1994',
      principle: "Presidential Rule (Art. 356)",
      desc: "Curtailed arbitrary imposition of President's Rule, requiring floor-test to prove majority — a landmark in cooperative federalism.",
    },
  ];

  return (
    <div style={{ fontFamily: "'Geist Sans', Arial, sans-serif", color: '#e2e8f0', backgroundColor: '#080810' }}>

      {/* ======= HERO SECTION ======= */}
      <section style={{
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
              BA LLB · DR PANJABRAO DESHMUKH COLLEGE OF LAW
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 62px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              color: '#f8fafc',
            }}>
              AQSA MIRZA
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
                Law Student · Legal Researcher · Policy Enthusiast
              </span>
            </h1>

            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: '1.8', marginBottom: '24px', maxWidth: '540px' }}>
              Passionate about constitutional law, human rights, and driving systemic change through meticulous research and litigation advocacy. Aspiring to contribute to <strong style={{ color: '#a78bfa' }}>NITI Aayog</strong> and India's policy landscape.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {[
                { num: 'AIR 42', label: 'CLAT 2022' },
                { num: 'AIR 34', label: 'AILET 2022' },
                { num: '77.34%', label: 'BA LLB Score' },
                { num: '9+', label: 'Internships' },
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
              }}>Read My Blogs</Link>
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
                  alt="AQSA MIRZA Professional Portrait"
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
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>CLAT 2022</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#a78bfa' }}>AIR 42</div>
              </div>
              <div style={{
                position: 'absolute', top: '20px', left: '-16px', zIndex: 10,
                backgroundColor: 'rgba(13,13,31,0.95)',
                border: '1px solid rgba(99,102,241,0.4)',
                borderRadius: '12px', padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em' }}>AILET 2022</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#60a5fa' }}>AIR 34</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CONSTITUTIONAL LAW TOPICS ======= */}
      <section style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              backgroundColor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
              color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Constitutional Law Coverage</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Core Areas of Constitutional Study
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              Deep dives into India's constitutional framework — from fundamental rights to emerging jurisprudence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {constitutionalTopics.map((topic, i) => (
              <Link href="/posts" key={i} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  borderRadius: '16px',
                  backgroundColor: '#0d0d1f',
                  border: `1px solid rgba(255,255,255,0.06)`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
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
                    background: `linear-gradient(90deg, ${topic.color}, transparent)`,
                  }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                      backgroundColor: `${topic.color}20`,
                      border: `1px solid ${topic.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '22px',
                    }}>{topic.icon}</div>
                    <div>
                      <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '16px', marginBottom: '2px' }}>{topic.title}</div>
                      <div style={{ color: topic.color, fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>{topic.articles}</div>
                    </div>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{topic.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======= LANDMARK JUDGMENTS ======= */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #0a0a18 0%, #080810 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: '100px',
              backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
              color: '#34d399', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>Landmark Judgments</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Pillars of Indian Constitutional Law
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              Cases that fundamentally shaped the constitutional framework of India.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {landmarks.map((lm, i) => (
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
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '18px', margin: 0 }}>{lm.case}</h3>
                    <span style={{
                      padding: '3px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700,
                      backgroundColor: 'rgba(99,102,241,0.15)', color: '#a78bfa',
                      border: '1px solid rgba(99,102,241,0.3)',
                    }}>{lm.year}</span>
                    <span style={{
                      padding: '3px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700,
                      backgroundColor: 'rgba(52,211,153,0.1)', color: '#34d399',
                      border: '1px solid rgba(52,211,153,0.25)',
                    }}>{lm.principle}</span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{lm.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/posts" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', borderRadius: '12px',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a78bfa', fontWeight: 600, fontSize: '15px',
              textDecoration: 'none', backgroundColor: 'rgba(99,102,241,0.08)',
            }}>Explore All Constitutional Articles →</Link>
          </div>
        </div>
      </section>

      {/* ======= EXPERTISE CARDS ======= */}
      <section style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              Excellence in Legal Studies & Research
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                icon: '🏆',
                title: 'Top Academic Ranks',
                desc: 'Secured CLAT 2022 AIR 42 and AILET 2022 AIR 34, among the top-ranked law aspirants nationally. 10th: 97.4% · 12th PCM: 95%',
                link: '/about', linkText: 'About AQSA MIRZA →',
                color: '#f59e0b',
              },
              {
                icon: '🏛️',
                title: 'NHRC Internship',
                desc: 'Gained invaluable experience at the National Human Rights Commission (Jan–Feb 2025), analyzing human rights violations and statutory protection mechanisms.',
                link: '/experience', linkText: 'Explore All Internships →',
                color: '#6366f1',
              },
              {
                icon: '🎤',
                title: 'Moots & Advocacy',
                desc: 'Runner-up at 1st Jadhavar National Moot Court 2025. Winner – Yuva Bhushan Competition 2025. 2nd Best Speaker – 3rd AIU National Moot 2024.',
                link: '/moots-awards', linkText: 'View Moots & Awards →',
                color: '#34d399',
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

      {/* ======= RECENT BLOG POSTS ======= */}
      {recentPosts.length > 0 && (
        <section style={{ padding: '80px 24px', background: '#080810' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ color: '#6366f1', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  CONSTITUTIONAL LAW
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.02em' }}>Latest Insights & Articles</h2>
              </div>
              <Link href="/posts" style={{ color: '#a78bfa', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>View All Posts →</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {recentPosts.map((post: any) => (
                <Link href={`/posts/${post.slug || post._id}`} key={post._id.toString()} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '28px', borderRadius: '16px',
                    backgroundColor: '#0d0d1f',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', flexDirection: 'column', gap: '14px',
                    height: '100%', cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}>
                    <div style={{
                      fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#6366f1',
                    }}>{post.category}</div>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '18px', lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0, flex: 1,
                      display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>{post.summary}</p>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)',
                      fontSize: '13px', color: '#475569',
                    }}>
                      <span style={{ fontWeight: 600 }}>{post.author?.name || 'AQSA MIRZA'}</span>
                      <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======= FAQ ======= */}
      <section style={{ padding: '80px 24px', background: '#0a0a18' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: 'Who is AQSA MIRZA?', a: 'AQSA MIRZA is a BA LLB student at DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI. She is a legal researcher, public policy enthusiast, and aspires to contribute to NITI Aayog.' },
              { q: "What is AQSA MIRZA's legal background?", a: 'AQSA MIRZA secured AIR 42 in CLAT 2022 and AIR 34 in AILET 2022. She has deep interests in constitutional law, human rights, and medico-legal issues, with an aggregate of 77.34% after 5 semesters.' },
              { q: 'What internships has AQSA MIRZA completed?', a: 'She has completed 9+ internships including at the National Human Rights Commission (NHRC), Juris Centre, Medilaw, NayaLegal, AGISS Research Institute, and multiple trial court chambers.' },
              { q: 'How to contact AQSA MIRZA for legal research opportunities?', a: 'You can contact AQSA MIRZA via the Contact page on this site, through her LinkedIn profile, or by emailing aqsajoharbaig@gmail.com.' },
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
        </div>
      </section>

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
              Reach Out for Opportunities
            </h2>
            <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '540px', margin: '0 auto 36px', lineHeight: '1.7' }}>
              Open to opportunities in policy research, legal research, and internships at institutions like <strong style={{ color: '#a78bfa' }}>NITI Aayog</strong>.
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
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#94a3b8', fontWeight: 600, fontSize: '16px',
                textDecoration: 'none',
              }}>Read Full Bio</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
