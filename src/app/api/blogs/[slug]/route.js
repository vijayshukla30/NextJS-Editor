import connectDB from "@/libs/dbConfig";
import { Post } from "@/libs/models/post";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  console.log("slug routes", slug);
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get post with slug: ${slug}!`);
  }
};
