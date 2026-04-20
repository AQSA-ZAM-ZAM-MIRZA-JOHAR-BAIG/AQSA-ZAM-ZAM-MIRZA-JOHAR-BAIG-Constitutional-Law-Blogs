import { MetadataRoute } from 'next'
import connectToDatabase from '@/lib/db'
import { Post } from '@/models/Post'
import { SITE_URL } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // ── Static indexable pages only (must match canonical URLs exactly) ──
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aqsa-zam-zam-mirza-johar-baig`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/moots-awards`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-01'),
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

  // ── Dynamic blog post pages ─────────────────────────────────────────
  let postPages: MetadataRoute.Sitemap = [];

  try {
    await connectToDatabase();
    // Only published posts with valid slugs and proper metadata
    const posts = await Post.find({ published: true })
      .select('slug updatedAt publishedAt createdAt title summary')
      .sort({ publishedAt: -1 })
      .lean();

    // Filter for valid, unique slugs only
    const seenSlugs = new Set<string>();
    postPages = posts
      .filter((post: any) => {
        // Ensure slug exists and is not empty
        if (!post.slug || typeof post.slug !== 'string' || post.slug.trim() === '') {
          return false;
        }
        // Prevent duplicate slugs
        if (seenSlugs.has(post.slug)) {
          console.warn(`Sitemap: Duplicate slug detected: ${post.slug}`);
          return false;
        }
        seenSlugs.add(post.slug);
        return true;
      })
      .map((post: any) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error('Sitemap: Failed to fetch posts from DB:', error);
    postPages = [];
  }

  // Deduplicate by URL (guard against duplicate slugs)
  const all = [...staticPages, ...postPages];
  const seen = new Set<string>();
  return all.filter(entry => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
