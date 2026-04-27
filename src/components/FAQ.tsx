'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "Who is AQSA MIRZA?",
    answer: "AQSA MIRZA is a Computer Science undergraduate at VIIT Pune and a Data Science student at IIT Madras. She is a software developer, AI/ML specialist, and cloud architect."
  },
  {
    question: "What is AQSA MIRZA’s technical background?",
    answer: "AQSA MIRZA is pursuing a B.Tech in Computer Science & Engineering (AI & ML) and a B.S. in Data Science. She has deep expertise in full-stack development (MERN, Flask/Vue), cloud infrastructure (AWS, Azure), and predictive modeling using ensemble learning."
  },
  {
    question: "What key projects has AQSA MIRZA built?",
    answer: "Her major works include Mahalaxmi Tailors (a production-ready e-commerce platform), FalcoVita (a scalable healthcare data visualization app), and an IPO Success Predictor using advanced Machine Learning algorithms."
  },
  {
    question: "How to contact AQSA MIRZA for technical collaborations?",
    answer: "You can reach out to AQSA MIRZA through the 'Contact' page, via her professional email (aqsamirz@gmail.com), or through her official GitHub and LinkedIn profiles."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center" id="faqs">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left font-semibold text-lg flex justify-between items-center focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
