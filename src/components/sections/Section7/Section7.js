import React, { useState, useEffect } from 'react';
import styles from './section7.module.scss';

function Section7() {
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Get the offset position of the image container
      const imageContainer = document.querySelector(`.${styles.imageContainer}`);
      const imageContainerOffset = imageContainer.offsetTop;
      const imageContainerHeight = imageContainer.offsetHeight;

      // Calculate the middle point of the image container
      const middlePoint = imageContainerOffset + imageContainerHeight / 2;

      // Change to the second section when scrolled more than the middle point
      if (scrollPosition > middlePoint - windowHeight / 1.75) {
        setShowSecondSection(true);
      } else {
        setShowSecondSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.sectionSeven}>
      <div className={styles.desktop}>
        <h1 className={styles.title}>
          Enterprise solutions to scale a winning talent strategy
        </h1>
        <div className={styles.imageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background.png`}
            alt="Section 7"
            className={`${styles.firstSectionImage}`}
          />
          <div className={`${styles.firstSectionText} ${showSecondSection ? styles.hidden : ''}`}>
            <h2>Track talent end-to-end</h2>
            <p>
              Do it all in one place, from shortlisting top candidates to project management to collaboration tools.
            </p>
            <h2>Work with talent you trust</h2>
            <p>
              Bring in talent you already know and manage their experience through one platform.
            </p>
            <h2>Secure compliance and work protection</h2>
            <p>
              Use our global classification services to protect your business from legal risks.
            </p>
            <button>Contact us</button>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background Inverted.png`}
            alt="Section 7 Inverted"
            className={`${styles.secondSectionImage} ${showSecondSection ? styles.visible : styles.hidden}`}
          />
          <div className={`${styles.secondSectionText} ${showSecondSection ? styles.visible : styles.hidden}`}>
            <h2>Governance and controls</h2>
            <p>
              Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
            </p>
            <h2>Payroll and staffing</h2>
            <p>
              Pay your distributed team with Upwork Payroll so you can focus on growing your business instead of time-consuming admin.
            </p>
            <h2>Safety and security</h2>
            <p>
              Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace.
            </p>
            <button>Contact us</button>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <h1 className={styles.titleMobile}>
            Enterprise solutions to scale a winning talent strategy
        </h1>
        <div className={styles.subText}>
          <ul>
            Track talent end-to-end
            <li>
              Do it all in one place, from shortlisting top candidates to project management to collaboration tools.
            </li>
          </ul>
          <ul>
            Work with talent you trust
            <li>
              Bring in talent you already know and manage their experience through one platform.
            </li>
          </ul>
          <ul>
            Secure compliance and work protection
            <li>
              Use our global classification services to protect your business from legal risks.
            </li>
          </ul>
          <ul>
            Governance and controls
            <li>
              Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
            </li>
          </ul>
          <ul>
            Payroll and staffing
            <li>
              Pay your distributed team with Upwork Payroll so you can focus on growing your business instead of time-consuming admin.
              <a href='/'>Learn more</a>
            </li>
          </ul>
          <ul>
            Safety and security
            <li>
              Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace. 
              <a href='/'>Learn more</a>
            </li>
          </ul>
          <button>
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section7;
