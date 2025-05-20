// Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={ styles.nav}>
        <div className={styles.logoItem}>
          <p>Logo</p>
        </div>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/products">
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
