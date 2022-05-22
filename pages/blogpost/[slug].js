import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.main}>
      <h1> {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias deleniti
        vero labore, nihil voluptatem itaque mollitia eius ex aut asperiores
        officia. Sit sequi nulla ipsam perferendis adipisci temporibus quam
        consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Blanditiis omnis quibusdam, nam sapiente eos asperiores labore obcaecati
        iusto? Beatae, quasi? Repellat, nesciunt quo et quidem sunt asperiores
        voluptates natus ea!
      </div>
    </div>
  );
};

export default slug;
