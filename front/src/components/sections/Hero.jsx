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
  
  // Función para desplazarse a la sección de servicios
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
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
      {/* Fondo hero */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url("images/hero-kinesio.png")', // Actualizar por imagen de kinesióloga
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9) contrast(1.1) blur(2px)',
          opacity: 0.8,
          transition: 'opacity 0.8s ease'
        }} />
      </div>

      {/* Overlay para contraste */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />

      {/* Contenido principal */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
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
            margin: '0 0 30px',
            color: 'white'
          }}
        >
          <span style={{ 
            display: 'block', 
            position: 'relative',
            color: 'var(--color-primary)',
            textShadow: '0 0 20px rgba(174, 127, 255, 0.6)'
          }}>
            ALICIA EDITH PONCE
          </span>
          <span style={{ 
            display: 'block', 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 300,
            letterSpacing: '8px',
            marginTop: '15px',
            color: 'var(--color-secondary)'
          }}>KINESIOLOGÍA & FISIATRÍA</span>
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
            color: 'rgba(255, 255, 255, 0.85)'
          }}
        >
          Especialista en rehabilitación de suelo pélvico, preparación prenatal y rehabilitación post parto con un enfoque profesional y personalizado.
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
          {/* Botón para navegar a la sección de servicios */}
          <div onClick={scrollToServices}>
            <Button primary withSheen>
              Nuestros Servicios
            </Button>
          </div>

          {/* Botón para contacto por WhatsApp */}
          <a 
            href="https://wa.me/5491131456352"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button>
              Agendar Consulta
            </Button>
          </a>
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
            textTransform: 'uppercase',
            color: 'white'
          }}>Descubre</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;