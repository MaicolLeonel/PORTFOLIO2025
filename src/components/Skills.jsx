import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { softSkills, hardSkills } from '../data/skillsData';
import '../styles/Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      html5: '🌐',
      css3: '🎨',
      javascript: '⚡',
      react: '⚛️',
      nodejs: '🟢',
      express: '🚀',
      mysql: '🗄️',
      git: '📦',
      github: '🐙',
      api: '🔌',
      dashboard: '📊',
      automation: '🤖'
    };
    return icons[iconName] || '💻';
  };

  return (
    <section id="habilidades" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Habilidades
        </motion.h2>
        
        <div className="skills-container">
          <motion.div
            className="skills-section soft-skills"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="skills-section-title">Habilidades Blandas</h3>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="skill-card soft-skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)" }}
                >
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="skills-section hard-skills"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="skills-section-title">Habilidades Técnicas</h3>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {hardSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="skill-card hard-skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(251, 146, 60, 0.3)" }}
                >
                  <span className="skill-icon">{getIcon(skill.icon)}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

