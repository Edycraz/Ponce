import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
      style={{
        padding: '40px',
        backgroundColor: 'var(--color-bg-primary)',
        position: 'relative',
        border: 'var(--border-light)',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}
      >
        <div style={{
          fontSize: '5rem',
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'rgba(174, 127, 255, 0.1)',
          fontFamily: 'Georgia, serif'
        }}>"</div>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: '30px',
          position: 'relative',
          zIndex: 1,
          fontStyle: 'italic',
          color: 'var(--color-text-secondary)'
        }}>
          {testimonial.quote}
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '15px',
            backgroundColor: 'var(--color-bg-secondary)',
            border: '2px solid var(--color-primary)',
          }}>
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.author}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            )}
          </div>
          
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: 0,
              color: 'var(--color-text-primary)'
            }}>{testimonial.author}</h4>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--color-primary)',
              margin: '5px 0 0',
              fontWeight: 500
            }}>{testimonial.position}</p>
          </div>
        </div>
        
        {/* Elemento decorativo */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '2px',
          background: 'linear-gradient(to right, rgba(174, 127, 255, 0.1), rgba(174, 127, 255, 0.5))',
          borderRadius: '2px'
        }} />
      </motion.div>
    );
  };
  
  export default TestimonialCard;