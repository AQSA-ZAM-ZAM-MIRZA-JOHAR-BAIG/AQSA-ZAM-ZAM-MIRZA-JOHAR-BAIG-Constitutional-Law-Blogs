import Image from 'next/image';
import Link from 'next/link';
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import FAQ from '@/components/FAQ';

export default async function Home() {
  let recentPosts: any[] = [];
  let dbError = false;

  try {
    // Always connect to DB and register models on home entry
    await connectToDatabase();
    // Fetch only 3 recent published posts
    recentPosts = await Post.find({ published: true })
      .populate('author', 'name')
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .lean();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    dbError = true;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 min-h-[80vh]">
        <div className="md:w-3/5 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
            AQSA MIRZA | Law Student, Legal Researcher & Policy Enthusiast
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            BA LLB student at DR PANJABRAO DESHMUKH COLLEGE OF LAW, AMRAVATI. Passionate about constitutional law, human rights, medico-legal issues, and driving systemic change through meticulous research and litigation advocacy.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
            <p className="text-md font-medium text-blue-900 dark:text-blue-100">
              <strong>Objective:</strong> Aspiring to contribute meaningfully to NITI Aayog’s policy research and legal initiatives, leveraging extensive internship experience at institutions like the National Human Rights Commission (NHRC).
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link href="/experience" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
              View Experience
            </Link>
            <Link href="/posts" className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Read Constitutional Blogs
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
             {/* Using a placeholder SVG or user's provided photo */}
            <span className="text-gray-500 font-medium">Portrait Placeholder</span>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Excellence in Legal Studies & Research</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Top Academic Ranks</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Secured <strong>CLAT 2022 AIR 42</strong> and <strong>AILET 2022 AIR 34</strong>, demonstrating an exceptional aptitude for legal reasoning and analysis.</p>
            <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read more about AQSA MIRZA's background &rarr;</Link>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">NHRC & Policy Research</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Gained invaluable experience interning at the <strong>National Human Rights Commission</strong> and various legal research institutes focusing on policy.</p>
            <Link href="/experience" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Explore AQSA MIRZA's internships &rarr;</Link>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Moots & Advocacy</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Award-winning oralist and researcher, including Runner-up at the 1st Jadhavar National Moot Court Competition 2025.</p>
            <Link href="/moots-awards" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Moots & Awards &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">CONSTITUTIONAL LAW</span>
            <h2 className="text-3xl font-bold mt-1">Latest Insights & Articles</h2>
          </div>
          <Link href="/posts" className="text-blue-600 dark:text-blue-400 font-medium hover:underline hidden sm:block">View All Posts &rarr;</Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dbError ? (
            <div className="col-span-3 p-4 bg-red-50 text-red-800 border border-red-200 rounded-md">
              Unable to load recent articles. Please check database connection.
            </div>
          ) : recentPosts.length === 0 ? (
            <div className="col-span-3 p-10 text-center bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500">No articles available at the moment.</p>
            </div>
          ) : (
            recentPosts.map((post: any) => (
              <Link href={`/posts/${post.slug || post._id}`} key={post._id.toString()} className="group flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">{post.summary}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="font-medium">{post.author?.name || 'AQSA MIRZA'}</span>
                    <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="mt-8 text-center sm:hidden">
           <Link href="/posts" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View All Posts &rarr;</Link>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
