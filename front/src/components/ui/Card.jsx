import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '', 
  ...props 
}) => {
  const cardVariants = {
    default: {
      backgroundColor: 'var(--color-bg-tertiary)',
      padding: 'var(--spacing-md)',
      position: 'relative',
      overflow: 'hidden',
      border: 'var(--border-light)'
    },
    area: {
      backgroundColor: 'var(--color-bg-tertiary)',
      position: 'relative',
      overflow: 'hidden',
      height: '400px',
      borderRadius: '0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end'
    },
    benefit: {
      backgroundColor: 'var(--color-bg-tertiary)',
      padding: 'var(--spacing-md)',
      position: 'relative',
      overflow: 'hidden',
      border: 'var(--border-light)'
    }
  };
  
  return (
    <motion.div
      className={`card card-${variant} ${className}`}
      whileHover={hover ? { translateY: -10 } : {}}
      style={cardVariants[variant]}
      {...props}
    >
      {children}
      
      {variant === 'benefit' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '0',
          backgroundColor: 'var(--color-primary)',
          transition: 'height 0.3s ease',
          zIndex: 1
        }} className="benefit-line" />
      )}
    </motion.div>
  );
};

export default Card;