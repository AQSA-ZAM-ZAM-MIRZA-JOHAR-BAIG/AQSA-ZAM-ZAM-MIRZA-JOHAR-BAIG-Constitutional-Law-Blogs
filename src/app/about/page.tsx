import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aqsa Zam Zam Mirza Johar Baig – education at Y.C. College (Yashwantrao Chavan College, Grade O Outstanding, Open Category), technical strengths, and philosophy for building scalable software.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Aqsa Zam Zam Mirza Johar Baig',
    description:
      'Academic journey, technical interests, and software engineering philosophy of Aqsa Zam Zam Mirza Johar Baig.',
    url: `${SITE_URL}/about`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

const technicalCompetencies = [
  {
    category: "Artificial Intelligence & ML",
    icon: "🧠",
    description: "Deep Learning, Neural Networks, Computer Vision, and Predictive Analytics.",
    tech: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Ensemble Learning"]
  },
  {
    category: "Full-Stack Development",
    icon: "⚡",
    description: "Building production-grade web platforms with zero-trust security and high performance.",
    tech: ["React.js", "Next.js", "Node.js", "Express", "Flask", "Vue.js", "JWT / RBAC"]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    description: "Designing resilient distributed cloud infrastructure with automated CI/CD.",
    tech: ["AWS (EC2, S3, RDS, Lambda)", "Route 53", "CloudFront", "CloudFormation", "Docker", "Git"]
  },
  {
    category: "System Design & Concurrency",
    icon: "⚙️",
    description: "Architecting asynchronous pipelines, message queues, and low-latency databases.",
    tech: ["Celery", "Redis", "REST APIs", "Rate Limiting", "Microservices"]
  },
  {
    category: "Database Engineering",
    icon: "🗄️",
    description: "Relational and NoSQL schemas, query optimization, and data modeling.",
    tech: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Data Modeling"]
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      
      {/* Header */}
      <header className="mt-8 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Authoritative Profile &amp; Biography
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-serif">
          About Aqsa Zam Zam Mirza Johar Baig
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with deep expertise in scalable full-stack development, cloud computing, and constitutional legal-tech research.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Pune, Maharashtra, India
          </span>
          <span>•</span>
          <span>Y.C. College (Grade O Outstanding, Open Category)</span>
          <span>•</span>
          <span>Last Updated: March 2026</span>
        </div>
      </header>

      {/* Bio / Executive Summary Card */}
      <section className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Biography &amp; Background</span>
        </h2>
        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            I am <strong className="text-white">Aqsa Zam Zam Mirza Johar Baig</strong> (also known as <strong className="text-white">Aqsa Mirza</strong>), a high-achieving Computer Science student at <strong className="text-white">Y.C. College (Yashwantrao Chavan College)</strong> under the Open Category with a Grade O (Outstanding) academic standing.
          </p>
          <p>
            My work focuses on the convergence of scalable software engineering and intelligent autonomous systems. I have a proven track record of constructing production-ready full-stack applications, designing asynchronous message pipelines with Celery and Redis, and architecting fault-tolerant cloud deployments on AWS.
          </p>
        </div>
      </section>

      {/* Education & Academic Excellence Card */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
            <span>Education &amp; Academic Excellence</span>
          </h2>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
            Top Merit
          </span>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Y.C. College (Yashwantrao Chavan College)
              </h3>
              <p className="text-indigo-400 font-medium text-sm sm:text-base">
                Computer Science Academic Merit Program
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-bold">
                Grade O (Outstanding)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold">
                Open Category
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium">
                2024 – 2025
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Curriculum Focus</span>
              <p className="text-slate-200 font-medium">Data Structures, Algorithms, Object-Oriented System Design, DBMS</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Institutional Honor</span>
              <p className="text-slate-200 font-medium">Top Merit Tier ranking with distinction across all examinations</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Location</span>
              <p className="text-slate-200 font-medium">Affiliated Higher Education Center, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Interests Grid */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white font-serif mb-6">
          Core Technical Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalCompetencies.map((comp, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900/80 backdrop-blur-md border border-slate-700/80 hover:border-indigo-500/50 rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 ${idx === technicalCompetencies.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{comp.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {comp.category}
                </h3>
              </div>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-indigo-200 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Philosophy Card */}
      <section className="bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-purple-950/50 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl font-bold text-white font-serif mb-4 relative z-10">
          Professional Philosophy
        </h2>
        <blockquote className="text-lg sm:text-xl text-slate-200 italic leading-relaxed relative z-10 border-l-4 border-indigo-500 pl-6 my-4">
          &ldquo;I believe in the power of code as logic to solve real-world problems. Whether optimizing an e-commerce platform for small businesses, predicting market trends via ensemble learning, or examining constitutional rights in algorithmic governance, my mission is to deliver software that is efficient, secure, and impactful.&rdquo;
        </blockquote>
        <p className="text-sm font-semibold text-indigo-400 mt-4 relative z-10">
          — Aqsa Zam Zam Mirza Johar Baig
        </p>
      </section>
    </div>
  );
}
