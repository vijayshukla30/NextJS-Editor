import Search from "@/components/admin/search/search";
import styles from "./products.module.css";
import Link from "next/link";
import Pagination from "@/components/admin/pagination/pagination";
import AdminProducts from "@/components/admin/products/products";
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search Product..." />
        <Link href="/admin/products/add" className={styles.addButton}>
          Add New
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Create At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <AdminProducts />
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
