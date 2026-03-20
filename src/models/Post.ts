import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser, User } from "./User"; // Import User model to ensure registration

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  summary: string;
  category: "Fundamental Rights" | "DPSP" | "Amendments" | "Case Analysis" | "General";
  tags: string[];
  author: mongoose.Types.ObjectId | IUser;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  summary: { type: String },
  category: { 
    type: String, 
    enum: ["Fundamental Rights", "DPSP", "Amendments", "Case Analysis", "General"],
    default: "General" 
  },
  tags: [{ type: String }],
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  published: { type: Boolean, default: false },
  publishedAt: { type: Date },
}, { timestamps: true });

export const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
