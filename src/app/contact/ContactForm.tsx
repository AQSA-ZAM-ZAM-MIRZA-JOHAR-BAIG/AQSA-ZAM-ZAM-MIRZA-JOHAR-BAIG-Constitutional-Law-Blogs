'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aqsamirz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Contact Details Card */}
      <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 uppercase tracking-wider">
            Direct Inquiries
          </span>
          <h2 className="text-2xl font-bold text-white mt-3 font-serif">
            Contact Information
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Reach out directly for software engineering roles, distributed systems projects, or academic discussions.
          </p>
        </div>

        {/* Email with 1-click copy */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Email Address</span>
            <button 
              type="button" 
              onClick={handleCopyEmail}
              className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 transition-colors"
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>
          <a 
            href="mailto:aqsamirz@gmail.com" 
            className="text-base sm:text-lg font-semibold text-white hover:text-indigo-300 transition-colors break-all"
          >
            aqsamirz@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">Location</span>
          <p className="text-base font-semibold text-slate-200">
            Pune, Maharashtra, India
          </p>
          <span className="text-xs text-slate-400">Available for remote &amp; on-site technical roles</span>
        </div>

        {/* Education Institution */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">Academic Affiliation</span>
          <p className="text-sm sm:text-base font-semibold text-slate-200">
            Y.C. College (Yashwantrao Chavan College)
          </p>
          <p className="text-xs text-emerald-400 mt-0.5 font-medium">
            Grade O (Outstanding) · Open Category
          </p>
        </div>

        {/* Verified Social Connect */}
        <div className="pt-4 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
            Connect on Verified Channels
          </span>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://www.linkedin.com/in/aqsamirza08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] text-center px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-500/20"
            >
              LinkedIn ↗
            </a>
            <a 
              href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] text-center px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form Card */}
      <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-2 font-serif">
          Send a Message
        </h2>
        <p className="text-sm text-slate-300 mb-6">
          Fill out the form below to initiate collaboration discussions. Your inquiry will be forwarded immediately.
        </p>

        {status === 'success' && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm">
            <div className="font-bold mb-1">✓ Message Sent Successfully!</div>
            <p className="text-xs text-emerald-400/90">Thank you for reaching out. Aqsa Zam Zam Mirza Johar Baig will respond to your email shortly.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600"
                placeholder="Jane Doe" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600"
                placeholder="jane@example.com" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Subject <span className="text-rose-400">*</span>
            </label>
            <input 
              type="text" 
              id="subject" 
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600"
              placeholder="Full-Stack Project Collaboration / Job Opportunity" 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea 
              id="message" 
              rows={5} 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-600 resize-y"
              placeholder="Describe your technical requirements or proposal..."
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            {status === 'submitting' ? 'Sending Message...' : 'Send Message ✉️'}
          </button>
        </form>
      </div>
    </div>
  );
}
