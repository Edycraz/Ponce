import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../../utils/gsapUtils';

const Navbar = ({ currentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  // Definimos las secciones principales
  const mainSections = [
    { id: 'hero', label: 'Inicio', icon: '🏠' },
    { id: 'services', label: 'Servicios', icon: '✨' },
    { id: 'benefits', label: 'Por Qué Elegirnos', icon: '🔍' },
    { id: 'testimonials', label: 'Testimonios', icon: '💬' },
    { id: 'gallery', label: 'Resultados', icon: '📸' },
    { id: 'cta', label: 'Contacto', icon: '✉️' }
  ];
  
  // Efecto para detectar scroll y tamaño de pantalla
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      {/* Overlay del menú móvil */}
      <AnimatePresence>
        {menuOpen && (
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
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 90
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar principal */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.1)' : 'none',
          padding: scrolled ? '10px 0' : '20px 0',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link to="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              zIndex: 101 // Asegura que el logo siempre esté encima
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'var(--color-primary)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '15px',
                boxShadow: '0 5px 15px rgba(174, 127, 255, 0.3)',
                fontSize: '18px',
                color: 'white'
              }}
            >
              <span style={{ fontWeight: 'bold' }}>A</span>
            </motion.div>
            
            <motion.span
              style={{
                fontWeight: '700',
                fontSize: isMobile ? '16px' : '18px', // Ajusta tamaño para móviles
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: isMobile ? 'none' : 'block' // Oculta el texto en pantallas muy pequeñas
              }}
            >
              Lic. Alicia Edith Ponce
            </motion.span>
          </Link>

          {/* Navegación - solo visible en pantallas grandes */}
          <div className="desktop-menu" style={{
            display: isMobile ? 'none' : 'flex',
            gap: '10px',
            margin: '0 20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {mainSections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(section.id)}
                style={{
                  padding: '10px 15px',
                  borderRadius: '30px',
                  backgroundColor: currentSection === section.id ? 'var(--color-primary)' : 'transparent',
                  color: currentSection === section.id ? 'white' : 'var(--color-text-secondary)',
                  fontWeight: '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>{section.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Botones de acción */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            {/* Botón de WhatsApp mínimo para móvil */}
            {isMobile && (
              <a href="https://wa.me/5491131456352" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(174, 127, 255, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9821 0.648214 16.0179 1.67678 17.7857L0 24L6.36964 22.3554C8.07857 23.2982 10.0125 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2214 21.7875 8.48571 21.3107 6.98036 20.4107L6.62143 20.1964L2.86607 21.1607L3.84643 17.4964L3.61071 17.1214C2.61964 15.5625 2.10536 13.7518 2.10536 11.8929C2.10536 6.44464 6.54643 2.00357 12 2.00357C14.6411 2.00357 17.1214 3.02143 18.9857 4.88571C20.85 6.75 21.9964 9.23036 21.9964 11.8982C21.9964 17.3464 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7786 14.7375C13.6071 14.9357 13.4304 14.9625 13.1357 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.7375 10.7143 9.33214 10.7518 9.88393 9.64821C9.98036 9.45 9.93214 9.27857 9.85893 9.12857C9.78571 8.97857 9.20357 7.51607 8.95714 6.92143C8.71607 6.34286 8.46964 6.42143 8.28929 6.41071C8.11786 6.4 7.91964 6.4 7.72143 6.4C7.52321 6.4 7.2 6.47321 6.92679 6.76786C6.65357 7.0625 5.88214 7.78036 5.88214 9.24286C5.88214 10.7054 6.95357 12.1196 7.09821 12.3179C7.24821 12.5161 9.19286 15.5518 12.2143 16.8268C14.0625 17.6143 14.8071 17.6786 15.7607 17.5339C16.3393 17.4429 17.5125 16.8054 17.7589 16.1054C18.0054 15.4054 18.0054 14.8107 17.9321 14.7375C17.8643 14.6536 17.6661 14.5339 17.4161 14.3839Z" />
                  </svg>
                </motion.button>
              </a>
            )}

            {/* Botón de menú móvil */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-button"
              style={{
                backgroundColor: menuOpen ? 'var(--color-primary)' : 'white',
                border: 'none',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 101
              }}
            >
              <div style={{
                position: 'relative',
                width: '20px',
                height: '20px',
              }}>
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 8 : 0
                  }}
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: 0,
                    width: '20px',
                    height: '2px',
                    backgroundColor: menuOpen ? 'white' : 'var(--color-primary)',
                    borderRadius: '4px',
                    transformOrigin: 'center'
                  }}
                />
                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1
                  }}
                  style={{
                    position: 'absolute',
                    top: '9px',
                    left: 0,
                    width: '20px',
                    height: '2px',
                    backgroundColor: menuOpen ? 'white' : 'var(--color-primary)',
                    borderRadius: '4px'
                  }}
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -8 : 0
                  }}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    left: 0,
                    width: '20px',
                    height: '2px',
                    backgroundColor: menuOpen ? 'white' : 'var(--color-primary)',
                    borderRadius: '4px',
                    transformOrigin: 'center'
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              position: 'fixed',
              top: scrolled ? '64px' : '84px', // Ajusta dinámicamente según altura de navbar
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.18)',
              zIndex: 95,
              padding: '20px',
              maxHeight: 'calc(100vh - 84px)', // Evita que exceda la altura de la pantalla
              overflowY: 'auto'
            }}
          >
            {/* Secciones */}
            <div>
              <h3 style={{ margin: '10px 0', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '600' }}>
                SECCIONES
              </h3>
              
              {mainSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => {
                    scrollToSection(section.id);
                    setMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 15px',
                    borderRadius: '10px',
                    margin: '6px 0',
                    backgroundColor: currentSection === section.id ? 'rgba(174, 127, 255, 0.1)' : 'transparent',
                    cursor: 'pointer',
                    border: currentSection === section.id ? '1px solid rgba(174, 127, 255, 0.2)' : '1px solid transparent',
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(174, 127, 255, 0.05)',
                    x: 5
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: currentSection === section.id ? 'var(--color-primary)' : 'rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '12px',
                    fontSize: '16px',
                    color: currentSection === section.id ? 'white' : 'var(--color-text-secondary)'
                  }}>
                    {section.icon}
                  </div>
                  <div style={{
                    fontWeight: '500',
                    fontSize: '15px',
                    color: currentSection === section.id ? 'var(--color-primary)' : 'var(--color-text-primary)'
                  }}>
                    {section.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Información de contacto */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: 'rgba(174, 127, 255, 0.05)',
              borderRadius: '12px'
            }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '15px',
                color: 'var(--color-text-secondary)'
              }}>
                CONTACTO
              </h4>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px' 
              }}>
                <i className="fab fa-whatsapp" style={{ 
                  color: 'var(--color-primary)', 
                  marginRight: '10px' 
                }}></i>
                <span style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px' 
                }}>
                  <a href="https://wa.me/5491131456352" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    WhatsApp para turnos
                  </a>
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '10px' 
              }}>
                <i className="fas fa-phone-alt" style={{ 
                  color: 'var(--color-primary)', 
                  marginRight: '10px' 
                }}></i>
                <span style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px' 
                }}>
                  Teléfono de contacto: 11 3145-6352
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <i className="fas fa-envelope" style={{ 
                  color: 'var(--color-primary)', 
                  marginRight: '10px' 
                }}></i>
                <span style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px' 
                }}>
                  info@aliciaponce.com.ar
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;