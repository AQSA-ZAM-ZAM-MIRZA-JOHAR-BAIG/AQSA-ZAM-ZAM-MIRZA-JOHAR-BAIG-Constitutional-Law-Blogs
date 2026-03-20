import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: "admin" | "contributor" | "reader";
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  role: { type: String, enum: ["admin", "contributor", "reader"], default: "reader" },
  createdAt: { type: Date, default: Date.now },
});

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
