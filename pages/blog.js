import React, { useState, useEffect } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/dist/client/link";

//step 1: collect all file from blogdata directory
//step 2: iterate through them and display them

const blog = (props) => {
  const [blog, setBlog] = useState(props.blog);
  return (
    <div className={styles.blog}>
      {blog?.map((blogData) => {
        const { title, content, slug } = blogData;
        return (
          <div className={styles.blogItem} key={title}>
            <h2>
              <Link href={`/blogpost/${slug}`} className={styles.Link}>
                {title}
              </Link>
            </h2>
            <p>{content.slice(0, 100)}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let blog = await data.json();
  return {
    props: { blog },
  };
}

export default blog;
