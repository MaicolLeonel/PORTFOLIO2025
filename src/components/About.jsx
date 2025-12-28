import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';
import profilePhoto from '../fotos/perfil.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="sobre-mi" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Sobre mí
        </motion.h2>
        
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image">
              <img src={profilePhoto} alt="Maicol Leonel Almirón - TukCode" className="profile-photo" />
            </div>
          </motion.div>
          
          <motion.div className="about-text" variants={itemVariants}>
            <motion.div className="about-block" variants={itemVariants}>
              <h3>¿Quién soy?</h3>
              <p>
                Soy Maicol Leonel Almirón, desarrollador web y freelancer apasionado por crear 
                soluciones digitales que marquen la diferencia. Con base en Tucumán, Argentina, 
                me dedico a transformar ideas en realidad a través del código.
              </p>
            </motion.div>
            
            <motion.div className="about-block" variants={itemVariants}>
              <h3>¿En qué estoy trabajando?</h3>
              <p>
                Actualmente trabajo como freelancer desarrollando aplicaciones web, landing pages 
                y dashboards para diversos clientes. Además, invierto tiempo en proyectos personales 
                que me permiten experimentar con nuevas tecnologías y mejorar constantemente mis habilidades.
              </p>
            </motion.div>
            
            <motion.div className="about-block" variants={itemVariants}>
              <h3>¿Qué tipo de proyectos busco?</h3>
              <p>
                Estoy interesado en proyectos de desarrollo web, desde sitios corporativos hasta 
                aplicaciones complejas. Me especializo en crear dashboards interactivos, e-commerce, 
                landing pages atractivas y automatizaciones que optimicen procesos. Busco proyectos 
                que me desafíen y me permitan crecer profesionalmente.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

