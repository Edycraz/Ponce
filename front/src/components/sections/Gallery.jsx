import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  
  const images = [
    {
      src: "/images/gallery-pelvic-1.jpg",
      title: "Rehabilitación de Suelo Pélvico",
      desc: "Tratamiento personalizado",
      fullDesc: "Programa integral de rehabilitación del suelo pélvico para recuperar funcionalidad y calidad de vida tras incontinencia urinaria post parto.",
      before: "/images/gallery-pelvic-1-before.jpg",
      afterDesc: "Resultados tras 10 sesiones de tratamiento combinado con ejercicios específicos, biofeedback y electroestimulación, logrando eliminar por completo los síntomas de incontinencia y mejorar la funcionalidad."
    },
    {
      src: "/images/gallery-prenatal-1.jpg",
      title: "Preparación Prenatal",
      desc: "Fortalecimiento y elasticidad",
      fullDesc: "Programa de ejercicios específicos para fortalecer la musculatura del suelo pélvico y preparar el cuerpo para el parto, previniendo complicaciones posteriores.",
      before: "/images/gallery-prenatal-1-before.jpg",
      afterDesc: "La paciente experimentó un parto más controlado y una recuperación post parto significativamente más rápida gracias a la preparación y fortalecimiento previo durante 12 semanas."
    },
    {
      src: "/images/gallery-postpartum-1.jpg",
      title: "Recuperación Post Parto",
      desc: "Cierre de diástasis abdominal",
      fullDesc: "Tratamiento de diástasis abdominal severa y debilidad de suelo pélvico tras el parto, utilizando técnicas específicas de rehabilitación y reeducación muscular.",
      before: "/images/gallery-postpartum-1-before.jpg",
      afterDesc: "Resultado después de 8 semanas de tratamiento, logrando un cierre significativo de la diástasis (de 4cm a menos de 1cm) y recuperación de la funcionalidad del suelo pélvico, eliminando las molestias y mejorando la postura."
    },
  ];

  // Función para abrir el visor de imágenes
  const openImageViewer = (index) => {
    const realIndex = showAll ? index : index;
    setSelectedImage(images[realIndex]);
    setCurrentIndex(realIndex);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  // Función para cerrar el visor
  const closeImageViewer = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Navegar a la imagen anterior
  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Navegar a la imagen siguiente
  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeImageViewer();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Navegación con teclado
    const handleKeyNav = (event) => {
      if (selectedImage) {
        if (event.keyCode === 37) { // Flecha izquierda
          prevImage(new Event('keypress'));
        } else if (event.keyCode === 39) { // Flecha derecha
          nextImage(new Event('keypress'));
        }
      }
    };
    window.addEventListener('keydown', handleKeyNav);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleKeyNav);
    };
  }, [selectedImage, currentIndex]);

  // Determinar cuántas imágenes mostrar
  const displayedImages = showAll ? images : images.slice(0, 3);

  return (
    <section className="gallery-section" style={{
      padding: '80px 0',
      backgroundColor: 'var(--color-bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px'
      }}>
        <SectionTitle 
          title="NUESTROS" 
          highlight="RESULTADOS" 
          subtitle="Casos reales que muestran nuestro compromiso con la rehabilitación efectiva y el bienestar integral femenino"
        />
        
        {/* Contenedor del grid con clases CSS */}
        <div className="gallery-grid" style={{
          marginTop: '50px'
        }}>
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                position: 'relative',
                height: '350px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openImageViewer(index)}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
              }} />
              
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                opacity: hoveredIndex === index ? 1 : 0.7,
                transition: 'opacity 0.3s ease'
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                opacity: hoveredIndex === index ? 1 : 0.8,
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  margin: '0 0 5px'
                }}>
                  {image.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {image.desc}
                </p>
              </div>
              
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                  }}>
                  <i className="fas fa-search-plus" style={{ color: 'white' }}></i>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visor de imágenes modal mejorado para móviles */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeImageViewer}
          >
            {/* Botón de cierre fijo en la parte superior */}
            <button
              onClick={closeImageViewer}
              className="close-button-fixed"
              aria-label="Cerrar"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Contenedor principal del visor con scroll interno */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Encabezado con título */}
              <div className="modal-header">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.fullDesc}</p>
              </div>

              {/* Comparación de imágenes */}
              <div className="comparison-grid">
                {/* Imagen Antes */}
                <div className="comparison-item">
                  <div className="comparison-tag before-tag">ANTES</div>
                  <div className="img-container">
                    <img 
                      src={selectedImage.before || selectedImage.src} 
                      alt={`Antes ${selectedImage.title}`}
                    />
                  </div>
                </div>
                
                {/* Imagen Después */}
                <div className="comparison-item">
                  <div className="comparison-tag after-tag">DESPUÉS</div>
                  <div className="img-container">
                    <img 
                      src={selectedImage.src} 
                      alt={`Después ${selectedImage.title}`}
                    />
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="info-container">
                <div className="info-icon">
                  <i className="fas fa-info"></i>
                </div>
                
                <div>
                  <h3>Detalles del tratamiento</h3>
                  <p>{selectedImage.afterDesc || "Este resultado se logró mediante un programa de rehabilitación personalizado adaptado a las necesidades específicas de la paciente, incorporando técnicas manuales, ejercicios terapéuticos y reeducación funcional para lograr una recuperación óptima."}</p>
                </div>
              </div>

              {/* Navegador de imágenes y CTA */}
              <div className="modal-footer">
                <div className="image-navigator">
                  {images.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => {
                        setSelectedImage(images[idx]);
                        setCurrentIndex(idx);
                      }}
                      className={`thumb-item ${idx === currentIndex ? 'active' : ''}`}
                    >
                      <img 
                        src={img.src} 
                        alt={img.title}
                      />
                    </div>
                  ))}
                </div>
                
                <a 
                  href="https://wa.me/5491131456352"
                  target="_blank"
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none' }}
                >
                  <button className="cta-button">
                    <i className="fab fa-whatsapp"></i>
                    Consultar por este tratamiento
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Controles de navegación móvil - siempre visibles */}
            <div className="mobile-navigation">
              <button onClick={prevImage} className="nav-button prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="nav-indicator">
                {currentIndex + 1} / {images.length}
              </div>
              
              <button onClick={nextImage} className="nav-button next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS para aplicar estilos responsivos */}
      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        
        @media (max-width: 991px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Estilos del modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.9);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          overflow-y: auto;
        }
        
        .close-button-fixed {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: rgba(255,255,255,0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          z-index: 1002;
          font-size: 16px;
        }
        
        .modal-content {
          width: 100%;
          max-width: 1200px;
          position: relative;
          z-index: 1001;
          background-color: rgba(30,30,30,0.9);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin-top: 60px;
          margin-bottom: 100px;
        }
        
        .modal-header {
          padding: 25px 30px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .modal-header h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0 0 10px;
        }
        
        .modal-header p {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          margin: 0;
          font-weight: 300;
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .comparison-item {
          padding: 30px;
          position: relative;
        }
        
        .comparison-item:first-child {
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        
        .comparison-tag {
          position: absolute;
          top: 40px;
          left: 40px;
          padding: 7px 15px;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 1;
          backdrop-filter: blur(5px);
        }
        
        .before-tag {
          background-color: rgba(0,0,0,0.6);
        }
        
        .after-tag {
          background-color: rgba(174, 127, 255, 0.8);
        }
        
        .img-container {
          width: 100%;
          height: 450px;
          border-radius: 8px;
          overflow: hidden;
          background-color: #1a1a1a;
        }
        
        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .info-container {
          padding: 30px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        
        .info-icon {
          background-color: rgba(174, 127, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .info-icon i {
          color: var(--color-primary);
          font-size: 20px;
        }
        
        .info-container h3 {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 10px;
        }
        
        .info-container p {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .modal-footer {
          padding: 20px 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .image-navigator {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 5px;
        }
        
        .thumb-item {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          opacity: 0.6;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .thumb-item.active {
          border: 2px solid var(--color-primary);
          opacity: 1;
        }
        
        .thumb-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .cta-button {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(174, 127, 255, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .mobile-navigation {
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          z-index: 1002;
        }
        
        .nav-button {
          background-color: rgba(255,255,255,0.15);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          backdrop-filter: blur(5px);
          font-size: 16px;
        }
        
        .nav-indicator {
          padding: 8px 16px;
          background-color: rgba(0,0,0,0.5);
          border-radius: 30px;
          color: white;
          font-size: 0.8rem;
          backdrop-filter: blur(5px);
        }
        
        /* Ajustes específicos para móviles */
        @media (max-width: 767px) {
          .modal-content {
            margin-top: 50px;
            margin-bottom: 80px;
          }
          
          .modal-header {
            padding: 20px;
          }
          
          .modal-header h2 {
            font-size: 1.4rem;
          }
          
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          
          .comparison-item {
            padding: 20px;
          }
          
          .comparison-item:first-child {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          
          .comparison-tag {
            top: 30px;
            left: 30px;
          }
          
          .img-container {
            height: 300px;
          }
          
          .info-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
          }
          
          .modal-footer {
            flex-direction: column;
            gap: 20px;
          }
          
          .image-navigator {
            width: 100%;
            justify-content: center;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;