import React from 'react';
import YouTubeEmbeded from '../../YouTubeEmbeded';
import styles from './section5.module.scss';

function Section5() {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.container}>
        <h1>
          Get ahead with AI
        </h1>
        <h2>
          Partner with independent talent on Upwork to help AI work for your business
        </h2>
        <div>
          <p>
            Build a custom chatbot
          </p>
          <p>
            Label your training data
          </p>
          <p>
            Develop your own AI model
          </p>
          <p>
            And more with our Expert-Vetted Talent
          </p>
        </div>
      </div>
      <div>
        <YouTubeEmbeded ytLink="https://www.youtube.com/embed/GtL1huin9EE" />
      </div>
    </div>
  );
}

export default Section5;