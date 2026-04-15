import { MetadataRoute } from 'next'
import connectToDatabase from '@/lib/db'
import { Post } from '@/models/Post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app';

  // ── Static pages ──────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/aqsa-zam-zam-mirza-johar-baig`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/moots-awards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Static HTML redirect page (public folder)
    {
      url: `${baseUrl}/aqsa-zam-zam-mirza-johar-baig.html`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // ── Dynamic blog post pages ───────────────────────────────────────
  let postPages: MetadataRoute.Sitemap = [];

  try {
    await connectToDatabase();
    const posts = await Post.find({ published: true })
      .select('slug updatedAt publishedAt createdAt')
      .lean();

    postPages = posts.map((post: any) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Sitemap: Failed to fetch posts from DB:', error);
    // Fallback: include known seed post slugs so sitemap is never empty
    const fallbackSlugs = [
      'understanding-transformer-architectures',
      'ci-cd-pipelines-aws-mern',
      'implementing-rbac-with-jwt',
      'optimizing-postgresql-throughput',
      'microservices-vs-monolith',
    ];
    postPages = fallbackSlugs.map(slug => ({
      url: `${baseUrl}/posts/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  }

  // ── Category filter pages (indexable search facets) ────────────────
  const categories = [
    'Fundamental Rights',
    'DPSP',
    'Amendments',
    'Case Analysis',
    'General',
    'AI & ML',
    'Cloud Computing',
    'Full Stack',
    'System Design',
    'Data Engineering',
    'Security',
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${baseUrl}/posts?category=${encodeURIComponent(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...postPages, ...categoryPages];
}
