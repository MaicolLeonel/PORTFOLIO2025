import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/sections/Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="contact-section" ref={ref}>
      <Container>
        <SectionTitle
          eyebrow="Contacto"
          title="¿Tienes un proyecto en mente?"
          subtitle="Estoy abierto a colaborar en productos web, dashboards y automatizaciones. Escríbeme y conversemos."
        />

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <div className="contact-content">
              <div>
                <h3>Conversemos</h3>
                <p>
                  Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea que quieras
                  desarrollar, no dudes en contactarme.
                </p>
              </div>
              <div className="contact-actions">
                <Button as="a" href="mailto:contacto@tukcode.com" variant="primary">
                  Escríbeme
                </Button>
                <div className="social-links">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a href="mailto:contacto@tukcode.com" className="social-link" whileHover={{ y: -4, scale: 1.05 }}>
                    <FaEnvelope />
                    <span>Email</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
