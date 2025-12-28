import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '../data/skillsData';
import '../styles/Experience.css';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'project':
        return '🚀';
      case 'education':
        return '🎓';
      default:
        return '📝';
    }
  };

  return (
    <section className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Experiencia y Formación
        </motion.h2>
        
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{getIcon(item.type)}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

