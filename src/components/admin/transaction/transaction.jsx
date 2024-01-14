import Image from "next/image";
import styles from "./transaction.module.css";
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <div className={styles.user}>
                <Image
                  className={styles.image}
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>10/01/2014</td>
            <td>$388</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.image}
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>10/01/2014</td>
            <td>$388</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.image}
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                cancelled
              </span>
            </td>
            <td>10/01/2014</td>
            <td>$388</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
