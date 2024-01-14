import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/sidebar/sidebar";
import styles from "./admin.module.css";
import Footer from "@/components/admin/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
