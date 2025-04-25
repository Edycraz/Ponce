import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StatCounter = ({ stat, index, delay = 0 }) => {
  const counterRef = useRef(null);
  
  useEffect(() => {
    // Obtener el elemento del contador
    const counterElement = counterRef.current;
    if (!counterElement) return;
    
    // Función para animar el contador
    const animateCounter = () => {
      const target = parseInt(stat.number) || 0;
      let current = 0;
      const increment = Math.ceil(target / 180); // Para completar aprox. en 1 segundo
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          counterElement.textContent = target;
        } else {
          counterElement.textContent = current;
        }
      }, 16); // ~60fps
      
      return () => clearInterval(timer);
    };
    
    // Verificar visibilidad para iniciar la animación
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(animateCounter, (delay || index * 0.1) * 1000);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(counterElement);
    
    return () => observer.disconnect();
  }, [stat.number, index, delay]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 || delay }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '40px 20px',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px'
      }}
    >
      <h3 style={{
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
        fontWeight: 800,
        marginBottom: '10px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span 
          ref={counterRef}
          className="stat-number" 
          data-target={stat.number}
          style={{ display: 'inline-block' }}
        >
          0
        </span>
        <span>{stat.suffix}</span>
      </h3>
      <p style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '2px',
        color: 'rgba(255, 255, 255, 0.8)',
        margin: 0
      }}>{stat.label}</p>
    </motion.div>
  );
};

export default StatCounter;