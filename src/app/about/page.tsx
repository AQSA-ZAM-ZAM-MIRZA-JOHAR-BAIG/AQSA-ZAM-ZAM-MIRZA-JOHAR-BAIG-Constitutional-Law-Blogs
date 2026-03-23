import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Aqsa Zam Zam Mirza Johar Baig | Software Developer',
  description: 'Background and education of Aqsa Zam Zam Mirza Johar Baig, a Computer Science student at VIIT Pune and Data Science student at IIT Madras, specializing in AI/ML.',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      
      <article className="prose dark:prose-invert lg:prose-lg max-w-none mt-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-bold mb-6 font-serif">About Aqsa Zam Zam Mirza Johar Baig</h1>
        <p className="text-sm text-gray-500 italic mb-8">Author: Aqsa Zam Zam Mirza Johar Baig | Last Updated: March 2026</p>

        <p className="mb-6">
          I am <strong>Aqsa Zam Zam Mirza Johar Baig</strong>, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Currently, I am pursuing a dual-degree path: a B.Tech at <strong>Vishwakarma Institute of Information Technology (VIIT), Pune</strong> and a B.S. in Data Science from <strong>Indian Institute of Technology (IITM), Madras</strong>.
        </p>

        <p className="mb-8">
          My passion lies at the intersection of scalable software engineering and intelligent systems. I have a proven track record of building production-ready full-stack applications, architecting asynchronous pipelines, and deploying fault-tolerant systems on AWS.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Education & Academic Excellence</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg">
            <thead className="bg-gray-100 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Degree / Program</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Institution</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Timeline</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">B.Tech in CS & Engineering (AI & ML)</td>
                <td className="px-6 py-4 text-sm">Vishwakarma Institute of Information Technology (VIIT), Pune</td>
                <td className="px-6 py-4">2023 – 2027</td>
                <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">8.77 CGPA</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">B.S. in Data Science</td>
                <td className="px-6 py-4 text-sm">Indian Institute of Technology (IITM), Madras</td>
                <td className="px-6 py-4">2023 – 2027</td>
                <td className="px-6 py-4 font-semibold text-blue-600 dark:text-blue-400">7.44 CGPA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Core Technical Interests</h2>
        <ul className="list-disc list-inside space-y-3 pl-4 mb-8 text-gray-700 dark:text-gray-300">
          <li><strong>Artificial Intelligence & ML:</strong> Deep Learning, Neural Networks, and Predictive Analytics using PyTorch and Scikit-learn.</li>
          <li><strong>Full-Stack Development:</strong> Building secure, scalable MERN and Flask/Vue applications with modern auth (JWT/RBAC).</li>
          <li><strong>Cloud Computing:</strong> Designing highly available architectures on AWS using EC2, Lambda, S3, and CloudFormation.</li>
          <li><strong>System Design:</strong> Architecting distributed systems with asynchronous task processing using Redis and Celery.</li>
          <li><strong>Data Engineering:</strong> Managing complex datasets with PostgreSQL, MongoDB, and implementing ETL pipelines.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6 font-serif border-b pb-2 border-gray-200 dark:border-gray-700">Professional Philosophy</h2>
        <p>I believe in the power of "code as logic" to solve real-world problems. Whether it's optimizing a tailoring business through e-commerce or predicting market success via ensemble learning, my goal is to deliver code that is efficient, secure, and impactful.</p>
      </article>
    </div>
  );
}
