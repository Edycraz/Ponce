import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const setupSectionAnimations = () => {
  // Animación de las áreas
  gsap.from('.area-card', {
    scrollTrigger: {
      trigger: '.areas-section',
      start: 'top 70%',
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
  
  // Animación de beneficios
  gsap.from('.benefit-card', {
    scrollTrigger: {
      trigger: '.benefits-section',
      start: 'top 70%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  });
  
  // Animación de contadores
  const statsElements = document.querySelectorAll('.stat-number');
  statsElements.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    
    gsap.to(stat, {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%'
      },
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: 'power2.out'
    });
  });
};

export const setupScrollNavigation = (sections) => {
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: `.${section}-section`,
      start: 'top center',
      onEnter: () => setCurrentSection(section),
      onEnterBack: () => setCurrentSection(section)
    });
  });
};

export const scrollToSection = (section) => {
  gsap.to(window, {
    scrollTo: `.${section}-section`,
    duration: 1
  });
};