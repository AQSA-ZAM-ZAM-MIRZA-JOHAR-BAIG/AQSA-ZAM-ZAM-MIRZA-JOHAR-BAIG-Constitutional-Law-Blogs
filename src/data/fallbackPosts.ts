export interface FallbackPost {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  category: "Fundamental Rights" | "DPSP" | "Amendments" | "Case Analysis" | "General";
  tags: string[];
  content: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
  };
}

export const FALLBACK_POSTS: FallbackPost[] = [
  {
    _id: "fb-post-1",
    title: "Article 21 and the Right to Privacy in the Digital Age: An Algorithmic Perspective",
    slug: "article-21-right-to-privacy-digital-age",
    summary: "A constitutional jurisprudence study on how the landmark Puttaswamy verdict safeguards digital autonomy, cryptographic identity, and personal data against algorithmic surveillance.",
    category: "Fundamental Rights",
    tags: ["Article 21", "Right to Privacy", "Puttaswamy", "Digital Rights", "Constitutional Law"],
    published: true,
    publishedAt: "2026-03-15T10:00:00.000Z",
    createdAt: "2026-03-15T10:00:00.000Z",
    updatedAt: "2026-03-15T10:00:00.000Z",
    author: { name: "Aqsa Zam Zam Mirza Johar Baig" },
    content: `
      <h2>Introduction: The Evolution of Article 21</h2>
      <p>Article 21 of the Constitution of India guarantees that <em>"No person shall be deprived of his life or personal liberty except according to procedure established by law."</em> While originally interpreted strictly within physical bodily liberty (as seen in <em>A.K. Gopalan v. State of Madras</em>), jurisprudence has undergone a transformative renaissance, culminating in the 9-judge bench decision in <strong>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</strong>.</p>
      
      <h2>The Proportionality Test in Digital Governance</h2>
      <p>In analyzing state action and automated intelligence systems, the Supreme Court mandated the strict four-fold test of proportionality:</p>
      <ul>
        <li><strong>Legitimate State Aim:</strong> The measure must pursue an objective authorized by law.</li>
        <li><strong>Rational Connection:</strong> There must be a demonstrable correlation between the data collected and the stated outcome.</li>
        <li><strong>Necessity (Least Restrictive Measure):</strong> The state cannot employ expansive surveillance when minimal data collection achieves the same end.</li>
        <li><strong>Balancing:</strong> The societal benefit must not disproportionately infringe individual constitutional freedoms.</li>
      </ul>

      <h2>Conclusion: Safeguarding Digital Citizens</h2>
      <p>As algorithmic systems, computer vision monitoring, and AI-driven governance expand, constitutional checks must remain vigilant. Automated decision-making cannot bypass the guarantee of due process and personal dignity established under Article 21.</p>
    `
  },
  {
    _id: "fb-post-2",
    title: "Directive Principles vs. Fundamental Rights: Resolving the Constitutional Harmony",
    slug: "directive-principles-fundamental-rights-harmony",
    summary: "Examining the delicate equilibrium between Part III and Part IV of the Indian Constitution, from Champakam Dorairajan to the Minerva Mills doctrine of twin wheels.",
    category: "DPSP",
    tags: ["DPSP", "Part III", "Part IV", "Minerva Mills", "Constitutional Balance"],
    published: true,
    publishedAt: "2026-03-02T10:00:00.000Z",
    createdAt: "2026-03-02T10:00:00.000Z",
    updatedAt: "2026-03-02T10:00:00.000Z",
    author: { name: "Aqsa Zam Zam Mirza Johar Baig" },
    content: `
      <h2>The Classic Conflict: Liberty vs. Social Welfare</h2>
      <p>The relationship between Fundamental Rights (Part III) and Directive Principles of State Policy (Part IV) represents the philosophical heartbeat of Indian constitutionalism. While Fundamental Rights protect civil and political liberties, Directive Principles aspire towards socioeconomic justice.</p>

      <h2>The Doctrine of Twin Wheels in Minerva Mills</h2>
      <p>Justice Chandrachud eloquently observed in <strong>Minerva Mills Ltd. v. Union of India (1980)</strong> that:</p>
      <blockquote>
        "The Indian Constitution is founded on the bedrock of the balance between Parts III and IV. To give absolute primacy to one over the other is to disturb the harmony of the Constitution."
      </blockquote>
      <p>Neither part is subsidiary; instead, they operate as complementary vectors designed to construct an equitable welfare state without sacrificing individual liberties.</p>

      <h2>Modern Synthesis</h2>
      <p>Through expansive judicial interpretation, Directive Principles such as equal pay for equal work (Art. 39d), protection of environment (Art. 48A), and right to education (Art. 45) have been integrated into the living fabric of Article 21.</p>
    `
  },
  {
    _id: "fb-post-3",
    title: "The Basic Structure Doctrine: Kesavananda Bharati & Judicial Review",
    slug: "basic-structure-doctrine-kesavananda-bharati",
    summary: "Comprehensive breakdown of Article 368 limitations, the inviolability of the Constitution's core identity, and judicial review as an indestructible fortress.",
    category: "Amendments",
    tags: ["Article 368", "Basic Structure", "Kesavananda Bharati", "Judicial Review"],
    published: true,
    publishedAt: "2026-02-18T10:00:00.000Z",
    createdAt: "2026-02-18T10:00:00.000Z",
    updatedAt: "2026-02-18T10:00:00.000Z",
    author: { name: "Aqsa Zam Zam Mirza Johar Baig" },
    content: `
      <h2>The Watershed Moment of 1973</h2>
      <p>Decided by the largest bench in Indian legal history (13 judges), <strong>Kesavananda Bharati v. State of Kerala (1973)</strong> demarcated the boundary between the Parliament's constituent power to amend the Constitution and its incapacity to rewrite its identity.</p>

      <h2>Pillars of the Basic Structure</h2>
      <ul>
        <li><strong>Supremacy of the Constitution:</strong> No legislative act is superior to constitutional mandates.</li>
        <li><strong>Republican and Democratic Form of Government:</strong> Free, periodic, and fair elections.</li>
        <li><strong>Secular Character:</strong> Equality of all religions before the law.</li>
        <li><strong>Separation of Powers:</strong> Distinct domains for the Legislature, Executive, and Judiciary.</li>
        <li><strong>Judicial Review:</strong> The authority of the High Courts and Supreme Court to test laws under Articles 32 and 226.</li>
      </ul>

      <h2>Global Significance</h2>
      <p>The Basic Structure Doctrine has influenced supreme constitutional courts across South Asia, Africa, and Latin America, serving as the ultimate bulwark against democratic backsliding.</p>
    `
  },
  {
    _id: "fb-post-4",
    title: "Maneka Gandhi v. Union of India: The Golden Triangle of Articles 14, 19, and 21",
    slug: "maneka-gandhi-golden-triangle-case-analysis",
    summary: "How Maneka Gandhi demolished the silos between Fundamental Rights, establishing the requirements of fairness, justice, and non-arbitrariness in Indian administrative action.",
    category: "Case Analysis",
    tags: ["Maneka Gandhi", "Golden Triangle", "Article 14", "Article 19", "Article 21"],
    published: true,
    publishedAt: "2026-02-04T10:00:00.000Z",
    createdAt: "2026-02-04T10:00:00.000Z",
    updatedAt: "2026-02-04T10:00:00.000Z",
    author: { name: "Aqsa Zam Zam Mirza Johar Baig" },
    content: `
      <h2>Breaking Free from Gopalan's Isolationist Doctrine</h2>
      <p>Prior to 1978, rights under Part III were treated as mutually exclusive compartments. The passport impoundment of Maneka Gandhi prompted the Supreme Court to reject procedural formalisms and establish substantive due process.</p>

      <h2>The Principle of Non-Arbitrariness</h2>
      <p>Justice Bhagwati established that any procedure established by law must satisfy three mandatory criteria: it must be <strong>just, fair, and reasonable</strong>, not fanciful, oppressive, or arbitrary. Any procedure failing this standard violates Article 14 (Equality) and thereby invalidates Article 21.</p>

      <h2>The Golden Triangle</h2>
      <p>Articles 14, 19, and 21 now operate as a unified trinity. An encroachment upon personal liberty must simultaneously pass the test of equality (Art. 14) and reasonable restriction (Art. 19).</p>
    `
  },
  {
    _id: "fb-post-5",
    title: "Full-Stack Software Architecture: Production Scalability with Modern Cloud",
    slug: "full-stack-software-architecture-production-scalability",
    summary: "Architecting resilient distributed systems: JWT authorization patterns, asynchronous task offloading, Redis caching, and automated AWS DevOps deployments.",
    category: "General",
    tags: ["Software Engineering", "Full Stack", "AWS", "System Design", "Cloud"],
    published: true,
    publishedAt: "2026-01-20T10:00:00.000Z",
    createdAt: "2026-01-20T10:00:00.000Z",
    updatedAt: "2026-01-20T10:00:00.000Z",
    author: { name: "Aqsa Zam Zam Mirza Johar Baig" },
    content: `
      <h2>Designing for High Concurrency</h2>
      <p>Modern applications require decoupling client request cycles from compute-heavy processing. Using asynchronous message brokers such as Celery with Redis backend ensures instantaneous response times for end users while queuing intensive analytical tasks.</p>

      <h2>Zero-Trust Authentication Blueprint</h2>
      <p>State-of-the-art web architectures leverage short-lived JSON Web Tokens (JWT) stored in HttpOnly, SameSite cookies, coupled with rotating refresh tokens and strict Role-Based Access Control (RBAC) to neutralize Cross-Site Scripting (XSS) and Request Forgery (CSRF).</p>

      <h2>Cloud Infrastructure Automation</h2>
      <p>Deploying production applications on AWS with Route 53 DNS routing, CloudFront global caching, EC2 autoscaling, and S3 secure assets provides 99.99% availability and cost efficiency.</p>
    `
  }
];
