import React from 'react';
import styles from './section4.module.scss';

function Section4() {
  return (
    <div className={styles.section4}>
      <div className={styles.section4container}>
        
        {/* First Image and Text */}
        <div className={styles.s4first}>
          <img
            src="Section 4 first.png"
            alt="s4 first"
            className={styles.s4firstimage}
          />
          <div>
            <h2 className={styles.s4firsttitle}>
              Staff a highly-skilled team, hired with intention
            </h2>
            <p className={styles.s4firstsubtitle}>
              Connect with Expert-Vetted talent, prescreened for experience on the latest technologies like OpenAI platform.
            </p>
          </div>
        </div>
        
        {/* Second Image and Text */}
        <div className={styles.s4second}>
          <img
            src="Section 4 second.png"
            alt="s4 second"
            className={styles.s4secondimage}
          />
          <div>
            <h2 className={styles.s4secondtitle}>
              Scout and hire talent in days, not months
            </h2>
            <p className={styles.s4secondsubtitle}>
              Leverage our sourcing experts to create a custom talent solution that expedites your hiring and your results.
            </p>
          </div>
        </div>

        {/* Third Image and Text */}
        <div className={styles.s4third}>
          <img
            src="Section 4 third.png"
            alt="s4 third"
            className={styles.s4thirdimage}
          />
          <div>
            <h2 className={styles.s4thirdtitle}>
              Reach the best, wherever they work, however they work
            </h2>
            <p className={styles.s4thirdsubtitle}>
              Source, manage, and pay your hybrid team with the ease and flexibility important to attract top talent.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Section4;