import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Software engineering experience, AI/ML projects, cloud deployments, and industry programs completed by Aqsa Zam Zam Mirza Johar Baig.',
  alternates: { canonical: `${SITE_URL}/experience` },
  openGraph: {
    title: 'Software Engineering Experience | Aqsa Zam Zam Mirza Johar Baig',
    description:
      'Projects, internships, and technical milestones spanning full-stack development, cloud architecture, and machine learning.',
    url: `${SITE_URL}/experience`,
    images: [{ url: absoluteUrl('/profile.png'), width: 1200, height: 630, alt: 'Aqsa Zam Zam Mirza Johar Baig – Developer & AI/ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [absoluteUrl('/profile.png')],
  },
};

const experiences = [
  {
    role: "Full Stack Developer (E-commerce)",
    organization: "Mahalaxmi Tailors",
    url: "https://mahalaxmi-tailors.shop",
    period: "Dec 2025 – Jan 2026",
    badge: "Production Deployment",
    tags: ["MERN", "JWT & RBAC", "Razorpay", "AWS S3 / EC2 / Route 53", "CloudFront", "Helmet Security"],
    details: [
      "Designed a production-ready MERN platform supporting 70+ registered users with JWT/RBAC security architecture.",
      "Integrated Razorpay payment gateways, Cloudinary media storage, and Jitsi Meet for automated video appointments.",
      "Architected fault-tolerant deployment on AWS using IAM roles, S3 buckets, Route 53 DNS, EC2, CloudFront CDN, and CloudWatch metrics.",
      "Hardened backend APIs using express rate-limiting, Helmet headers, CORS policies, and continuous uptime monitoring."
    ]
  },
  {
    role: "Lead Full Stack Developer",
    organization: "FalcoVita Healthcare Platform",
    url: "https://falcovita.vercel.app",
    period: "Sept 2025 – Dec 2025",
    badge: "Distributed Architecture",
    tags: ["Vue.js", "Flask", "Celery", "Redis", "SQLite", "Chart.js", "Argon2 & Bcrypt"],
    details: [
      "Architected a scalable, data-intensive healthcare web application utilizing Vue.js, Flask RESTful microservices, and SQLite.",
      "Implemented asynchronous background task pipelines with Celery and Redis message brokers, eliminating request latency bottlenecks.",
      "Developed 20+ interactive medical data visualizations using Chart.js to power exploratory data analysis (EDA).",
      "Secured patient access workflows using Bcrypt, Argon2 password hashing, and HMAC-SHA request signing."
    ]
  },
  {
    role: "Machine Learning Engineer",
    organization: "IPO-Success-Predictor",
    url: "https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor",
    period: "Jan 2025 – Mar 2025",
    badge: "AI / ML Research",
    tags: ["Python", "Ensemble Learning", "Random Forest", "Gradient Boosting", "Hugging Face", "Pandas"],
    details: [
      "Engineered predictive machine learning models achieving 80% accuracy on historical public offering datasets using Ensemble methods.",
      "Automated end-to-end data preprocessing pipelines (imputation, categorical encoding, feature scaling) reducing manual analysis time.",
      "Deployed the production inference model to Hugging Face Spaces with a responsive web dashboard for real-time evaluations."
    ]
  },
  {
    role: "AI & ML Trainee",
    organization: "Google – AICTE Industry Program",
    url: null,
    period: "Oct 2024 – Dec 2024",
    badge: "National Program",
    tags: ["PyTorch", "TensorFlow", "Deep Learning", "Supervised Learning", "Model Evaluation"],
    details: [
      "Applied supervised, unsupervised, and deep learning algorithms across complex computer vision and NLP benchmark datasets.",
      "Mastered data preprocessing, hyperparameter optimization, and rigorous validation utilizing 10+ evaluation metrics.",
      "Built and trained neural network architectures using PyTorch and TensorFlow under national industry mentorship."
    ]
  },
  {
    role: "AWS Cloud Practitioner",
    organization: "AWS Cloud Practices Program",
    url: null,
    period: "Jul 2024 – Sept 2024",
    badge: "Cloud Architecture",
    tags: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "CloudFormation", "IAM"],
    details: [
      "Implemented 15+ core AWS cloud services to design and provision highly available, resilient cloud-native applications.",
      "Deployed 3+ scalable multi-tier architectures incorporating elastic EC2 compute, managed RDS databases, and serverless Lambdas.",
      "Authored Infrastructure as Code (IaC) templates in AWS CloudFormation with fine-grained IAM security policies."
    ]
  },
  {
    role: "Web Development Intern",
    organization: "EduSkills Industry Program",
    url: null,
    period: "Apr 2024 – Jun 2024",
    badge: "Internship",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST APIs", "Agile / Scrum"],
    details: [
      "Constructed 5+ fully responsive, mobile-first web applications using semantic HTML, modern CSS, JavaScript, and Bootstrap.",
      "Implemented asynchronous backend integrations and optimized network payloads, cutting initial page load times by 30%.",
      "Collaborated in sprint-based agile delivery cycles, participating in daily standups, code reviews, and Git version control."
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={[{ label: 'Experience', href: '/experience' }]} />
      
      {/* Page Header */}
      <div className="mt-8 mb-14 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Professional Milestones
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-serif">
          Projects &amp; Industrial Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          A comprehensive record of <strong className="text-white">Aqsa Zam Zam Mirza Johar Baig</strong>&apos;s technical journey in full-stack engineering, AI/ML model research, and cloud infrastructure architecture.
        </p>
        <p className="text-xs text-slate-400 mt-4 flex items-center gap-2">
          <span>Author: Aqsa Zam Zam Mirza Johar Baig</span>
          <span>•</span>
          <span>Academic Standing: Y.C. College (Grade O Outstanding)</span>
          <span>•</span>
          <span>Last Updated: March 2026</span>
        </p>
      </div>

      {/* Modern Left-Rail Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-blue-600">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[30px] sm:-left-[38px] top-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-300 flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-400 transition-all duration-300 z-10">
              {idx + 1}
            </div>
            
            {/* Experience Card */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                    {exp.badge}
                  </span>
                </div>
                <time className="text-xs sm:text-sm font-semibold text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-3.5 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  {exp.period}
                </time>
              </div>

              {/* Organization line */}
              <div className="mb-5">
                {exp.url ? (
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{exp.organization}</span>
                    <span className="text-xs opacity-70">↗</span>
                  </a>
                ) : (
                  <span className="text-base font-medium text-slate-300">
                    {exp.organization}
                  </span>
                )}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {exp.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
