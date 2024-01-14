import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CodeDexterous</div>
      <div className={styles.text}>Code Dexterous &copy; 2024</div>
    </div>
  );
};

export default Footer;
