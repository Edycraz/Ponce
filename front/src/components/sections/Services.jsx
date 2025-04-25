import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const Services = () => {
  const services = [
    {
      title: "REHABILITACIÓN DE SUELO PÉLVICO",
      description: "Tratamientos especializados para fortalecer y recuperar la funcionalidad del suelo pélvico, mejorando la calidad de vida.",
      icon: "heartbeat",
      image: "/images/service-pelvic.jpg",
      fullDescription: [
        {
          subtitle: "Evaluación Personalizada",
          text: "Nuestro enfoque comienza con una evaluación integral para determinar el estado de tu suelo pélvico. Mediante técnicas específicas, valoramos la fuerza, resistencia y coordinación de esta importante musculatura para diseñar un plan de tratamiento totalmente adaptado a tus necesidades."
        },
        {
          subtitle: "Técnicas Avanzadas",
          text: "Utilizamos un conjunto de técnicas especializadas que incluyen ejercicios de fortalecimiento progresivo, biofeedback, electroestimulación y reeducación postural para recuperar la funcionalidad óptima del suelo pélvico y prevenir complicaciones futuras."
        },
        {
          subtitle: "Mejora de Calidad de Vida",
          text: "Nuestro objetivo es mejorar significativamente tu calidad de vida mediante la resolución de problemas como incontinencia urinaria, prolapsos, dolor pélvico crónico y disfunciones sexuales, siempre con un enfoque respetuoso y profesional."
        }
      ],
      techniques: [
        {
          name: "Ejercicios de Kegel Guiados",
          description: "Entrenamiento personalizado de los músculos del suelo pélvico con técnicas correctas de contracción y relajación para máxima efectividad."
        },
        {
          name: "Electroestimulación",
          description: "Aplicación de corrientes de baja intensidad que favorecen la contracción muscular, especialmente útil en casos de debilidad severa del suelo pélvico."
        },
        {
          name: "Biofeedback",
          description: "Técnica que permite visualizar y mejorar la contracción muscular mediante sensores que registran la actividad del suelo pélvico."
        },
        {
          name: "Reeducación Postural",
          description: "Corrección de posturas que afectan negativamente al suelo pélvico, mejorando el alineamiento corporal y la distribución de presiones."
        },
        {
          name: "Técnicas Manuales",
          description: "Tratamiento con técnicas específicas de fisioterapia manual para liberar tensiones y mejorar la funcionalidad del suelo pélvico."
        }
      ],
      benefits: [
        "Reducción o eliminación de incontinencia urinaria",
        "Prevención y tratamiento de prolapsos",
        "Disminución del dolor pélvico",
        "Mejora de la función sexual",
        "Recuperación del control y fuerza muscular"
      ],
      faq: [
        {
          question: "¿Cuándo debería buscar rehabilitación del suelo pélvico?",
          answer: "Deberías considerar la rehabilitación de suelo pélvico si experimentas pérdidas de orina al toser, reír o hacer ejercicio, sensación de pesadez vaginal, dolor durante las relaciones sexuales, o después del parto, cirugías pélvicas o menopausia."
        },
        {
          question: "¿Cuántas sesiones se necesitan habitualmente?",
          answer: "El número de sesiones varía según cada caso, pero generalmente se recomiendan entre 8 y 12 sesiones iniciales. La frecuencia y duración del tratamiento se ajustan según la evolución y los objetivos individuales de cada paciente."
        },
        {
          question: "¿Es doloroso el tratamiento?",
          answer: "Los tratamientos de rehabilitación de suelo pélvico no suelen ser dolorosos. Trabajamos con técnicas respetuosas adaptadas a tu nivel de tolerancia, explicando cada paso del proceso para que te sientas cómoda y segura en todo momento."
        }
      ]
    },
    {
      title: "PREPARACIÓN PRENATAL",
      description: "Programa especializado para preparar el cuerpo durante el embarazo, facilitar el parto y promover una recuperación óptima.",
      icon: "baby",
      image: "/images/service-prenatal.jpg",
      fullDescription: [
        {
          subtitle: "Acompañamiento Especializado",
          text: "Te acompañamos durante toda tu gestación con un programa adaptado a cada trimestre, incorporando ejercicios específicos, técnicas respiratorias y recomendaciones posturales que te ayudarán a vivir un embarazo más confortable."
        },
        {
          subtitle: "Preparación para el Parto",
          text: "Trabajamos en la preparación física y funcional de tu suelo pélvico y musculatura abdominal para el momento del parto, enseñándote técnicas de respiración, posiciones óptimas y ejercicios que facilitan el proceso del nacimiento."
        },
        {
          subtitle: "Bienestar Integral",
          text: "Nuestro enfoque no solo se centra en la preparación física, sino también en proporcionarte herramientas para gestionar el estrés, aliviar molestias del embarazo y crear un vínculo consciente con tu bebé, contribuyendo a una experiencia de maternidad más plena."
        }
      ],
      techniques: [
        {
          name: "Gimnasia Preparto",
          description: "Ejercicios adaptados a cada trimestre de embarazo que fortalecen la musculatura necesaria para el parto y mejoran la condición física general."
        },
        {
          name: "Entrenamiento de Suelo Pélvico",
          description: "Ejercicios específicos para preparar el suelo pélvico para el parto y prevenir posibles disfunciones tras el nacimiento."
        },
        {
          name: "Técnicas Respiratorias",
          description: "Aprendizaje de patrones respiratorios que facilitan el trabajo de parto y ayudan a gestionar el dolor de las contracciones."
        },
        {
          name: "Corrección Postural",
          description: "Pautas para mantener una postura adecuada durante el embarazo, aliviando molestias lumbares y pélvicas frecuentes en la gestación."
        },
        {
          name: "Ejercicios de Relajación",
          description: "Técnicas para reducir la tensión física y mental, mejorando el bienestar durante el embarazo y la conexión con el bebé."
        }
      ],
      benefits: [
        "Reducción de dolor lumbar y pélvico durante el embarazo",
        "Mejor preparación muscular para el parto",
        "Disminución de riesgo de incontinencia",
        "Control respiratorio efectivo para el trabajo de parto",
        "Recuperación post-parto más rápida"
      ],
      faq: [
        {
          question: "¿Cuándo es el mejor momento para comenzar la preparación prenatal?",
          answer: "Idealmente, la preparación prenatal puede comenzar desde el primer trimestre, aunque el momento más habitual es a partir de la semana 20. Sin embargo, nunca es tarde para empezar, incluso en las etapas finales del embarazo se pueden obtener beneficios significativos."
        },
        {
          question: "¿Es seguro realizar ejercicios durante todo el embarazo?",
          answer: "Sí, los ejercicios que realizamos están específicamente diseñados para embarazadas y se adaptan a cada trimestre y condición particular. Siempre trabajamos con el aval de tu obstetra y respetando las contraindicaciones específicas si las hubiera."
        },
        {
          question: "¿Qué beneficios tiene para el momento del parto?",
          answer: "La preparación prenatal te proporciona herramientas como el control respiratorio, conocimiento de posiciones favorables para el expulsivo, fortalecimiento adecuado y elasticidad del suelo pélvico, contribuyendo a un parto más eficiente y reduciendo el riesgo de complicaciones."
        }
      ]
    },
    {
      title: "REHABILITACIÓN POST PARTO",
      description: "Recuperación integral tras el parto, atendiendo especialmente al suelo pélvico, diástasis abdominal y bienestar general de la madre.",
      icon: "heart",
      image: "/images/service-postpartum.jpg",
      fullDescription: [
        {
          subtitle: "Evaluación Post Parto",
          text: "Realizamos una evaluación completa del estado de tu suelo pélvico, musculatura abdominal y postura tras el parto, identificando posibles diástasis, debilidades o disfunciones que requieran atención específica para una recuperación óptima."
        },
        {
          subtitle: "Recuperación Progresiva",
          text: "Diseñamos un programa de rehabilitación gradual y seguro que respeta los tiempos fisiológicos de recuperación, integrando técnicas especializadas para fortalecer el suelo pélvico, reeducar la musculatura abdominal y restaurar el equilibrio corporal."
        },
        {
          subtitle: "Adaptación a tu Rutina",
          text: "Entendemos las demandas de la maternidad, por eso nuestro enfoque práctico incorpora ejercicios y recomendaciones que puedes realizar en casa, adaptándose a tu nueva vida con el bebé y maximizando los resultados de la rehabilitación."
        }
      ],
      techniques: [
        {
          name: "Rehabilitación de Diástasis Abdominal",
          description: "Programa específico para cerrar la separación de los músculos abdominales que puede ocurrir durante el embarazo y parto."
        },
        {
          name: "Recuperación del Suelo Pélvico",
          description: "Tratamiento progresivo para restaurar la función y fuerza del suelo pélvico después del estrés del embarazo y parto."
        },
        {
          name: "Masaje de Cicatrices",
          description: "Técnica manual para mejorar la elasticidad y aspecto de cicatrices de cesárea o episiotomía, reduciendo adherencias y molestias."
        },
        {
          name: "Ejercicios Hipopresivos",
          description: "Técnica de ejercicios respiratorios que tonifica la faja abdominal profunda y beneficia al suelo pélvico sin aumentar la presión intraabdominal."
        },
        {
          name: "Reeducación Postural",
          description: "Corrección de alteraciones posturales adquiridas durante el embarazo o en la etapa de lactancia y cuidado del bebé."
        }
      ],
      benefits: [
        "Recuperación óptima del suelo pélvico",
        "Corrección de diástasis abdominal",
        "Prevención de problemas futuros",
        "Alivio de molestias y dolores posturales",
        "Recuperación de la funcionalidad corporal previa"
      ],
      faq: [
        {
          question: "¿Cuándo puedo comenzar la rehabilitación postparto?",
          answer: "La rehabilitación postparto suave puede comenzar entre las 6 y 8 semanas después del parto vaginal, y entre 8 y 10 semanas después de una cesárea, siempre con el alta de tu obstetra y adaptando las técnicas a tu estado de recuperación."
        },
        {
          question: "¿Es normal tener pérdidas de orina después del parto?",
          answer: "Aunque es común experimentar pérdidas de orina en el postparto, no se considera normal a largo plazo. La rehabilitación de suelo pélvico es altamente efectiva para recuperar el control y eliminar este problema en la mayoría de los casos."
        },
        {
          question: "¿La rehabilitación postparto es compatible con la lactancia?",
          answer: "Absolutamente. Todos nuestros tratamientos son compatibles con la lactancia materna. De hecho, trabajamos con técnicas que pueden ayudarte a encontrar posiciones más ergonómicas para amamantar, reduciendo molestias y tensiones."
        }
      ]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  // Función para abrir el modal
  const openModal = (index) => {
    setSelectedService(services[index]);
    setActiveTab('description');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="services-section" style={{
      padding: '80px 0',
      position: 'relative',
      backgroundColor: 'var(--color-bg-secondary)',
      zIndex: 10
    }}>
      {/* Línea decorativa vertical */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, rgba(174, 127, 255, 0), rgba(174, 127, 255, 0.5))'
      }} />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px'
      }}>
        <SectionTitle 
          title="NUESTROS" 
          highlight="SERVICIOS" 
          subtitle="Tratamientos especializados en kinesiología del suelo pélvico con enfoque integral para mejorar tu calidad de vida"
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                backgroundColor: '#333',
                position: 'relative',
                overflow: 'hidden',
                height: '400px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                transform: hoveredIndex === index ? 'translateY(-10px)' : 'none',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(index)}
            >
              {/* Imagen de fondo */}
              <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0
              }}>
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${service.image || '/images/placeholder.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                    filter: 'brightness(0.4) grayscale(0.2)',
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    backgroundColor: '#555'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(174, 127, 255, 0.9), rgba(196, 167, 255, 0.3) 70%, rgba(0, 0, 0, 0.1))'
                }} />
              </div>
              
              {/* Contenido */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '40px',
                width: '100%',
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(70px)',
                transition: 'transform 0.5s ease'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  position: 'relative',
                  paddingBottom: '15px',
                  color: '#ffffff'
                }}>
                  {service.title}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))'
                  }} />
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  marginBottom: '25px',
                  position: 'relative',
                  zIndex: 1,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  {service.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  letterSpacing: '1px'
                }}>
                  SABER MÁS
                  <svg width="20" height="10" viewBox="0 0 20 10" style={{ marginLeft: '10px' }}>
                    <path d="M15 1L19 5L15 9" stroke="var(--color-secondary)" strokeWidth="1.5" fill="none" />
                    <path d="M19 5H1" stroke="var(--color-secondary)" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Servicio */}
      <AnimatePresence>
        {selectedService && (
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
                  backgroundImage: `url(${selectedService.image})`,
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
                      <i className={`fas fa-${selectedService.icon}`} style={{ fontSize: '20px' }}></i>
                    </div>
                    <h2 style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      margin: 0
                    }}>{selectedService.title}</h2>
                  </div>
                  <p style={{
                    fontSize: '16px',
                    maxWidth: '600px',
                    margin: 0,
                    opacity: 0.9,
                    fontWeight: '300'
                  }}>{selectedService.description}</p>
                </div>
              </div>
              
              {/* Navegación de pestañas */}
              <div style={{
                display: 'flex',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                overflowX: 'auto'
              }}>
                {['description', 'techniques', 'benefits', 'faq'].map(tab => (
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
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {tab === 'description' && 'Descripción'}
                    {tab === 'techniques' && 'Técnicas y Terapias'}
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
                    {selectedService.fullDescription.map((section, idx) => (
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
                        src={selectedService.image} 
                        alt={selectedService.title}
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
                          Agenda una consulta personalizada y descubre cómo este tratamiento puede transformar tu bienestar integral.
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

                {/* Pestaña de Técnicas y Terapias */}
                {activeTab === 'techniques' && (
                  <div style={{ padding: '30px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '30px',
                      textAlign: 'center',
                      color: 'var(--color-text-primary)'
                    }}>
                      Nuestras Técnicas y Terapias
                    </h3>
                    
                    <div style={{ marginBottom: '40px' }}>
                    {selectedService.techniques.map((technique, idx) => (
                        <div 
                          key={idx} 
                          style={{
                            marginBottom: '30px',
                            backgroundColor: 'rgba(245, 240, 255, 0.8)',
                            borderRadius: '12px',
                            padding: '25px',
                            border: '1px solid rgba(174, 127, 255, 0.1)',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
                          }}
                        >
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: 'var(--color-text-primary)',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '30px',
                              height: '30px',
                              backgroundColor: 'var(--color-primary)',
                              color: 'white',
                              borderRadius: '50%',
                              fontSize: '14px',
                              marginRight: '12px',
                              flexShrink: 0
                            }}>
                              <i className="fas fa-spa" style={{ fontSize: '12px' }}></i>
                            </span>
                            {technique.name}
                          </h4>
                          <p style={{
                            margin: '0 0 0 42px',
                            fontSize: '15px',
                            lineHeight: '1.7',
                            color: 'var(--color-text-secondary)'
                          }}>
                            {technique.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Nota informativa */}
                    <div style={{
                      backgroundColor: 'rgba(174, 127, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '25px',
                      position: 'relative',
                      marginTop: '20px',
                      border: '1px solid rgba(174, 127, 255, 0.15)',
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
                          Enfoque personalizado
                        </h4>
                        <p style={{
                          margin: '0',
                          fontSize: '15px',
                          lineHeight: '1.6',
                          color: 'var(--color-text-secondary)'
                        }}>
                          Cada técnica se aplica de manera personalizada, adaptándose a tus necesidades específicas. En tu primera consulta, realizaremos una evaluación completa para diseñar un protocolo personalizado que combine las terapias más adecuadas para tu caso.
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
                          Consultar disponibilidad
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
                      Beneficios del tratamiento
                    </h3>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '25px',
                      marginBottom: '40px'
                    }}>
                      {selectedService.benefits.map((benefit, idx) => (
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
                    
                    {/* Testimonial destacado */}
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
                        Alicia cambió completamente mi vida después de mi embarazo. Su profesionalismo y conocimiento en {selectedService.title.toLowerCase()} me ayudaron a recuperar mi confianza y bienestar físico. Los resultados son sorprendentes y su trato cálido hace que cada sesión sea una experiencia reconfortante.
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
                            Laura Martínez
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
                      {selectedService.faq.map((item, idx) => (
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
    </section>
  );
};

export default Services;