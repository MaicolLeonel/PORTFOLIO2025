import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { projectsData } from '../data/projectsData';
import '../styles/sections/Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="proyectos" className="projects-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Proyectos"
          title="Proyectos destacados"
          subtitle="Selección de trabajos enfocados en conversión, performance y usabilidad."
        />

        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -6, scale: 1.01 }}>
              <Card className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <Badge tone="accent" className="project-type">
                    {project.type}
                  </Badge>
                </div>
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <Button as="a" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Ver demo
                    </Button>
                    <Button
                      as="a"
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      Código
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
