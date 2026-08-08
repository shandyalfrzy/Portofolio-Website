import RulerBar from './components/RulerBar/RulerBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Ruler Scroll Progress Bar at very top */}
      <RulerBar />

      {/* Global Fixed Background Mesh + Dot Grid Layer */}
      <div className="global-bg-layer" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
