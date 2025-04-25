// App.jsx o Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Componentes de layout
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingScreen from '../components/layout/LoadingScreen';
import CustomCursor from '../components/layout/CustomCursor';

// Secciones
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services'; // Adaptado de Areas.jsx
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery'; // Nuevo componente
import CTA from '../components/sections/CTA';

// Efectos
import ParticlesBackground from '../components/effects/ParticlesBackground';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scrollToSection = (section) => {
  gsap.to(window, {
    scrollTo: `.${section}-section`,
    duration: 1,
    ease: "power2.inOut"
  });
};

const Home = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Simulación de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Detector de eventos del mouse
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Configurar navegación por scroll
    const sections = ['hero', 'services', 'benefits', 'testimonials', 'gallery', 'cta'];
    const scrollTriggers = [];
    
    sections.forEach(section => {
      const element = document.querySelector(`.${section}-section`);
      if (element) {
        const trigger = ScrollTrigger.create({
          trigger: `.${section}-section`,
          start: "top center",
          onEnter: () => setCurrentSection(section),
          onEnterBack: () => setCurrentSection(section)
        });
        scrollTriggers.push(trigger);
      }
    });
    
    // Configurar animaciones globales
    const setupGlobalAnimations = () => {
      // Código de animaciones...
    };
    
    setupGlobalAnimations();
    window.addEventListener('mousemove', mouseMove);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clearTimeout(timer);
      
      if (scrollTriggers.length > 0) {
        scrollTriggers.forEach(trigger => trigger.kill());
      }
      
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      <CustomCursor mousePosition={mousePosition} />
      <LoadingScreen isLoading={isLoading} />
      
      <Navbar 
        currentSection={currentSection} 
        onNavClick={(section) => scrollToSection(section)} 
      />
      
      <main style={{
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        fontFamily: 'Montserrat, sans-serif',
        overflowX: 'hidden'
      }}>
        <Hero 
          currentSection={currentSection} 
          mousePosition={mousePosition} 
        />
        <Services />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;