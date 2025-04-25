import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import gsap from 'gsap';

const Hero = ({ currentSection, mousePosition }) => {
  const heroRef = useRef(null);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  useEffect(() => {
    // Efecto parallax en el héroe
    const handleMouseMove = (e) => {
      if (heroRef.current && currentSection === 'hero') {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        gsap.to(heroRef.current.querySelector('.hero-content'), {
          x: moveX,
          y: moveY,
          duration: 1
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentSection]);

  return (
    <section ref={heroRef} className="hero-section" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Fondo elegante */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundImage: 'url("/images/hero-bg.jpg")', // Actualizar con imagen de estética facial
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }} />
        
        {/* Overlay de color */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 158, 125, 0.05)', // Melocotón con opacidad
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/images/noise.png")',
          backgroundSize: 'cover',
          opacity: 0.05,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }}></div>
      </div>
      
      {/* Contenido principal del héroe */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          maxWidth: '1200px',
          padding: '0 30px'
        }}
      >
        <motion.h1 
          variants={fadeInUp}
          style={{
            fontSize: 'var(--font-size-hero)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: '1.1',
            margin: '0 0 30px'
          }}
        >
          <span style={{ 
            display: 'block', 
            position: 'relative',
            color: 'var(--color-primary)',
            textShadow: '0 0 20px rgba(255, 158, 125, 0.3)'
          }}>
            DRA. ANDREA GUADAGNINI
          </span>
          <span style={{ 
            display: 'block', 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 300,
            letterSpacing: '8px',
            marginTop: '15px',
            color: 'var(--color-secondary)'
          }}>ODONTOLOGÍA & ARMONIZACIÓN FACIAL</span>
        </motion.h1>
        
        <motion.div
          variants={fadeInUp}
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--color-primary)',
            margin: '30px auto'
          }}
        />
        
        <motion.p 
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 300,
            color: 'var(--color-text-secondary)'
          }}
        >
          Tratamientos personalizados que realzan tu belleza natural con un enfoque integral entre salud dental y armonía facial.
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <Button primary withSheen>
            Nuestros Servicios
          </Button>
          
          <Button>
            Agendar Consulta
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <span style={{
            width: '1px',
            height: '70px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            marginBottom: '10px'
          }} />
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '2px',
            opacity: 0.5,
            textTransform: 'uppercase'
          }}>Descubre</span>
        </motion.div>
      </motion.div>
      
      {/* Elementos decorativos flotantes */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        pointerEvents: 'none'
      }}>
        <svg width="300" height="300" style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          opacity: 0.1
        }}>
          <circle cx="150" cy="150" r="100" stroke="var(--color-primary)" strokeWidth="1" fill="none" />
        </svg>
        
        <svg width="200" height="200" style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          opacity: 0.1
        }}>
          <rect width="150" height="150" stroke="var(--color-primary)" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;