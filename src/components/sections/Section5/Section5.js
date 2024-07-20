import React from 'react';
import YouTubeEmbeded from '../../YouTubeEmbeded';
import styles from './section5.module.scss';

function Section5() {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Get ahead with AI
        </h1>
        <h2 className={styles.subtitle}>
          Partner with independent talent on Upwork to help AI work for your business
        </h2>
        <YouTubeEmbeded classname="s5yemobile" ytLink="https://www.youtube.com/embed/GtL1huin9EE" />
        <div className={styles.subtext}>
          <p className={styles.ptextspace}>
            Build a custom chatbot
          </p>
          <p className={styles.ptextspace}>
            Label your training data
          </p>
          <p className={styles.ptextspace}>
            Develop your own AI model
          </p>
          <p className={styles.ptextspace}>
            And more with our Expert-Vetted Talent
          </p>
        </div>
      </div>
      <div>
        <YouTubeEmbeded classname="s5ye" ytLink="https://www.youtube.com/embed/GtL1huin9EE" />
      </div>
    </div>
  );
}

export default Section5;