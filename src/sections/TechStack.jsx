import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { techStack } from '../data/skillsData';
import '../styles/sections/TechStack.css';

const techIcons = {
  HTML5: '🌐',
  CSS3: '🎨',
  JavaScript: '⚡',
  React: '⚛️',
  Vite: '⚡',
  'Node.js': '🟢',
  Express: '🚀',
  MySQL: '🗄️',
  Git: '📦',
  GitHub: '🐙',
  'REST API': '🔌',
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section className="tech-stack-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologías con las que trabajo"
          subtitle="Selección de herramientas que uso a diario para construir experiencias rápidas y mantenibles."
        />

        <motion.div className="tech-grid" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {techStack.map((tech) => (
            <motion.div key={tech.id} variants={itemVariants} whileHover={{ y: -4, scale: 1.03 }}>
              <Card className="tech-card">
                <span className="tech-icon">{techIcons[tech.name] || '💻'}</span>
                <div className="tech-meta">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-category">{tech.category}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
