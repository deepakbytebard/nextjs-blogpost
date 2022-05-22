import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/dist/client/link";

const blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogItem}>
        <h3>
          <Link href={"/blogpost/learn-javascript"} className={styles.Link}>
            How to Learn javaScript in 2022
          </Link>
        </h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn javaScript in 2022</h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn javaScript in 2022</h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn javaScript in 2022</h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn javaScript in 2022</h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h3>How to Learn javaScript in 2022</h3>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
    </div>
  );
};

export default blog;
