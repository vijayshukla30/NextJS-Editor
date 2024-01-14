import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
// import { getPosts } from "@/libs/data";

const getPosts = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Something went wrong`);
  }
  return res.json();
};

export const metadata = {
  title: "Blog",
  description: "Blog Page for Code Dexterous",
};

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
