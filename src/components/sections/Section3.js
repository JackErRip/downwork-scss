import React from 'react';
import styles from './section3.module.scss';

function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          From small projects to complex initiatives, we can help
        </h1>
        <div className={styles.subtext}>
          <ul className={styles.subtextul}>
            <li className={styles.li1}>
                Move projects across the finish line
            </li>
            <li className={styles.li2}>
                Adapt and expand your workforce
            </li>
            <li className={styles.li3}>
                Add more talent to your bench
            </li>
            <li className={styles.li4}>
                Delegate a little or a lot to our team
            </li>
          </ul>
        </div>
        {/* <div className={styles.details}> */}
            <ul className={styles.sbul}>
                <li className={styles.sbli1}>
                    Complete tasks and short-term projects with pros who can meet your business needs.
                </li>
                <li className={styles.sbli2}>
                    Scale your team to get support for projects with multiple deliverables anytime.
                </li>
                <li className={styles.sbli3}>
                    Integrate new roles into your team to accomplish core company objectives. 
                </li>
                <li className={styles.sbli4}>
                    Explore a variety of managed solutions to help you deliver complex projects.
                </li>     
            </ul>
        {/* </div> */}
        <div className={styles.mscreen}>
            <ul className={styles.mscreen1}>
                Move projects across the finish line
                <li className={styles.mscreenli1}>
                    Complete tasks and short-term projects with pros who can meet your business needs.
                </li>
            </ul>
            <ul className={styles.mscreen2}>
                Adapt and expand your workforce
                <li className={styles.mscreenli2}>
                    Scale your team to get support for projects with multiple deliverables anytime.
                </li>
            </ul>
            <ul className={styles.mscreen3}>
                Add more talent to your bench
                <li className={styles.mscreenli3}>
                    Integrate new roles into your team to accomplish core company objectives. 
                </li>
            </ul>
            <ul className={styles.mscreen4}>
                Delegate a little or a lot to our team
                <li className={styles.mscreenli4}>
                    Explore a variety of managed solutions to help you deliver complex projects.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Section3;
