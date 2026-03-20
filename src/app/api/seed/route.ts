import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, secret } = await req.json();

    // In a real app, use a strong environment variable for this secret
    if (secret !== "SEED_SECRET_KEY") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json({ message: "Admin created successfully", user: { email: user.email } }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
