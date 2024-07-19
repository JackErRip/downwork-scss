import React from 'react';
import YouTubeEmbeded from '../YouTubeEmbeded';
import styles from './section2.module.scss';
import s2styles from '../s2Ye.module.scss';

function Section2() {
  return (
    <div className={styles.section2}>
      <div className={styles.container}>
        <div className={styles.yecontainer}>
          <YouTubeEmbeded classname='s2ye'  ytLink={`https://www.youtube.com/embed/EE-xtCF3T94`} />
        </div>
        <h1 className={styles.howitworks}>
          How it works
        </h1>
        <ol className={styles.licontainer}>  
          <li className={styles.desctext1}>1. Tell us about your project and the skills you're looking for.</li>
          <li className={styles.desctext2}>2. Instantly browse qualified talent with proven track records.</li>
          <li className={styles.desctext3}>3. Hire quickly and securely with our customizable tools.</li>
        </ol>
      </div>
      <div className={styles.yecontainerlandscape}>
          <YouTubeEmbeded classname='s2ye'  ytLink={`https://www.youtube.com/embed/EE-xtCF3T94`} />
        </div>
    </div>
  );
}

export default Section2;