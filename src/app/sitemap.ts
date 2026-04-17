import { MetadataRoute } from 'next'
import connectToDatabase from '@/lib/db'
import { Post } from '@/models/Post'
import { SITE_URL } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // ── Static pages ──────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: `${baseUrl}/aqsa-zam-zam-mirza-johar-baig`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
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
    postPages = [];
  }

  // Keep sitemap strictly canonical: no query/facet URLs.
  return [...staticPages, ...postPages];
}
