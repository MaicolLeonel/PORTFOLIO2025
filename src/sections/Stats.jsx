import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import '../styles/sections/Stats.css';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { id: 1, value: 15, suffix: '+', label: 'Proyectos Completados' },
    { id: 2, value: 10, suffix: '+', label: 'Clientes Satisfechos' },
    { id: 3, value: 3, suffix: '+', label: 'Años de Experiencia' },
    { id: 4, value: 100, suffix: '%', label: 'Compromiso' },
  ];

  return (
    <section className="stats" ref={ref}>
      <Container>
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <Card className="stat-card-inner">
                <div className="stat-value">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
