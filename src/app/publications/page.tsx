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
    images: [{ url: absoluteUrl('/og-image.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Publications() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Certifications & Research', href: '/publications' }]} />
      
      <div className="mt-8 mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Certifications, Research & Technical Courses</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A showcase of AQSA MIRZA's commitment to continuous learning, from cloud fundamentals to generative AI and scalable system design.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">Author: AQSA MIRZA | Last Updated: March 2026</p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 font-serif">Technical Research & Case Studies</h2>
        <div className="grid gap-6">
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Architecting Secure E-commerce: JWT & RBAC Implementation</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Output: Mahalaxmi Tailors Project</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive study on securing MERN applications using JSON Web Tokens, HttpOnly cookies, and Role-Based Access Control. Explores mitigation of XSS and CSRF attacks in production environments.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Optimizing Throughput with Celery & Redis Pipelines</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Output: FalcoVita Case Study</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Technical analysis of asynchronous task offloading in Flask-based healthcare platforms. Demonstrates how message brokers like Redis reduce request latency for heavy data visualization tasks.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Predictive Modeling with Ensemble Learning: An IPO Analysis</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Research Area: Machine Learning</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Evaluates the performance of Bagging and Boosting algorithms in financial success prediction. Analyzes metrics like F1-score and Precision-Recall curves for unbalanced datasets.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 font-serif">Professional Certifications</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-lg border border-blue-100 dark:border-blue-800 relative overflow-hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
            <p className="text-md text-gray-800 dark:text-gray-200 mb-4 font-medium italic">Cloud Concepts, Azure Services, and Security</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
              Demonstrated foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Validated proficiency in security, privacy, and compliance.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-lg border border-purple-100 dark:border-purple-800 relative overflow-hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oracle Cloud Infrastructure: Generative AI Professional</h3>
            <p className="text-md text-gray-800 dark:text-gray-200 mb-4 font-medium italic">LLMs, Prompt Engineering, and AI Infrastructure</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
              Certified in designing and implementing Generative AI solutions. Expertise in fine-tuning Large Language Models (LLMs) and deploying them on OCI infrastructure.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
