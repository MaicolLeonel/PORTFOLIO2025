import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import '../../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  // Número de WhatsApp (formato internacional sin +)
  // Ejemplo: 5493812345678 (Argentina: 54, código de área: 381, número: 2345678)
  // IMPORTANTE: Reemplaza con tu número real
  const phoneNumber = '5493812345678'; // Cambia este número por el tuyo
  const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <motion.span
        className="whatsapp-pulse"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
