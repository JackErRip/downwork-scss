import React from 'react';
import Section1 from './components/sections/Section1/Section1';
import TrustedBy from './components/TrustedBy';
import Section2 from './components/sections/Section2/Section2';
import Section3 from './components/sections/Section3/Section3';
import Section4 from './components/sections/Section4/Section4';
import Section6 from './components/sections/Section6/Section6';
import Section5 from './components/sections/Section5/Section5';
import Navbar from './components/Navbar';
import styles from './app.module.scss';
import CustomFooter from './components/customFooter';

function App() {
  return (
    <div className={styles.bg}>
      <div className={styles.pad}>
        <Navbar />
        <div>    
          <Section1 />
          <TrustedBy />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default App;