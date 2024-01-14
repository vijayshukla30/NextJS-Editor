import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Code Dexterous</div>
      <div className={styles.text}>&copy; All right reserved @ 2024</div>
    </div>
  );
};

export default Footer;
