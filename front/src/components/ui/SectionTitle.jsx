import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  highlight,
  subtitle,
  alignment = 'center',
  className = ''
}) => {
  return (
    <div
      className={`section-title ${className}`}
      style={{
        textAlign: alignment,
        marginBottom: 'var(--spacing-lg)',
        position: 'relative'
      }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 800,
          marginBottom: 'var(--spacing-sm)',
          position: 'relative',
          display: alignment === 'center' ? 'inline-block' : 'block',
          letterSpacing: '1px'
        }}
      >
        {title} {highlight && <span style={{ color: 'var(--color-primary)' }}>{highlight}</span>}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: alignment === 'center' ? '60%' : '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '0',
            height: '3px',
            backgroundColor: 'var(--color-primary)'
          }} 
        />
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: 'var(--font-size-md)',
            maxWidth: '700px',
            margin: alignment === 'center' ? '30px auto 0' : '30px 0 0',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            fontWeight: 300
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;