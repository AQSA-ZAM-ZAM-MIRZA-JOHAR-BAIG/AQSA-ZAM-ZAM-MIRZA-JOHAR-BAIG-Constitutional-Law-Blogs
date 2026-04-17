import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Review software engineering experience, AI and ML projects, cloud deployments, and industry programs completed by Aqsa Zam Zam Mirza Johar Baig.',
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Software Engineering Experience',
    description:
      'Projects, internships, and technical milestones spanning full-stack development, cloud architecture, and machine learning.',
    url: `${SITE_URL}/experience`,
    images: [{ url: absoluteUrl('/profile.svg'), width: 1200, height: 630, alt: 'Aqsa profile card' }],
  },
};

const experiences = [
  {
    role: "Full Stack Developer (E-commerce)",
    organization: "Mahalaxmi Tailors (mahalaxmi-tailors.shop)",
    period: "Dec 2025 – Jan 2026",
    details: [
      "Designed a production-ready MERN platform supporting 70+ registered users with JWT/RBAC security.",
      "Integrated Razorpay, Cloudinary, and Jitsi Meet for seamless payment, storage, and conferencing.",
      "Architected deployment on AWS using IAM, S3, Route 53, EC2, CloudFront, and CloudWatch.",
      "Improved reliability using API rate-limiting and security through Helmet and continuous monitoring."
    ]
  },
  {
    role: "Lead Full Stack Developer",
    organization: "FalcoVita (falcovita.vercel.app)",
    period: "Sept 2025 – Dec 2025",
    details: [
      "Architected a scalable healthcare platform using Vue.js, Flask, and SQLite.",
      "Implemented asynchronous task pipelines with Celery and Redis, significantly reducing request latency.",
      "Developed 20+ interactive data visualizations using Chart.js to enable exploratory data analysis (EDA).",
      "Secured application with Bcrypt, Argon2, and HMAC-SHA cryptographic algorithms."
    ]
  },
  {
    role: "ML Engineer",
    organization: "IPO-Success-Predictor",
    period: "Jan 2025 – Mar 2025",
    details: [
      "Achieved 80% prediction accuracy using Ensemble Learning (Bagging, Boosting) on real-world datasets.",
      "Automated the end-to-end ML pipeline reducing manual analysis time and ensuring repeatable insights.",
      "Deployed model on Hugging Face spaces with an interactive web interface for near real-time assessment."
    ]
  },
  {
    role: "AI & ML Trainee",
    organization: "Google – AICTE Industry Program",
    period: "Oct 2024 – Dec 2024",
    details: [
      "Applied supervised and unsupervised learning techniques on complex datasets.",
      "Mastered data preprocessing and model performance evaluation using 10+ validation metrics.",
      "Gained hands-on experience with PyTorch and TensorFlow for building neural networks."
    ]
  },
  {
    role: "AWS Cloud Practitioner",
    organization: "AWS – Cloud Practices Program",
    period: "Jul 2024 – Sept 2024",
    details: [
      "Implemented 15+ AWS services to design and deploy highly available cloud-based applications.",
      "Deployed 3+ scalable and fault-tolerant architectures using EC2, RDS, and Lambda.",
      "Utilized CloudFormation and IAM for Infrastructure as Code (IaC) and secure resource management."
    ]
  },
  {
    role: "Web Development Intern",
    organization: "EduSkills – Industry Program",
    period: "Apr 2024 – Jun 2024",
    details: [
      "Built 5+ responsive web applications using HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented backend integrations which reduced page load time by 30% and improved UX.",
      "Collaborated in a team environment following agile methodologies for sprint-based delivery."
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Experience', href: '/experience' }]} />
      
      <div className="mt-8 mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 font-serif">Projects & Industrial Experience</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A comprehensive record of Aqsa Zam Zam Mirza Johar Baig's technical journey in software engineering, AI/ML research, and cloud architecture.
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
