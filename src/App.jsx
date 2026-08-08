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

      {/* Global Fixed Background Mesh + Dot Grid Layer */}
      <div className="global-bg-layer" aria-hidden="true" />

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
