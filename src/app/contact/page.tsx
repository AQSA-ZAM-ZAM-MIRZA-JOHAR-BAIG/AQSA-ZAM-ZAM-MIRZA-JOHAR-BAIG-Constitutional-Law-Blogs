import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Aqsa Zam Zam Mirza Johar Baig',
  description: 'Reach out to Aqsa Zam Zam Mirza Johar Baig for legal research, public policy opportunities, or internships at institutions like NITI Aayog.',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      
      <div className="text-center mt-10 mb-14">
        <h1 className="text-4xl font-bold mb-4 font-serif">Get In Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Reach out for opportunities in policy research, legal research, and internships at institutions like NITI Aayog. Aqsa Zam Zam Mirza Johar Baig is open to collaborative academic drafting and advocacy roles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-full">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 font-serif">Professional Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                <a href="mailto:aqsajoharbaig@gmail.com" className="hover:underline">aqsajoharbaig@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">Amravati / Nagpur Region, Maharashtra, India</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Institution</h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">DR PANJABRAO DESHMUKH COLLEGE OF LAW</p>
            </div>
            
            <div className="pt-8 mt-4 border-t border-gray-200 dark:border-gray-700">
               <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect on Social</h3>
               <div className="flex space-x-4">
                 <a href="https://linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-[#0A66C2] text-white rounded font-medium hover:bg-blue-800 transition shadow-sm">LinkedIn</a>
                 <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-900 dark:bg-black text-white rounded font-medium hover:bg-gray-800 transition shadow-sm border border-gray-700">GitHub</a>
               </div>
            </div>
          </div>
        </div>

        {/* Form Placeholder */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 font-serif">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-white px-4 py-3 transition" placeholder="Jane Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-white px-4 py-3 transition" placeholder="jane@example.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input type="text" id="subject" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-white px-4 py-3 transition" placeholder="Legal Research Opportunity" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" rows={5} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-white px-4 py-3 transition resize-y" placeholder="How can we collaborate...?" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
