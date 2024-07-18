import './App.css'; // Ensure this file includes the CSS to handle body styles and other base styles
import Section1 from './components/sections/Section1';
import TrustedBy from './components/TrustedBy';
import Section2 from './components/sections/Section2';
import YouTubeEmbeded from './components/YouTubeEmbeded';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section6 from './components/sections/Section6';
import Section5 from './components/sections/Section5';
// import Section7 from './components/sections/Section7';
import Navbar from './components/Navbar';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.bg}>
      <div className={styles.pad}>
          <Navbar />
          
        <div>    
          
          <Section1 />
          {/* <TrustedBy />
          
          Container for Section2 and YouTubeEmbeded
        
          
              <Section2 />
            
            
            
              <YouTubeEmbeded  ytLink={`https://www.youtube.com/embed/EE-xtCF3T94`} />
            
          
          
          <Section3 />
          <Section4 />
          <Section5 />
          
          <Section6 />  */}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
