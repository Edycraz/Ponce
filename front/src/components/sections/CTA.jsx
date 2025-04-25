import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA = () => {
  // Función para redirigir a WhatsApp
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/5491131456352", "_blank");
  };

  return (
    <section className="cta-section" style={{
      padding: 'var(--spacing-xl) 0',
      backgroundColor: '#000',
      backgroundImage: 'url("/images/cta-bg-kinesio.jpg")', // Cambiar por imagen de kinesiología
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      textAlign: 'center'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(174, 127, 255, 0.2), transparent 60%)',
        zIndex: 1
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 30px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '30px',
          color: 'white'
        }}>
          SALUD PÉLVICA<br />
          <span style={{ color: 'var(--color-primary)' }}>Y BIENESTAR</span>
        </h2>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
          lineHeight: 1.6,
          color: 'white',
          marginBottom: '50px',
          maxWidth: '700px',
          margin: '0 auto 50px',
          fontWeight: 400
        }}>
          Agenda tu consulta personalizada y comienza tu camino hacia una mejor calidad de vida con rehabilitación especializada.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <a 
            href="https://wa.me/5491131456352" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <Button 
              primary 
              withSheen
              style={{
                padding: '15px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <i className="fab fa-whatsapp"></i>
              AGENDAR CONSULTA
            </Button>
          </a>
          
          <p style={{
            fontSize: '0.9rem',
            color: 'white',
            fontWeight: 300
          }}>
            ¿Dudas o consultas? Contáctanos en <a href="mailto:info@aliciaponce.com.ar" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>info@aliciaponce.com</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;