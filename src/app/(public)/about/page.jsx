import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "About Us page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.header}>About Code Dexterous</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App Tutorial
          for Beginners
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="hero" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
