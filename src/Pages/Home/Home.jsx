import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <div className={`${styles.homeContainer} container`}>
        <div className={styles.homeTitleContainer}>
          {/* <h1 className={styles.homeTitle}>Home</h1> */}
          <h1 className={styles.homeTitle}>
            Big Deals in a Mini Shop – Up to 20% Off!
          </h1>
          <p className={styles.heroSubtitle }>Discover beauty, gadgets, and more — all in one stylish place.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
