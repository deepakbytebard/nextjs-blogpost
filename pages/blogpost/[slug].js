import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogPost.module.css";

//step 1: find file corresponding to the slug
//step2 : Populate them inside the page

const slug = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log(title);
  const [blogData, setBlogData] = useState(props.blogData);

  console.log(props);

  return (
    <>
      <div className={styles.main}>
        <h1>{blogData?.title}</h1>
        <hr />
        <p>{blogData?.content}</p>
        <hr />
      </div>
      <div className={styles.author}>
        <h2>{blogData?.author}</h2>
        <h5>{blogData?.date}</h5>
      </div>
    </>
    //   )
    // })}
  );
};

export async function getServerSideProps(context) {
  console.log(context.query.slug);
  let data = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  );
  const blogData = await data.json();

  return {
    props: { blogData },
  };
}

export default slug;
