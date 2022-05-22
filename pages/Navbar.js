import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/blog"}>Item</Link>
        </li>
        <li>
          <Link href={"/About"}>About</Link>
        </li>
        <li>
          <Link href={"/Contact"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
