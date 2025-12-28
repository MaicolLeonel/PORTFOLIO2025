import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import '../styles/Hero.css';
import '../styles/Typewriter.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maicol Leonel Almirón
          </motion.h1>
          
          <motion.div
            className="hero-alias"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="alias-badge">TukCode</span>
          </motion.div>
          
          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typewriter
              texts={[
                'Desarrollador Web & Freelancer',
                'Creador de Soluciones Digitales',
                'Especialista en React & Node.js',
                'Diseñador de Experiencias Web'
              ]}
              speed={100}
              deleteSpeed={50}
              delay={2000}
            />
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Desarrollador web enfocado en crear soluciones simples, funcionales y visualmente atractivas. 
            Me gusta combinar diseño, código y automatización para ayudar a personas, negocios y proyectos 
            a tener presencia digital real.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('proyectos')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver proyectos
            </motion.button>
            
            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contacto')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 146, 60, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contactarme
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="floating-icon"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="url(#gradient1)" opacity="0.3"/>
              <path d="M100 40L140 80H120V140H80V80H60L100 40Z" fill="url(#gradient2)"/>
              <defs>
                <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#a855f7"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="60" y1="40" x2="140" y2="140">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

