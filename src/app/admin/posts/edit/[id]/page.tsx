import PostForm from "@/components/PostForm";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }: { params: { id: string } }) {
  await connectToDatabase();
  const post = await Post.findById(params.id).lean();
  
  if (!post) {
    notFound();
  }

  const safePost = {
    _id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    content: post.content,
    summary: post.summary,
    category: post.category,
    tags: post.tags,
    published: post.published,
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '2rem' }}>Edit Post</h1>
      <PostForm initialData={safePost} />
    </div>
  );
}
