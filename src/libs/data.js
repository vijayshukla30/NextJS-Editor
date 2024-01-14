import { unstable_noStore as noStore } from "next/cache";
import connectDB from "./dbConfig";
import { Post } from "./models/post";
import { User } from "./models/user";

export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get posts!`);
  }
};

export const getPost = async (slug) => {
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get post with slug: ${slug}!`);
  }
};

export const getUsers = async (page, limit, query) => {
  try {
    limit = 1;
    connectDB();
    let users = [];
    let count = 0;
    if (query) {
      const regex = new RegExp(query, "i");
      count = await User.find({ username: { $regex: regex } }).count();
      users = await User.find({ username: { $regex: regex } })
        .limit(limit)
        .skip(limit * (page - 1));
    } else {
      count = await User.find().count();
      users = await User.find()
        .limit(limit)
        .skip(limit * (page - 1));
    }

    return { count, users };
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get users!`);
  }
};

export const getUser = async (userId) => {
  noStore();
  console.log("userId", userId);
  try {
    connectDB();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log("error", error);
    throw new Error(`Failed to get user with id: ${userId}!`);
  }
};
