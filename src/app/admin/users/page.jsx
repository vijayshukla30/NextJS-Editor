import Search from "@/components/admin/search/search";
import styles from "./users.module.css";
import AdminUsers from "@/components/admin/users/users";
import Link from "next/link";
import Pagination from "@/components/admin/pagination/pagination";
import { getUsers } from "@/libs/data";
const Users = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const limit = searchParams?.page || 10;

  console.log("query", query);
  const { count, users } = await getUsers(page, limit, query);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search User..." />
        <Link href="/admin/users/add" className={styles.addButton}>
          Add New
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Create At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <AdminUsers users={users} />
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
