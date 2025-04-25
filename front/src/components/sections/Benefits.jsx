import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Datos para Alicia Ponce
const BENEFITS_DATA = [
  {
    title: "EXPERIENCIA PROFESIONAL",
    description: "Especialización y formación continua en kinesiología de suelo pélvico con enfoque en salud femenina.",
    icon: "user-md",
    fullDescription: [
      {
        subtitle: "Formación Especializada",
        text: "Con una sólida formación académica y especialización en kinesiología del suelo pélvico, la Lic. Alicia Ponce se mantiene constantemente actualizada en las técnicas más avanzadas para ofrecer el mejor tratamiento a sus pacientes."
      },
      {
        subtitle: "Enfoque Integral",
        text: "Nuestra experiencia nos permite abordar cada caso desde una perspectiva integral, considerando no solo los aspectos físicos sino también los funcionales y emocionales relacionados con la salud pélvica femenina."
      },
      {
        subtitle: "Atención Personalizada",
        text: "Cada paciente es única, por eso desarrollamos planes de tratamiento completamente individualizados que respetan las necesidades específicas y objetivos de cada mujer que acude a nuestra consulta."
      }
    ],
    benefits: [
      "Conocimiento especializado en anatomía pélvica femenina",
      "Experiencia en diversas condiciones del suelo pélvico",
      "Abordaje integral pre y post parto",
      "Actualización permanente en nuevas técnicas",
      "Capacidad para personalizar tratamientos efectivos"
    ],
    faq: [
      {
        question: "¿Por qué es importante la especialización en suelo pélvico?",
        answer: "La especialización en suelo pélvico garantiza un conocimiento profundo de esta compleja área anatómica, permitiendo diagnósticos precisos y tratamientos efectivos para las diversas disfunciones que pueden afectar la calidad de vida de las mujeres."
      },
      {
        question: "¿Qué formación específica tiene la Lic. Ponce?",
        answer: "La Lic. Alicia Ponce cuenta con formación especializada en kinesiología y fisiatría, con postgrados específicos en rehabilitación de suelo pélvico, preparación prenatal y rehabilitación post parto, además de actualizaciones constantes en técnicas innovadoras."
      },
      {
        question: "¿Cómo se mantiene actualizada con las nuevas técnicas?",
        answer: "Mediante la participación regular en congresos, cursos de actualización y formación continua especializada. Además, forma parte de asociaciones profesionales de fisioterapia pélvica que garantizan el acceso a los últimos avances en el campo."
      }
    ],
    image: "/images/benefit-experience.jpg"
  },
  {
    title: "ENFOQUE MINIMALISTA",
    description: "Comunicación clara y tratamientos efectivos que priorizan tu comodidad y resultados sin complicaciones innecesarias.",
    icon: "feather",
    fullDescription: [
      {
        subtitle: "Simplicidad Efectiva",
        text: "Creemos en la simplicidad como camino hacia la efectividad. Nuestros tratamientos se centran en lo esencial, eliminando complejidades innecesarias para que puedas comprender y participar activamente en tu proceso de rehabilitación."
      },
      {
        subtitle: "Comunicación Clara",
        text: "Utilizamos un lenguaje accesible y explicaciones visuales que te permiten entender perfectamente tu condición y tratamiento, facilitando tu compromiso y participación en el proceso de recuperación."
      },
      {
        subtitle: "Resultados Visibles",
        text: "Nuestro enfoque minimalista no significa resultados mínimos. Al contrario, al concentrarnos en técnicas precisas y personalizadas, logramos cambios significativos con intervenciones eficientes y respetuosas con tu cuerpo."
      }
    ],
    benefits: [
      "Tratamientos sin complejidades innecesarias",
      "Comprensión clara de tu condición y proceso",
      "Mayor adherencia al tratamiento",
      "Ejercicios prácticos y fáciles de incorporar",
      "Educación efectiva para autocuidado"
    ],
    faq: [
      {
        question: "¿En qué consiste el enfoque minimalista en los tratamientos?",
        answer: "Nuestro enfoque minimalista consiste en utilizar las técnicas más efectivas y precisas para cada condición, eliminando procedimientos innecesarios o excesivamente complejos, facilitando así tanto la comprensión como la adherencia al tratamiento."
      },
      {
        question: "¿Significa que los tratamientos son menos efectivos?",
        answer: "Todo lo contrario. Al centrarnos en lo esencial y personalizar cada intervención, conseguimos mayor efectividad con menos complicaciones. La simplificación nos permite concentrar esfuerzos en lo que realmente funciona para cada paciente."
      },
      {
        question: "¿Cómo se aplica este enfoque en la educación del paciente?",
        answer: "Utilizamos explicaciones claras, apoyos visuales e instrucciones precisas que facilitan la comprensión y correcta ejecución de los ejercicios. Esto empodera a nuestras pacientes para participar activamente en su recuperación y mantener los beneficios a largo plazo."
      }
    ],
    image: "/images/benefit-minimal.png"
  },
  {
    title: "SALUD FEMENINA INTEGRAL",
    description: "Atención especializada en cada etapa de la vida de la mujer, desde la juventud hasta la madurez, con enfoque preventivo y terapéutico.",
    icon: "venus",
    fullDescription: [
      {
        subtitle: "Cada Etapa, Un Cuidado",
        text: "Acompañamos a las mujeres en cada etapa de su vida, desde la adolescencia hasta la madurez, adaptando nuestras técnicas y enfoques a las necesidades específicas de cada periodo vital para mantener la salud pélvica óptima."
      },
      {
        subtitle: "Prevención y Tratamiento",
        text: "No solo tratamos problemas existentes sino que educamos y trabajamos preventivamente para evitar futuras complicaciones, especialmente en momentos clave como el embarazo, postparto y menopausia."
      },
      {
        subtitle: "Bienestar Completo",
        text: "Entendemos la salud pélvica como parte integral del bienestar femenino, por eso nuestro enfoque considera aspectos físicos, funcionales y emocionales, contribuyendo a una mejor calidad de vida general."
      }
    ],
    benefits: [
      "Atención adaptada a diferentes etapas vitales",
      "Enfoque preventivo y educativo",
      "Tratamiento de diversas condiciones pélvicas",
      "Mejora de la calidad de vida general",
      "Empoderamiento mediante el conocimiento"
    ],
    faq: [
      {
        question: "¿A partir de qué edad es recomendable la evaluación del suelo pélvico?",
        answer: "La evaluación del suelo pélvico puede ser beneficiosa a cualquier edad adulta, pero especialmente a partir de los 30 años, después del embarazo, parto o cualquier cirugía pélvica, y durante la perimenopausia o menopausia. También está indicada ante cualquier síntoma como pérdidas de orina o sensación de pesadez pélvica."
      },
      {
        question: "¿Qué aspectos incluye un enfoque integral de la salud femenina?",
        answer: "Un enfoque integral considera la salud musculoesquelética, la función del suelo pélvico, factores hormonales y hábitos de vida. No tratamos síntomas aislados sino a la mujer en su totalidad, considerando cómo cada aspecto influye en su bienestar general y en la funcionalidad de su suelo pélvico."
      },
      {
        question: "¿En qué consiste la atención preventiva?",
        answer: "La atención preventiva incluye evaluaciones periódicas, educación sobre anatomía y fisiología del suelo pélvico, enseñanza de ejercicios específicos para cada etapa vital, recomendaciones sobre hábitos saludables y detección temprana de posibles alteraciones antes de que se conviertan en problemas significativos."
      }
    ],
    image: "/images/benefit-women.jpg"
  },
  {
    title: "EDUCACIÓN Y AUTONOMÍA",
    description: "Aprendizaje de técnicas y conocimientos que te empoderan para gestionar tu salud pélvica a largo plazo con independencia y confianza.",
    icon: "book-reader",
    fullDescription: [
      {
        subtitle: "Conocimiento como Herramienta",
        text: "Creemos firmemente en que el conocimiento es poder. Por eso, parte fundamental de nuestro trabajo es educarte sobre la anatomía y funcionamiento de tu cuerpo, especialmente del suelo pélvico, para que entiendas el porqué de cada ejercicio y recomendación."
      },
      {
        subtitle: "Autocuidado Guiado",
        text: "Te enseñamos técnicas específicas y ejercicios que podrás realizar de forma autónoma, proporcionándote las herramientas necesarias para continuar tu cuidado más allá de las sesiones clínicas y mantener los resultados a largo plazo."
      },
      {
        subtitle: "Empoderamiento Femenino",
        text: "Nuestro objetivo es empoderarte para que tomes control activo de tu salud pélvica, rompiendo tabúes y normalizando conversaciones necesarias sobre aspectos fundamentales de la salud femenina que a menudo se mantienen en silencio."
      }
    ],
    benefits: [
      "Comprensión profunda de tu anatomía y funcionamiento",
      "Capacidad para realizar ejercicios correctamente en casa",
      "Independencia en el mantenimiento de resultados",
      "Identificación temprana de posibles problemas",
      "Confianza y conocimiento sobre tu propio cuerpo"
    ],
    faq: [
      {
        question: "¿Qué tipo de material educativo se proporciona?",
        answer: "Ofrecemos explicaciones detalladas durante las sesiones, materiales visuales, guías de ejercicios personalizadas, recomendaciones específicas según tu condición y recursos que puedes consultar en casa para reforzar lo aprendido durante las consultas."
      },
      {
        question: "¿Cómo puedo mantener los resultados a largo plazo?",
        answer: "Te enseñamos rutinas de ejercicios específicas para realizar en casa, adaptadas a tu condición y estilo de vida. Además, aprenderás a identificar señales de alerta y a integrar hábitos saludables en tu día a día que contribuyen al mantenimiento de tu salud pélvica."
      },
      {
        question: "¿Es complicado realizar los ejercicios por mi cuenta?",
        answer: "Los ejercicios se enseñan de manera progresiva, asegurándonos de que los realizas correctamente antes de recomendarte su práctica autónoma. Utilizamos indicaciones claras y precisas, y estamos disponibles para resolver dudas incluso después de finalizar el tratamiento inicial."
      }
    ],
    image: "/images/benefit-education.jpg"
  }
];

// Componente de tarjeta separado para mejorar organización
const BenefitCard = ({ benefit, cardRef, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      ref={cardRef}
      className="benefit-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: isHovered ? '0 20px 30px rgba(0, 0, 0, 0.12)' : '0 8px 20px rgba(0, 0, 0, 0.06)',
        borderRadius: '12px',
        padding: '35px 30px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
        cursor: 'pointer',
        border: '1px solid rgba(174, 127, 255, 0.1)',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
      }}
    >
      <div 
        className="benefit-card-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)',
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 0.4s ease',
          zIndex: 0
        }}
      />
      
      <div style={{
        marginBottom: '30px',
        position: 'relative',
        zIndex: 2,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}>
        <div 
          style={{
            width: '65px',
            height: '65px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isHovered ? 'linear-gradient(135deg, rgba(175, 170, 200, 0.5), rgba(195, 190, 220, 0.5))' : 'linear-gradient(135deg, rgba(175, 170, 200, 0.25), rgba(195, 190, 220, 0.25))',
            color: '#AFAAC8',
            fontSize: '1.5rem',
            transition: 'all 0.4s ease',
            boxShadow: '0 5px 15px rgba(175, 170, 200, 0.2)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <i className={`fas fa-${benefit.icon}`}></i>
        </div>
      </div>
      
      <h3 
        style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          marginBottom: '18px',
          position: 'relative',
          zIndex: 2,
          color: '#333',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'transform 0.3s ease 0.05s',
        }}
      >
        {benefit.title}
      </h3>
      
      <p 
        style={{
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          position: 'relative',
          zIndex: 2,
          fontWeight: 400,
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'transform 0.3s ease 0.1s',
        }}
      >
        {benefit.description}
      </p>
      
      {/* Elementos decorativos */}
      <div style={{
        position: 'absolute',
        right: '-30px',
        bottom: '-30px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(174, 127, 255, 0.15) 0%, rgba(174, 127, 255, 0) 70%)',
        zIndex: 1,
        transition: 'opacity 0.3s ease',
        opacity: isHovered ? 1 : 0.7,
      }} />
      
      <div style={{
        position: 'absolute',
        left: '-20px',
        top: '-20px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(174, 127, 255, 0.12) 0%, rgba(174, 127, 255, 0) 70%)',
        zIndex: 1,
        transition: 'opacity 0.3s ease',
        opacity: isHovered ? 1 : 0.7,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '2px',
        background: 'linear-gradient(to right, rgba(174, 127, 255, 0), rgba(174, 127, 255, 0.3), rgba(174, 127, 255, 0))',
        zIndex: 1,
        opacity: isHovered ? 1 : 0.7,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Icono de "leer más" */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        zIndex: 3,
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--color-primary)',
        }}>
          SABER MÁS
          <svg width="20" height="10" viewBox="0 0 20 10" style={{ marginLeft: '10px' }}>
            <path d="M15 1L19 5L15 9" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
            <path d="M19 5H1" stroke="var(--color-primary)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  
  // Modal functions
  const openModal = (index) => {
    setSelectedBenefit(BENEFITS_DATA[index]);
    setActiveTab('description');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeModal = () => {
    setSelectedBenefit(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    if (cardsRef.current.length > 0) {
      gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    }
    
    const cardsContainer = document.querySelector(".benefits-cards-grid");
    if (cardsRef.current.length > 0 && cardsContainer) {
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardsContainer,
          start: "top 75%",
        }
      });
    }
    
    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current || 
            trigger.vars.trigger === ".benefits-cards-grid") {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="benefits-section" 
      style={{
        padding: '120px 0',
        position: 'relative',
        backgroundColor: 'var(--color-bg-tertiary)',
        overflow: 'hidden'
      }}
    >
      {/* Línea decorativa superior */}
      <div className="decorative-line-top" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, rgba(174, 127, 255, 0), rgba(174, 127, 255, 0.5), rgba(174, 127, 255, 0))'
      }} />
      
      {/* Elementos decorativos con animación */}
      <div className="decorative-bubble-1" style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(174, 127, 255, 0.1) 0%, rgba(174, 127, 255, 0) 70%)',
        zIndex: 0,
        animation: 'float 15s ease-in-out infinite'
      }} />
      
      <div className="decorative-bubble-2" style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196, 167, 255, 0.08) 0%, rgba(196, 167, 255, 0) 70%)',
        zIndex: 0,
        animation: 'float 12s ease-in-out infinite reverse'
      }} />
      
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 1
      }}>
        <SectionTitle 
          title="¿POR QUÉ" 
          highlight="ELEGIRNOS?" 
          subtitle="Nuestro enfoque integral en kinesiología de suelo pélvico nos permite ofrecerte resultados efectivos y duraderos para mejorar tu calidad de vida"
        />
        
        <div 
          className="benefits-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '35px',
            marginTop: '60px'
          }}
        >
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard 
              key={index}
              benefit={benefit}
              cardRef={el => cardsRef.current[index] = el}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      <div className="decorative-line-bottom" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, rgba(174, 127, 255, 0), rgba(174, 127, 255, 0.5), rgba(174, 127, 255, 0))'
      }} />
      
      {/* Modal de Beneficio */}
      <AnimatePresence>
        {selectedBenefit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '85vh',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabecera del modal con imagen */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${selectedBenefit.image || '/images/placeholder.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%',
                  filter: 'brightness(0.6)',
                }}/>
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))'
                }}/>
                
                {/* Botón de cierre */}
                <button
                  onClick={closeModal}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Título e icono */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '30px',
                  color: 'white',
                  zIndex: 5
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className={`fas fa-${selectedBenefit.icon}`} style={{ fontSize: '20px' }}></i>
                    </div>
                    <h2 style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      margin: 0
                    }}>{selectedBenefit.title}</h2>
                  </div>
                  <p style={{
                    fontSize: '16px',
                    maxWidth: '600px',
                    margin: 0,
                    opacity: 0.9,
                    fontWeight: '300'
                  }}>{selectedBenefit.description}</p>
                </div>
              </div>
              
              {/* Navegación de pestañas */}
              <div style={{
                display: 'flex',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 10
              }}>
                {['description', 'benefits', 'faq'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '20px 25px',
                      backgroundColor: activeTab === tab ? 'rgba(174, 127, 255, 0.08)' : 'transparent',
                      border: 'none',
                      borderBottom: activeTab === tab ? '3px solid var(--color-primary)' : '3px solid transparent',
                      fontSize: '15px',
                      fontWeight: activeTab === tab ? '600' : '500',
                      color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tab === 'description' && 'Descripción Detallada'}
                    {tab === 'benefits' && 'Beneficios'}
                    {tab === 'faq' && 'Preguntas Frecuentes'}
                  </button>
                ))}
              </div>
              
              {/* Contenido principal */}
              <div style={{
                padding: '0',
                maxHeight: 'calc(85vh - 220px - 61px)', // altura máxima - altura de imagen - altura de tabs
                overflowY: 'auto',
                scrollBehavior: 'smooth'
              }}>
                {/* Pestaña de Descripción */}
                {activeTab === 'description' && (
                  <div style={{ padding: '30px' }}>
                    {selectedBenefit.fullDescription.map((section, idx) => (
                      <div key={idx} style={{ marginBottom: '40px' }}>
                        <h3 style={{
                          fontSize: '22px',
                          color: 'var(--color-text-primary)',
                          marginBottom: '15px',
                          position: 'relative',
                          paddingBottom: '12px',
                          fontWeight: '600'
                        }}>
                          {section.subtitle}
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '40px',
                            height: '3px',
                            backgroundColor: 'var(--color-primary)'
                          }} />
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          lineHeight: '1.8',
                          color: 'var(--color-text-secondary)'
                        }}>
                          {section.text}
                        </p>
                      </div>
                    ))}
                    
                    {/* Imagen ilustrativa */}
                    <div style={{
                      marginTop: '20px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      position: 'relative',
                      height: '250px'
                    }}>
                      <img 
                        src={selectedBenefit.image || '/images/placeholder.jpg'} 
                        alt={selectedBenefit.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        padding: '60px 20px 20px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        color: 'white'
                      }}>
                        <h4 style={{ 
                          margin: '0 0 5px',
                          fontSize: '18px',
                          fontWeight: '600'
                        }}>
                          ¿Quieres saber más?
                        </h4>
                        <p style={{ 
                          margin: '0',
                          fontSize: '14px',
                          fontWeight: '300'
                        }}>
                          Agenda una consulta personalizada y descubre cómo nuestro enfoque puede mejorar tu calidad de vida.
                        </p>
                      </div>
                    </div>
                    
                    {/* Botón de acción */}
                    <div style={{
                      marginTop: '30px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <a 
                        href="https://wa.me/5491131456352" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <button style={{
                          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                          color: 'white',
                          border: 'none',
                          padding: '14px 35px',
                          borderRadius: '30px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 10px 25px rgba(174, 127, 255, 0.3)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}>
                          <i className="fab fa-whatsapp"></i>
                          Consultar por WhatsApp
                        </button>
                      </a>
                    </div>
                  </div>
                )}
                
                {/* Pestaña de Beneficios */}
                {activeTab === 'benefits' && (
                  <div style={{ padding: '30px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '30px',
                      textAlign: 'center',
                      color: 'var(--color-text-primary)'
                    }}>
                      Principales Beneficios
                    </h3>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '25px',
                      marginBottom: '40px'
                    }}>
                      {selectedBenefit.benefits.map((benefit, idx) => (
                        <div 
                          key={idx}
                          style={{
                            backgroundColor: 'rgba(245, 240, 255, 0.8)',
                            borderRadius: '12px',
                            padding: '25px',
                            border: '1px solid rgba(174, 127, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
                          }}
                        >
                          <div style={{
                            backgroundColor: 'rgba(174, 127, 255, 0.15)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <i className="fas fa-check" style={{ 
                              color: 'var(--color-primary)',
                              fontSize: '16px'
                            }}></i>
                          </div>
                          <p style={{
                            margin: '0',
                            fontSize: '16px',
                            lineHeight: '1.5',
                            fontWeight: '500',
                            color: 'var(--color-text-primary)'
                          }}>
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Testimonio destacado */}
                    <div style={{
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderRadius: '12px',
                      padding: '30px',
                      position: 'relative',
                      marginTop: '20px'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '30px',
                        fontSize: '60px',
                        color: 'var(--color-primary)',
                        opacity: '0.15',
                        fontFamily: 'Georgia, serif'
                      }}>
                        "
                      </div>
                      <p style={{
                        fontSize: '17px',
                        lineHeight: '1.8',
                        color: 'var(--color-text-secondary)',
                        fontStyle: 'italic',
                        margin: '0 0 20px',
                        position: 'relative',
                        zIndex: '1',
                        paddingLeft: '20px'
                      }}>
                        La Lic. Alicia cambió completamente mi calidad de vida después de mi embarazo. Su enfoque en {selectedBenefit.title.toLowerCase()} me ayudó a recuperar la confianza y el bienestar físico que había perdido. Los resultados son notables y su profesionalismo hace que cada sesión sea efectiva y reconfortante.
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: '#ddd',
                          marginRight: '15px',
                          backgroundImage: 'url("/images/testimonial-1.jpg")',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }} />
                        <div>
                          <p style={{
                            margin: '0',
                            fontWeight: '600',
                            color: 'var(--color-text-primary)'
                          }}>
                            María López
                          </p>
                          <p style={{
                            margin: '0',
                            fontSize: '14px',
                            color: 'var(--color-text-tertiary)'
                          }}>
                            Paciente desde 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Botón de acción */}
                    <div style={{
                      marginTop: '30px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <a 
                        href="https://wa.me/5491131456352" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <button style={{
                          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                          color: 'white',
                          border: 'none',
                          padding: '14px 35px',
                          borderRadius: '30px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 10px 25px rgba(174, 127, 255, 0.3)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}>
                          <i className="fas fa-calendar-alt"></i>
                          Agendar Consulta
                        </button>
                      </a>
                    </div>
                  </div>
                )}
                
                {/* Pestaña de Preguntas Frecuentes */}
                {activeTab === 'faq' && (
                  <div style={{ padding: '30px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '30px',
                      textAlign: 'center',
                      color: 'var(--color-text-primary)'
                    }}>
                      Preguntas Frecuentes
                    </h3>
                    
                    <div style={{ marginBottom: '40px' }}>
                      {selectedBenefit.faq.map((item, idx) => (
                        <div 
                          key={idx} 
                          style={{
                            marginBottom: '25px',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            paddingBottom: '25px'
                          }}
                        >
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: 'var(--color-text-primary)',
                            marginBottom: '10px',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              backgroundColor: 'var(--color-primary)',
                              color: 'white',
                              borderRadius: '50%',
                              fontSize: '14px',
                              marginRight: '12px',
                              flexShrink: 0
                            }}>
                              {idx + 1}
                            </span>
                            {item.question}
                          </h4>
                          <p style={{
                            fontSize: '16px',
                            lineHeight: '1.7',
                            color: 'var(--color-text-secondary)',
                            margin: '0 0 0 38px'
                          }}>
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Caja informativa */}
                    <div style={{
                      backgroundColor: 'rgba(174, 127, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '25px',
                      position: 'relative',
                      marginTop: '20px',
                      border: '1px solid rgba(174, 127, 255, 0.15)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px'
                      }}>
                        <div style={{
                          backgroundColor: 'rgba(174, 127, 255, 0.2)',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-info" style={{ 
                            color: 'var(--color-primary)',
                            fontSize: '20px'
                          }}></i>
                        </div>
                        <div>
                          <h4 style={{
                            margin: '0 0 10px',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: 'var(--color-text-primary)'
                          }}>
                            ¿Tienes más preguntas?
                          </h4>
                          <p style={{
                            margin: '0',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: 'var(--color-text-secondary)'
                          }}>
                            Estas son las preguntas más frecuentes, pero entendemos que cada caso es único. Te invitamos a agendar una consulta personalizada donde Alicia podrá evaluar tu caso específico y responder todas tus inquietudes.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Botones de acción */}
                    <div style={{
                      marginTop: '30px',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}>
                      <a 
                        href="https://wa.me/5491131456352" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <button style={{
                          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                          color: 'white',
                          border: 'none',
                          padding: '14px 30px',
                          borderRadius: '30px',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 10px 25px rgba(174, 127, 255, 0.3)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}>
                          <i className="fab fa-whatsapp"></i>
                          Consultar por WhatsApp
                        </button>
                      </a>
                      
                      <a 
                        href="tel:+NUMERO_DE_TELEFONO" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <button style={{
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          color: 'var(--color-text-primary)',
                          border: 'none',
                          padding: '14px 30px',
                          borderRadius: '30px',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}>
                          <i className="fas fa-phone-alt"></i>
                          Llamar Ahora
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Pie de modal */}
              <div style={{
                padding: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    marginRight: '10px',
                    boxShadow: '0 5px 15px rgba(174, 127, 255, 0.3)'
                  }}>
                    <span style={{ fontWeight: 'bold', color: 'white', fontSize: '14px' }}>A</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
                    Lic. Alicia Edith Ponce
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '10px'
                }}>
                  <a href="https://instagram.com/a_licponce" target="_blank" rel="noopener noreferrer" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-secondary)',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/in/alicia-edith-ponce" target="_blank" rel="noopener noreferrer" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-secondary)',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Estilos globales para animaciones */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .benefits-section {
          isolation: isolate;
        }
        
        @media (max-width: 768px) {
          .benefits-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;