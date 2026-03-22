import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Legal Internships & Experience | Aqsa Zam Zam Mirza Johar Baig',
  description: 'Timeline of Aqsa Zam Zam Mirza Johar Baig’s legal internships including the National Human Rights Commission (NHRC), trial courts, and various legal research institutes.',
};

const experiences = [
  {
    role: "Legal Intern",
    organization: "National Human Rights Commission (NHRC)",
    period: "Jan 27, 2025 – Feb 7, 2025",
    details: [
      "Conducted in-depth human rights analysis on emerging socio-legal issues.",
      "Assisted in drafting research summaries and reviewing complaints regarding human rights violations.",
      "Gained firsthand exposure to the statutory mechanisms of human rights protection in India."
    ]
  },
  {
    role: "Legal Intern",
    organization: "Juris Centre",
    period: "Nov 2024",
    details: [
      "Authored extensive legal research articles focusing on constitutional and criminal law.",
      "Drafted legal briefs and case summaries to assist in ongoing advisory matters.",
      "Collaborated with senior researchers to analyze recent landmark Supreme Court judgments."
    ]
  },
  {
    role: "Law Intern",
    organization: "Medilaw",
    period: "Oct 2024",
    details: [
      "Specialized in medico-legal research, analyzing the intersection of healthcare policies, medical negligence, and patient rights.",
      "Reviewed case files regarding medical malpractice and statutory compliance of healthcare facilities."
    ]
  },
  {
    role: "Legal Research Intern",
    organization: "NayaLegal",
    period: "Sept 10, 2024 – Oct 10, 2024",
    details: [
      "Contributed to policy research initiatives assessing the impact of new quasi-judicial tribunal rules.",
      "Prepared comparative legal analysis reports highlighting gaps in current commercial litigation frameworks."
    ]
  },
  {
    role: "Legal Research Intern",
    organization: "AGISS Research Institute",
    period: "Aug 10, 2024 – Sept 10, 2024",
    details: [
      "Participated in quantitative and qualitative legal research projects aimed at institutional reform.",
      "Drafted abstracts and assisted in the compilation of policy papers directed at legislative feedback."
    ]
  },
  {
    role: "Legal Intern",
    organization: "Rahul & Jayshree Associates & Co.",
    period: "July 1 – July 31, 2024",
    details: [
      "Observed civil litigation proceedings and assisted in the preparation of plaints, written statements, and affidavits.",
      "Conducted due diligence and client interaction to support trial court advocacy."
    ]
  },
  {
    role: "Legal Intern",
    organization: "Chamber of Advocate Quazi Attibuddin M",
    period: "Dec 2023 – Feb 2024",
    details: [
      "Aided in legal drafting of bail applications, criminal revisions, and appeals.",
      "Conducted extensive case law research to formulate arguments for criminal litigation matters.",
      "Shadowed the advocate during cross-examinations and final arguments in District Court."
    ]
  },
  {
    role: "Legal Intern",
    organization: "Advocate Milind Deshpande",
    period: "May 2023 – Sept 2023",
    details: [
      "Supported documentation and filing processes in civil and family law disputes.",
      "Researched localized state laws and procedural rules to assist in everyday chamber practice."
    ]
  },
  {
    role: "Legal Intern",
    organization: "Advocate Abdul Hakim",
    period: "Dec 2022 – Feb 2023",
    details: [
      "Gained foundational exposure to litigation practice, observing court decorum, filing procedures, and client counseling.",
      "Assisted in organizing case briefs and maintaining chamber records."
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Experience', href: '/experience' }]} />
      
      <div className="mt-8 mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Internships & Professional Experience</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A comprehensive timeline of Aqsa Zam Zam Mirza Johar Baig's practical exposure in legal research, litigation, and public policy advocacy.
        </p>
        <p className="text-sm text-gray-500 italic mt-4">Author: Aqsa Zam Zam Mirza Johar Baig | Last Updated: March 2026</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 dark:before:via-blue-800 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
              <span className="text-xs font-bold">{idx + 1}</span>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                <time className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 xl:mt-0 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">{exp.period}</time>
              </div>
              <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4">{exp.organization}</h4>
              <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-400 space-y-2 text-sm md:text-base">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
