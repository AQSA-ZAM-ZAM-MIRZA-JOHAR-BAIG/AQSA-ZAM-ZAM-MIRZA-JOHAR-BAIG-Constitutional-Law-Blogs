import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Moot Court Competitions & Awards | Aqsa Zam Zam Mirza Johar Baig',
  description: 'Aqsa Zam Zam Mirza Johar Baig’s achievements in National Moot Court Competitions and presentation events, showcasing excellence in legal advocacy and oral argumentation.',
};

export default function MootsAwards() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Moots & Awards', href: '/moots-awards' }]} />
      
      <div className="mt-8 mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Moot Courts & Outstanding Achievements</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A record of Aqsa Zam Zam Mirza Johar Baig's competitive advocacy, demonstrating exceptional skills in legal research, drafting memorials, and persuasive oral arguments.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">Author: Aqsa Zam Zam Mirza Johar Baig | Last Updated: March 2026</p>
      </div>

      <div className="overflow-x-auto shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700 mb-12">
        <table className="w-full text-left text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold">
            <tr>
              <th scope="col" className="px-6 py-4 whitespace-nowrap">Year</th>
              <th scope="col" className="px-6 py-4">Event / Competition</th>
              <th scope="col" className="px-6 py-4">Organizing Body</th>
              <th scope="col" className="px-6 py-4 text-blue-600 dark:text-blue-400">Role & Prize</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
              <td className="px-6 py-4 whitespace-nowrap font-medium">2025</td>
              <td className="px-6 py-4 font-semibold">1st Jadhavar National Moot Court Competition</td>
              <td className="px-6 py-4">Jadhavar Group of Institutes</td>
              <td className="px-6 py-4 font-bold text-amber-600 dark:text-amber-400">Runner up</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
              <td className="px-6 py-4 whitespace-nowrap font-medium">2025</td>
              <td className="px-6 py-4 font-semibold">Yuva Bhushan Competition</td>
              <td className="px-6 py-4">Yuvak Biradari, Mumbai</td>
              <td className="px-6 py-4 font-bold text-amber-600 dark:text-amber-400">Winner</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
              <td className="px-6 py-4 whitespace-nowrap font-medium">2024</td>
              <td className="px-6 py-4 font-semibold">3rd AIU National Moot Court Competition</td>
              <td className="px-6 py-4">DY Patil College of Law, Navi Mumbai</td>
              <td className="px-6 py-4 font-bold text-amber-600 dark:text-amber-400">2nd Best Speaker</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
              <td className="px-6 py-4 whitespace-nowrap font-medium">2024</td>
              <td className="px-6 py-4 font-semibold">12th National Powerpoint Presentation Competition</td>
              <td className="px-6 py-4">Manikchand Pahade Law College, Chh. Sambhaji Nagar</td>
              <td className="px-6 py-4 font-bold text-amber-600 dark:text-amber-400">Winner</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
