import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { softSkills, hardSkills } from '../data/skillsData';
import '../styles/sections/Skills.css';

const iconMap = {
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
  automation: '🤖',
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section id="habilidades" className="skills-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Habilidades"
          title="Competencias clave"
          subtitle="Balance entre habilidades blandas y técnicas para entregar productos sólidos y usables."
        />

        <div className="skills-layout">
          <motion.div
            className="skills-column"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="skills-column-header">
              <Badge tone="ghost">Habilidades blandas</Badge>
              <p>Colaboración, claridad y entrega constante.</p>
            </div>
            <motion.div className="skills-grid" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              {softSkills.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants} whileHover={{ y: -4, scale: 1.02 }}>
                  <Card className="skill-card">
                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="skills-column"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="skills-column-header">
              <Badge tone="ghost">Habilidades técnicas</Badge>
              <p>Front, backend ligero y entrega de productos escalables.</p>
            </div>
            <motion.div className="skills-grid tech-grid" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              {hardSkills.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants} whileHover={{ y: -4, scale: 1.02 }}>
                  <Card className="skill-card tech-card">
                    <span className="skill-icon">{iconMap[skill.icon] || '💻'}</span>
                    <span className="skill-name">{skill.name}</span>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
