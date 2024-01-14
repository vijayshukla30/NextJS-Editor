import { getPosts } from "@/libs/data";
import styles from "./posts.module.css";
import Image from "next/image";
import { deletePost } from "@/libs/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt={post.title}
              width={50}
              height={50}
            />
            <span className={styles.title}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post._id} />
            <button className={styles.deleteBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
