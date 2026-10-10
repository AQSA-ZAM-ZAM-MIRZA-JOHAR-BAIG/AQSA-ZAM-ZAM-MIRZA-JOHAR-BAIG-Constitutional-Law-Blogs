import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Aqsa Zam Zam Mirza Johar Baig for software collaborations, AI/ML projects, speaking engagements, or cloud architecture consulting opportunities.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Aqsa Zam Zam Mirza Johar Baig',
    description:
      'Send project inquiries, collaboration requests, or technical partnership opportunities through the official contact portal.',
    url: `${SITE_URL}/contact`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      
      {/* Header */}
      <header className="text-center mt-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-serif">
          Let&apos;s Build Something Impactful
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a robust full-stack web application, an AI/ML model deployment, or cloud architecture consulting from an outstanding Y.C. College merit engineer, feel free to reach out.
        </p>
      </header>

      {/* Main Form and Info Layout */}
      <ContactForm />
    </div>
  );
}
