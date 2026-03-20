import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await connectToDatabase();
    // support lookup by slug or ObjectId
    const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
    const post = await Post.findOne({
      $or: isObjectId ? [{ _id: id }, { slug: id }] : [{ slug: id }]
    }).populate('author', 'name email');
    
    if (!post) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
    
    // Auto update publishedAt if published just got set to true
    if (body.published && !body.publishedAt) {
      body.publishedAt = new Date();
    }

    await connectToDatabase();
    
    // Contributors can only edit their own posts
    const postToUpdate = await Post.findById(id);
    if (!postToUpdate) return NextResponse.json({ error: "Not Found" }, { status: 404 });

    if (role !== "admin" && postToUpdate.author.toString() !== (session.user as any).id) {
      return NextResponse.json({ error: "Forbidden: Not your post" }, { status: 403 });
    }

    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const role = (session.user as any)?.role;
    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    await connectToDatabase();
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
