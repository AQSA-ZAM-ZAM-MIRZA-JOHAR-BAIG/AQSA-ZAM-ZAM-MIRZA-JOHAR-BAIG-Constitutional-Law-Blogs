import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Certifications & Research',
  description:
    'Explore certifications, technical research notes, and learning milestones across cloud computing, AI/ML, and software architecture by Aqsa Zam Zam Mirza Johar Baig.',
  alternates: { canonical: `${SITE_URL}/publications` },
  openGraph: {
    title: 'Certifications & Research | Aqsa Zam Zam Mirza Johar Baig',
    description:
      'Technical research highlights and professional certifications earned by Aqsa Zam Zam Mirza Johar Baig.',
    url: `${SITE_URL}/publications`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

const caseStudies = [
  {
    title: "Architecting Secure E-commerce: JWT & RBAC Implementation",
    category: "Web Security & Cryptography",
    output: "Mahalaxmi Tailors Platform",
    url: "https://mahalaxmi-tailors.shop",
    tags: ["JWT", "RBAC", "HttpOnly Cookies", "AWS S3 / EC2", "Helmet", "XSS/CSRF Mitigation"],
    description: "A comprehensive production study on securing MERN applications using JSON Web Tokens, HttpOnly encrypted cookies, and granular Role-Based Access Control. Evaluates threat vectors, mitigation of cross-site request forgery, and continuous security auditing in deployed environments."
  },
  {
    title: "Optimizing Throughput with Celery & Redis Pipelines",
    category: "Distributed Systems & Concurrency",
    output: "FalcoVita Healthcare Platform",
    url: "https://falcovita.vercel.app",
    tags: ["Flask", "Celery", "Redis", "Asynchronous Tasks", "Chart.js", "Queue Optimization"],
    description: "Technical analysis of asynchronous task offloading in Flask-based data platforms. Demonstrates how in-memory Redis message queues reduce HTTP request latency by 85% for intensive medical data visualizations and background analytical jobs."
  },
  {
    title: "Predictive Modeling with Ensemble Learning: An IPO Analysis",
    category: "Machine Learning & Quantitative Modeling",
    output: "IPO-Success-Predictor",
    url: "https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor",
    tags: ["Ensemble Learning", "Random Forest", "Gradient Boosting", "Hugging Face", "Pandas"],
    description: "Evaluates the mathematical performance of Bagging and Boosting algorithms in financial offering success prediction. Analyzes precision-recall curves, F1-scores on heavily imbalanced datasets, and features automated real-time inference on Hugging Face Spaces."
  }
];

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    focus: "Cloud Architecture, Security, Governance & Compliance",
    badgeColor: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
    description: "Demonstrated foundational mastery of core cloud computing concepts, multi-region Azure services, identity management (Microsoft Entra ID), network security groups, and cloud financial governance."
  },
  {
    title: "Oracle Cloud Infrastructure: Generative AI Professional",
    issuer: "Oracle",
    focus: "LLMs, Prompt Engineering, Retrieval-Augmented Generation (RAG)",
    badgeColor: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
    description: "Certified in architecting and deploying enterprise Generative AI systems. Proven expertise in fine-tuning Large Language Models, semantic vector search, vector embeddings, and deploying RAG pipelines on OCI AI infrastructure."
  }
];

export default function Publications() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Certifications & Research', href: '/publications' }]} />
      
      {/* Page Header */}
      <header className="mt-8 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Academic Research &amp; Credentials
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-serif">
          Certifications, Research &amp; Technical Courses
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          A showcase of <strong className="text-white">Aqsa Zam Zam Mirza Johar Baig</strong>&apos;s technical case studies, software architecture benchmarks, and verified cloud certifications.
        </p>
        <p className="text-xs text-slate-400 mt-4">
          Author: Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) • Y.C. College Merit • Last Updated: March 2026
        </p>
      </header>

      {/* Case Studies Section */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-serif">
            Technical Research &amp; Architectural Case Studies
          </h2>
          <span className="text-xs text-slate-400 hidden sm:inline-block">3 Peer-Reviewed Projects</span>
        </div>

        <div className="grid gap-6">
          {caseStudies.map((cs, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 hover:border-indigo-500/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {cs.category}
                </span>
                <a 
                  href={cs.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Output: {cs.output}</span>
                  <span>↗</span>
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-indigo-300 transition-colors">
                {cs.title}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                {cs.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {cs.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Certifications Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white font-serif mb-6">
          Professional Industry Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className={`bg-gradient-to-br ${cert.badgeColor} backdrop-blur-md border rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/60 border border-slate-700 text-slate-200">
                    {cert.issuer} Verified
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    Active Credential
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wide mb-3">
                  {cert.focus}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/40 text-xs text-slate-400 flex items-center justify-between">
                <span>Issued to: Aqsa Zam Zam Mirza Johar Baig</span>
                <span className="text-indigo-400 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
