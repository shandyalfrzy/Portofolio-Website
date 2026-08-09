import { useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import RulerBar from './components/RulerBar/RulerBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Full-Screen Preloader / Intro Animation (Plays ONCE per page load) */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Ruler Scroll Progress Bar at very top */}
      <RulerBar />

      {/* Global Fixed Sky Background + Animated Clouds + Low-Opacity Dot Grid Layer */}
      <div className="global-bg-layer" aria-hidden="true">
        <svg className="cloud cloud-1a" viewBox="0 0 280 140" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="100" rx="70" ry="40" opacity="0.9"/>
          <ellipse cx="140" cy="80" rx="90" ry="55" opacity="0.95"/>
          <ellipse cx="200" cy="95" rx="80" ry="45" opacity="0.9"/>
          <ellipse cx="110" cy="70" rx="60" ry="40" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-1b" viewBox="0 0 280 140" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="100" rx="70" ry="40" opacity="0.9"/>
          <ellipse cx="140" cy="80" rx="90" ry="55" opacity="0.95"/>
          <ellipse cx="200" cy="95" rx="80" ry="45" opacity="0.9"/>
          <ellipse cx="110" cy="70" rx="60" ry="40" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-2a" viewBox="0 0 220 110" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="75" rx="55" ry="35" opacity="0.85"/>
          <ellipse cx="120" cy="60" rx="70" ry="45" opacity="0.9"/>
          <ellipse cx="170" cy="72" rx="50" ry="32" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-2b" viewBox="0 0 220 110" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="75" rx="55" ry="35" opacity="0.85"/>
          <ellipse cx="120" cy="60" rx="70" ry="45" opacity="0.9"/>
          <ellipse cx="170" cy="72" rx="50" ry="32" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-3a" viewBox="0 0 320 150" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="110" rx="75" ry="40" opacity="0.88"/>
          <ellipse cx="160" cy="85" rx="100" ry="60" opacity="0.92"/>
          <ellipse cx="250" cy="100" rx="70" ry="45" opacity="0.88"/>
          <ellipse cx="130" cy="75" rx="55" ry="35" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-3b" viewBox="0 0 320 150" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="110" rx="75" ry="40" opacity="0.88"/>
          <ellipse cx="160" cy="85" rx="100" ry="60" opacity="0.92"/>
          <ellipse cx="250" cy="100" rx="70" ry="45" opacity="0.88"/>
          <ellipse cx="130" cy="75" rx="55" ry="35" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-4a" viewBox="0 0 200 100" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="65" rx="50" ry="30" opacity="0.82"/>
          <ellipse cx="110" cy="50" rx="65" ry="42" opacity="0.88"/>
          <ellipse cx="160" cy="62" rx="40" ry="28" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-4b" viewBox="0 0 200 100" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="65" rx="50" ry="30" opacity="0.82"/>
          <ellipse cx="110" cy="50" rx="65" ry="42" opacity="0.88"/>
          <ellipse cx="160" cy="62" rx="40" ry="28" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-5a" viewBox="0 0 260 130" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="90" rx="60" ry="38" opacity="0.85"/>
          <ellipse cx="130" cy="70" rx="85" ry="52" opacity="0.9"/>
          <ellipse cx="200" cy="85" rx="60" ry="38" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-5b" viewBox="0 0 260 130" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="90" rx="60" ry="38" opacity="0.85"/>
          <ellipse cx="130" cy="70" rx="85" ry="52" opacity="0.9"/>
          <ellipse cx="200" cy="85" rx="60" ry="38" opacity="0.85"/>
        </svg>
      </div>

      <Navbar />
      <main>
        <Hero isLoaded={!isLoading} />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
