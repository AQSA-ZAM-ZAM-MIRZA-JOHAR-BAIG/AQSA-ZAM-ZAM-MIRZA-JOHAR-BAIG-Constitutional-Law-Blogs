import PostForm from "@/components/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '2rem' }}>Create New Post</h1>
      <PostForm />
    </div>
  );
}
