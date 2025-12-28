import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollToTop from './components/layout/ScrollToTop';
import WhatsAppButton from './components/layout/WhatsAppButton';
import './styles/App.css';
import './styles/global.css';
import './styles/ui.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="app-shell">
        <div className="grid-overlay" aria-hidden="true" />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
