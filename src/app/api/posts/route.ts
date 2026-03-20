import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const publishedOnly = searchParams.get("published") === "true";
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    
    let query: any = {};
    if (publishedOnly) query.published = true;
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }

    const posts = await Post.find(query).populate('author', 'name email').sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any)?.role;
    if (role !== "admin" && role !== "contributor") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    await connectToDatabase();

    const post = await Post.create({
      ...body,
      author: (session.user as any).id,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
