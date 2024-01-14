import Image from "next/image";
import styles from "./products.module.css";

const AdminProducts = async () => {
  return (
    <tr>
      <td>
        <div className={styles.product}>
          <Image
            src="/noproduct.jpg"
            alt={""}
            width={40}
            height={40}
            className={styles.productImage}
          />
          <span>Phone</span>
        </div>
      </td>
      <td>esse ea aliquam, modi qui eum.</td>
      <td>123</td>
      <td>createat</td>
      <td>12</td>
      <td>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
          <button className={`${styles.button} ${styles.delete}`}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminProducts;
