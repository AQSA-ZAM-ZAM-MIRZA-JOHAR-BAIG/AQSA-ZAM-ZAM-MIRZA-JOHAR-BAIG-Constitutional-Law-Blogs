import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Publications & Academic Research',
  description: 'Authored legal articles, case summaries, and medico-legal research pieces by AQSA MIRZA. Includes certification in International Trade in Services.',
};

export default function Publications() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Publications & Research', href: '/publications' }]} />
      
      <div className="mt-8 mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Publications, Research & Courses</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A showcase of AQSA MIRZA's academic rigor, including authored articles, medico-legal analysis, and specialized legal certifications.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">Author: AQSA MIRZA | Last Updated: March 2026</p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 font-serif">Authored Articles & Research Papers</h2>
        <div className="grid gap-6">
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Constitutional Validity of Emerging Quasi-Judicial Tribunals</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Status: Forthcoming / Internal Research (NayaLegal Internship)</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              An abstract and comprehensive analysis evaluating the procedural autonomy of newly established tribunals and their adherence to the doctrine of separation of powers. This research was heavily influenced by hands-on policy review tasks.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Exploring Medical Negligence: A Patient's Rights Perspective</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Status: Medilaw Internship Output</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A detailed case summary compilation focusing on landmark judgments regarding duty of care in private healthcare setups. Highlights the evolving jurisprudence around informed consent and vicarious liability.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Human Rights Violations in Custodial Interrogations</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">Status: NHRC Policy Summary</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Analytical brief assessing the scope of statutory protections afforded to detainees. Synthesizes recent Supreme Court guidelines with on-ground complaint mechanisms handled by the NHRC.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 font-serif">Specialized Courses & Certifications</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-lg border border-blue-100 dark:border-blue-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-bl-full"></div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Lex Osmose – International Trade in Services
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-200 mb-6 font-medium">
            <em>Legal framework, Negotiations and Services Trade Policies</em>
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Institution:</strong> HNLU, Raipur</li>
              <li><strong>Grade:</strong> 'O' Grade</li>
              <li><strong>Timeline:</strong> Oct – Nov 2024</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Deep dive into GATS, bilateral trade agreements, market access negotiations, and the intersection of domestic regulation with international services trade law.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
