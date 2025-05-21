import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <div className={`${styles.homeContainer} container`}>
        <div>
          <h1 className={ styles.homeTitle}>Home</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
