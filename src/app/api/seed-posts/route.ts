import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import { User } from "@/models/User";
import { Post } from "@/models/Post";

const dummyPosts = [
  {
    title: "Understanding Transformer Architectures in LLMs",
    slug: "understanding-transformer-architectures",
    content: "The Transformer architecture has revolutionized NLP. By using self-attention mechanisms, models can process sequences in parallel, capturing long-range dependencies efficiently. This architectural shift from RNNs to Transformers enabled the development of state-of-the-art models like GPT and BERT.",
    summary: "A technical walkthrough of self-attention mechanisms and the shift from sequential to parallel processing in AI.",
    category: "AI & ML",
    tags: ["Generative AI", "NLP", "Neural Networks"],
    published: true,
  },
  {
    title: "CI/CD Pipelines on AWS: Automating the MERN Lifecycle",
    slug: "ci-cd-pipelines-aws-mern",
    content: "Implementing Continuous Integration and Continuous Deployment (CI/CD) on AWS using CodePipeline, CodeBuild, and CodeDeploy ensures that MERN applications are tested and deployed automatically. This reduces manual errors and improves the velocity of production releases.",
    summary: "Architecting automated deployment workflows for high-availability full-stack applications.",
    category: "Cloud Computing",
    tags: ["AWS", "DevOps", "MERN Stack"],
    published: true,
  },
  {
    title: "Implementing Role-Based Access Control (RBAC) with JWT",
    slug: "implementing-rbac-with-jwt",
    content: "Securing modern web applications requires robust authentication and authorization. Combining JSON Web Tokens (JWT) with RBAC allows fine-grained permission management. Proper security measures like HttpOnly cookies and token rotation are essential for production security.",
    summary: "Best practices for securing Node.js and React applications using tiered permissions.",
    category: "Security",
    tags: ["JWT", "Node.js", "RBAC", "Authentication"],
    published: true,
  },
  {
    title: "Optimizing PostgreSQL for High-Throughput Systems",
    slug: "optimizing-postgresql-throughput",
    content: "Database performance is critical for scalable systems. Techniques like indexing, query optimization, and connection pooling significantly improve PostgreSQL performance. Using tools like EXPLAIN ANALYZE helps identify bottlenecks and improve execution plans.",
    summary: "Practical strategies for database performance tuning in data-intensive applications.",
    category: "Data Engineering",
    tags: ["SQL", "PostgreSQL", "Database Optimization"],
    published: true,
  },
  {
    title: "Microservices vs Monolith: Choosing the Right Architecture",
    slug: "microservices-vs-monolith",
    content: "Choosing between a monolith and microservices depends on the project scope and team size. While monoliths are easier to develop initially, microservices offer superior scalability and fault isolation for large distributed systems.",
    summary: "An architectural comparison of system patterns for modern software engineering.",
    category: "System Design",
    tags: ["Microservices", "Scalability", "Architecture"],
    published: true,
  }
];

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    // Find any user to be the author
    let user = await User.findOne();
    
    // If no user exists, create a dummy admin
    if (!user) {
      user = await User.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "hashedpassword", // Not a real password
        role: "admin",
      });
    }

    // Prepare posts with the user ID as author and add a publish date
    const postsToInsert = dummyPosts.map(post => ({
      ...post,
      author: user._id,
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Random date in the past
    }));

    // Clear existing posts (optional, keeping it clean)
    // await Post.deleteMany({});

    // Bulk insert the dummy data
    await Post.insertMany(postsToInsert);

    return NextResponse.json({ message: "Successfully seeded " + postsToInsert.length + " posts!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to seed posts" }, { status: 500 });
  }
}
