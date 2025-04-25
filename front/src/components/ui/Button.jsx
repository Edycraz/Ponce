import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  primary = false,
  className = '',
  onClick,
  withSheen = false,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: primary ? '0 0 25px rgba(174, 127, 255, 0.6)' : 'none'
      }}
      whileTap={{ scale: 0.95 }}
      className={`btn ${primary ? 'btn-primary' : 'btn-secondary'} ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: primary ? 'var(--color-primary)' : 'transparent',
        color: primary ? 'white' : 'var(--color-text-primary)',
        padding: '18px 35px',
        fontSize: 'var(--font-size-sm)',
        fontWeight: '600',
        letterSpacing: '2px',
        border: primary ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '30px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        ...props.style
      }}
      {...props}
    >
      {children}
      
      {withSheen && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '20px',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.3)',
          transform: 'skewX(-20deg) translateX(-120px)',
          animation: 'sheen 3s infinite'
        }} />
      )}
      
      {!primary && (
        <span 
          className="btn-line" 
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '1px',
            backgroundColor: 'var(--color-primary)',
            transition: 'width 0.3s ease'
          }} 
        />
      )}
    </motion.button>
  );
};

export default Button;