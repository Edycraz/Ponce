import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const cursorRing = document.getElementById('cursor-ring');
    
    // Añadir listener para detectar elementos con clase 'hoverable'
    const handleHoverables = () => {
      document.querySelectorAll('a, button, .btn, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-grow');
          cursorRing.classList.add('cursor-ring-shrink');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-grow');
          cursorRing.classList.remove('cursor-ring-shrink');
        });
      });
    };
    
    // Iniciar detección de elementos interactivos
    handleHoverables();
    
    // Re-ejecutar cuando se cargue completamente el DOM
    window.addEventListener('load', handleHoverables);
    
    return () => {
      window.removeEventListener('load', handleHoverables);
    };
  }, []);

  return (
    <>
      <motion.div
        id="cursor-ring"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
        style={{
          position: 'fixed',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '1px solid var(--color-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.5,
          mixBlendMode: 'difference'
        }}
      />
      
      <motion.div
        id="custom-cursor"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.15
        }}
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      
      <style>
        {`
          body {
            cursor: none;
          }
          
          .cursor-grow {
            transform: scale(1.5) !important;
            background-color: white !important;
            opacity: 0.8;
          }
          
          .cursor-ring-shrink {
            transform: translate(calc(${mousePosition.x}px - 25px), calc(${mousePosition.y}px - 25px)) scale(1.5) !important;
            opacity: 0 !important;
          }
          
          @media (max-width: 768px) {
            #custom-cursor, #cursor-ring {
              display: none;
            }
            
            body {
              cursor: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;