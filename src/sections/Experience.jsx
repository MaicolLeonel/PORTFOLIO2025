import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { experienceData } from '../data/skillsData';
import '../styles/sections/Experience.css';

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

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="experience-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Trayectoria"
          title="Experiencia y formación"
          subtitle="Roles y proyectos que respaldan mi enfoque en productos rápidos y con impacto."
        />

        <motion.div className="timeline" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {experienceData.map((item) => (
            <motion.div key={item.id} className="timeline-item" variants={itemVariants}>
              <div className="timeline-marker">
                <span className="timeline-icon">{getIcon(item.type)}</span>
                <span className="timeline-line" />
              </div>
              <Card className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
