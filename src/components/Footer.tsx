import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          <div>
            <span className="font-serif font-bold text-xl tracking-tighter text-gray-900 dark:text-white">AQSA MIRZA</span>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Law Student, Legal Researcher & Public Policy Enthusiast. <br/> Dedicated to institutional reform and human rights advocacy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/posts" className="hover:text-blue-600 transition">Constitutional Blogs</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
              <li><Link href="/experience" className="hover:text-blue-600 transition">Experience</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 uppercase text-sm tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="https://linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">LinkedIn</a></li>
              <li><a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">GitHub</a></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Page</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center">
          <p className="text-sm text-gray-500 text-center">
            &copy; {currentYear} AQSA MIRZA. All rights reserved. <br/>
            Based in Amravati, Maharashtra, India.
          </p>
          <p className="text-xs text-gray-400 mt-2">Last Updated: March 2026</p>
        </div>
      </div>
    </footer>
  );
}
