// import { Suspense } from "react";
import Card from "@/components/admin/card/card";
import styles from "./admin.module.css";
import Transaction from "@/components/admin/transaction/transaction";
import Chart from "@/components/admin/chart/chart";
import RightBar from "@/components/admin/rightbar/rightbar";
// import AdminPosts from "@/components/admin/posts/posts";
// import AdminPostForm from "@/components/admin/postForm/postForm";

// import AdminUserForm from "@/components/admin/userForm/userForm";
const Admin = async () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Admin;
