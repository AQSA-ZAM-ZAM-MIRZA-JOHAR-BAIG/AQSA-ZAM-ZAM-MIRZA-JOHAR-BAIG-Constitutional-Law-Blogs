'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "Who is AQSA MIRZA?",
    answer: "AQSA MIRZA is a passionate BA LLB student at DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI. She is a legal researcher, public policy enthusiast, and aspires to contribute to NITI Aayog."
  },
  {
    question: "What is AQSA MIRZA’s legal background?",
    answer: "AQSA MIRZA has a strong academic foundation, marked by AIR 42 in CLAT 2022 and AIR 34 in AILET 2022. She is pursuing a 5-year integrated BA LLB course and has deep interests in Constitutional Law, Human Rights, and Medico-Legal issues."
  },
  {
    question: "What internships has AQSA MIRZA completed?",
    answer: "AQSA MIRZA has completed significant internships including a stint at the National Human Rights Commission (NHRC), various legal research institutes like AGISS, Juris Centre, NayaLegal, and substantial trial court litigation exposure under multiple senior advocates."
  },
  {
    question: "How to contact AQSA MIRZA for legal research or policy opportunities?",
    answer: "You can contact AQSA MIRZA through the 'Contact' page on this website, via her professional email, or through her official LinkedIn profile."
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
