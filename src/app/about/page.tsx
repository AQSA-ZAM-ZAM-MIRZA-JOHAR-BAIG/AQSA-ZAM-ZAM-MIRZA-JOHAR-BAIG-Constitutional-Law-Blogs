import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About',
  description: 'Detailed background, education, and interests of AQSA MIRZA. BA LLB student with top CLAT and AILET ranks, focused on public policy and human rights.',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      
      <article className="prose dark:prose-invert lg:prose-lg max-w-none mt-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-bold mb-6 font-serif">About AQSA MIRZA</h1>
        <p className="text-sm text-gray-500 italic mb-8">Author: AQSA MIRZA | Last Updated: March 2026</p>

        <p className="mb-6">
          I am <strong>AQSA MIRZA</strong>, an ambitious BA LLB student currently pursuing my legal education at <strong>DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI</strong> (Sant Gadge Baba Amravati University). My journey in law is rooted in a deep-seated desire to facilitate institutional reform, advocate for human rights, and contribute to national policy initiatives.
        </p>

        <p className="mb-8">
          As a proactive legal researcher and public policy enthusiast, my long-term objective is to contribute to organizations like <strong>NITI Aayog</strong>, where empirical legal research dictates effective governance and policy-making.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Education & Academic Excellence</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg">
            <thead className="bg-gray-100 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Degree / Exam</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Institution / Board</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Year</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">BA LLB (5-Year Integrated)</td>
                <td className="px-6 py-4 text-sm">DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI</td>
                <td className="px-6 py-4">2022 – 2027</td>
                <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">77.34% (After 5 Semesters)</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">CLAT (Common Law Admission Test)</td>
                <td className="px-6 py-4 text-sm">Consortium of NLUs</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4 font-bold">AIR 42</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">AILET (All India Law Entrance Test)</td>
                <td className="px-6 py-4 text-sm">NLU Delhi</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4 font-bold">AIR 34</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Areas of Interest</h2>
        <ul className="list-disc list-inside space-y-3 pl-4 mb-8 text-gray-700 dark:text-gray-300">
          <li><strong>Public Policy & Governance:</strong> Analyzing legislative frameworks to propose data-driven policy recommendations for state and central bodies.</li>
          <li><strong>Human Rights Law:</strong> Investigating systemic abuses and advocating for marginalized communities through statutory mechanisms (NHRC).</li>
          <li><strong>Medico-Legal Issues:</strong> Bridging the gap between healthcare ethics, patient rights, and legal liabilities.</li>
          <li><strong>Constitutional Law:</strong> Interpreting provisions and amendments critically through ongoing blogging and research projects.</li>
          <li><strong>Civil and Criminal Litigation:</strong> Practical courtroom exposure to understand the grassroots implementation of procedural laws.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Languages</h2>
        <p>I am professionally fluent in <strong>English</strong>, <strong>Hindi</strong>, and <strong>Marathi</strong>, allowing me to conduct legal research, client counseling, and advocacy efficiently across diverse demographics in India.</p>
      </article>
    </div>
  );
}
