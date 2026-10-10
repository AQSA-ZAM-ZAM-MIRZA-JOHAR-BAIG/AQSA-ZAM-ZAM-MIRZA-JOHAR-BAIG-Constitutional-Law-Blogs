import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Awards & Hackathons',
  description:
    'Discover hackathons, competitive programming milestones, and open source contributions by Aqsa Zam Zam Mirza Johar Baig.',
  alternates: { canonical: `${SITE_URL}/moots-awards` },
  openGraph: {
    title: 'Awards & Hackathons | Aqsa Zam Zam Mirza Johar Baig',
    description:
      'Competitive programming wins, hackathon participation, and open source achievements in one timeline.',
    url: `${SITE_URL}/moots-awards`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

const awards = [
  {
    title: "Finalist – Smart India Hackathon (SIH)",
    organization: "Ministry of Education, Govt. of India",
    date: "2024",
    badge: "National Finalist",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    impact: "Engineered an AI-driven computer vision system for real-time urban traffic optimization and emergency vehicle corridor routing.",
    details: "Ranked among the premier engineering teams nationwide out of tens of thousands of applicants for innovative civic intelligence in the Smart Cities track.",
    tags: ["Computer Vision", "Python", "Deep Learning", "National Finalist", "Govt. of India"]
  },
  {
    title: "1st Place – Local College Coding Sprint",
    organization: "Y.C. College (Yashwantrao Chavan College)",
    date: "Sept 2024",
    badge: "1st Place Winner 🏆",
    badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    impact: "Solved 6 out of 6 complex algorithmic challenges in record time using optimized Python and C++.",
    details: "Demonstrated advanced problem-solving speed in Dynamic Programming, Graph Theory, String Manipulation, and Bitwise operations under competitive exam constraints.",
    tags: ["Competitive Programming", "C++", "Python", "Dynamic Programming", "Graph Theory"]
  },
  {
    title: "Kaggle Expert Tier",
    organization: "Kaggle (Google)",
    date: "2024",
    badge: "Top 5% Global Ranking",
    badgeColor: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    impact: "Consistently ranked in the top 5% of global participants in competitive machine learning tournaments.",
    details: "Specialized in advanced tabular feature engineering, cross-validation architectures, and automated ensemble model tuning using LightGBM, XGBoost, and CatBoost.",
    tags: ["Kaggle", "Machine Learning", "Ensemble Models", "Feature Engineering", "Data Science"]
  },
  {
    title: "Active Open Source Contributor",
    organization: "Open Source Community",
    date: "Ongoing",
    badge: "10+ Merged PRs",
    badgeColor: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    impact: "Merged 10+ pull requests into developer tooling, community-driven AI libraries, and technical documentation repositories.",
    details: "Passionate about building transparent, accessible developer tooling and contributing to reliable open-source ecosystems worldwide.",
    tags: ["Open Source", "GitHub", "Developer Tooling", "CI/CD", "Documentation"]
  }
];

export default function MootsAwards() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Hackathons & Awards', href: '/moots-awards' }]} />
      
      {/* Header */}
      <header className="mt-8 mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Honors &amp; Recognitions
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-serif">
          Hackathons, Contests &amp; Open Source
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Celebrating technical milestones, national hackathon breakthroughs, and competitive coding victories earned by <strong className="text-white">Aqsa Zam Zam Mirza Johar Baig</strong>.
        </p>
        <p className="text-xs text-slate-400 mt-4">
          Author: Aqsa Zam Zam Mirza Johar Baig • Y.C. College (Grade O Outstanding) • Last Updated: March 2026
        </p>
      </header>

      {/* Awards Grid */}
      <div className="grid gap-6">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${award.badgeColor}`}>
                {award.badge}
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="text-indigo-400">{award.organization}</span>
                <span>•</span>
                <span>{award.date}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-amber-300 transition-colors">
              {award.title}
            </h2>

            {/* Impact Box */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Engineering Impact
              </span>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {award.impact}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {award.details}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {award.tags.map((tag, tIdx) => (
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
    </div>
  );
}
