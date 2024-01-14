import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact Us page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
