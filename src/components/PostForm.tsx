"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./PostForm.module.css";

type PostFormProps = {
  initialData?: any;
};

export default function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    content: initialData?.content || "",
    summary: initialData?.summary || "",
    category: initialData?.category || "General",
    tags: initialData?.tags?.join(", ") || "",
    published: initialData?.published || false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSlugify = () => {
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    setFormData((prev) => ({ ...prev, slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const dataPayload = {
      ...formData,
      tags: formData.tags.split(",").map((t: string) => t.trim()).filter((t: string) => t),
    };

    try {
      const url = initialData ? `/api/posts/${initialData._id}` : "/api/posts";
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataPayload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save post");
      }

      router.push("/admin/posts");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData || !confirm("Are you sure you want to delete this post?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${initialData._id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete post");
      router.push("/admin/posts");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label>
          Slug 
          <button type="button" onClick={handleSlugify} className={styles.textButton}>Generate from Title</button>
        </label>
        <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className={styles.input}>
            <option value="General">General</option>
            <option value="Fundamental Rights">Fundamental Rights</option>
            <option value="DPSP">DPSP</option>
            <option value="Amendments">Amendments</option>
            <option value="Case Analysis">Case Analysis</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Tags (comma separated)</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} className={styles.input} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Summary</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange} rows={3} className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label>Content (Markdown or HTML)</label>
        <textarea name="content" value={formData.content} onChange={handleChange} rows={15} required className={styles.input} />
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="published" name="published" checked={formData.published} onChange={handleChange} />
        <label htmlFor="published">Publish Post</label>
      </div>

      <div className={styles.actions}>
        <button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? "Saving..." : "Save Post"}
        </button>
        {initialData && (
          <button type="button" onClick={handleDelete} disabled={loading} className={styles.deleteBtn}>
            Delete Post
          </button>
        )}
      </div>
    </form>
  );
}
