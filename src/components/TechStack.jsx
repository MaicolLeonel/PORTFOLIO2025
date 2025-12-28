import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '../data/skillsData';
import '../styles/TechStack.css';

const TechStack = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getTechIcon = (name) => {
    const icons = {
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'Vite': '⚡',
      'Node.js': '🟢',
      'Express': '🚀',
      'MySQL': '🗄️',
      'Git': '📦',
      'GitHub': '🐙',
      'REST API': '🔌'
    };
    return icons[name] || '💻';
  };

  return (
    <section className="tech-stack" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Stack Tecnológico
        </motion.h2>
        
        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.id}
              className="tech-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 15px 40px rgba(99, 102, 241, 0.3)"
              }}
            >
              <span className="tech-icon">{getTechIcon(tech.name)}</span>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

