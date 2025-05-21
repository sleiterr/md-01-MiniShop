import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section>
      <div className={`${styles.aboutContainer} container`}>
        <div>
          <h2 className={styles.aboutTitle}>About</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
