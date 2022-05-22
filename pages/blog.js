import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/dist/client/link";

//step 1: collect all file from blogdata directory
//step 2: iterate through them and display them

const blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogItem}>
        <h2>
          <Link href={"/blogpost/learn-javascript"} className={styles.Link}>
            How to Learn javaScript in 2022
          </Link>
        </h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h2>How to Learn javaScript in 2022</h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h2>How to Learn javaScript in 2022</h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h2>How to Learn javaScript in 2022</h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h2>How to Learn javaScript in 2022</h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
      <div className={styles.blogItem}>
        <h2>How to Learn javaScript in 2022</h2>
        <p>JavaScript is the language used to design logic for web</p>
      </div>
    </div>
  );
};

export default blog;
