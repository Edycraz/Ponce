import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
<motion.div 
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff', // Cambiado de #000 a #ffffff
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}
>
          <motion.svg 
            width="120" 
            height="120" 
            viewBox="0 0 50 50"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <circle 
              cx="25" 
              cy="25" 
              r="20" 
              fill="none" 
              stroke="var(--color-primary)" 
              strokeWidth="3" 
              strokeDasharray="120" 
              strokeDashoffset="30" 
            />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: 'var(--color-primary)', 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              marginTop: '20px',
              fontSize: '1.2rem',
              letterSpacing: '3px'
            }}
          >
            ALICIA PONCE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;