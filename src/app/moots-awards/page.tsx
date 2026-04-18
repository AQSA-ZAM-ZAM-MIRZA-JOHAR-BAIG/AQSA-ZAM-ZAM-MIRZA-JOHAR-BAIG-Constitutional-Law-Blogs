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
    images: [{ url: absoluteUrl('/og-image.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/og-image.png')],
  },
};

const awards = [
  {
    title: "Finalist - Smart India Hackathon (SIH)",
    organization: "Ministry of Education, Govt. of India",
    date: "2024",
    impact: "Developed an AI-driven solution for real-time traffic management using computer vision.",
    details: "Ranked among the top teams nationwide for innovative problem-solving in the Smart Cities track."
  },
  {
    title: "1st Place - Local College Coding Sprint",
    organization: "VIIT Pune",
    date: "Sept 2024",
    impact: "Solved 6/6 algorithmic challenges in record time using Python and C++.",
    details: "Focused on Dynamic Programming, Graph Theory, and String Manipulation."
  },
  {
    title: "Active Contributor",
    organization: "Open Source Community",
    date: "Ongoing",
    impact: "Merged 10+ PRs in community-driven AI libraries and documentation projects.",
    details: "Passionate about building transparent and community-accessible software tools."
  },
  {
    title: "Kaggle Expert",
    organization: "Kaggle (Google)",
    date: "2024",
    impact: "Ranked in top 5% in multiple machine learning competitions.",
    details: "Expertise in feature engineering and ensemble model tuning for tabular datasets."
  }
];

export default function MootsAwards() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Hackathons & Awards', href: '/moots-awards' }]} />
      
      <div className="mt-8 mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Hackathons, Contests & Open Source</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Celebrated technical milestones, from national-level hackathons to algorithmic excellence in competitive programming.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">Author: Aqsa Zam Zam Mirza Johar Baig | Last Updated: March 2026</p>
      </div>

      <div className="space-y-8">
        {awards.map((award, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm border-l-4 border-l-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
              <span>{award.organization}</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span>{award.date}</span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-3 italic">Impact: {award.impact}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {award.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
