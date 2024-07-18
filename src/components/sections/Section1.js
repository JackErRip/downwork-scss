import React from 'react';
import styles from './section1.module.scss';

function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.s1intro}>
            Bring the top 1% of 
            Upwork talent to your
            business, your way
          </h1>
          <p className={styles.fillskill}>
            Fill the skill gaps on your team with talent specialists or
            <br />build your own dream team of experts with our full-
            <br />service, customizable Enterprise platform.
          </p>
          <button className={styles.contactButton}>
            Contact Us
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="Old man using laptop.png"
            alt="old man"
            className={styles.oldman}
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
