import connectDB from "@/libs/dbConfig";
import { Post } from "@/libs/models/post";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get posts!`);
  }
};
