import React from 'react';

const Footer = () => {
  const socialLinks = ['facebook', 'instagram', 'linkedin'];
  const quickLinks = [
    'Rehabilitación de Suelo Pélvico', 
    'Preparación Prenatal', 
    'Rehabilitación Post Parto', 
    'Evaluación Integral'
  ];

  return (
    <footer style={{
      padding: '80px 0 40px',
      backgroundColor: 'var(--color-bg-primary)',
      borderTop: 'var(--border-light)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Sección Logo y Descripción */}
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 800,
              marginBottom: '25px',
              color: 'var(--color-text-primary)'
            }}>
              LIC.<span style={{ color: 'var(--color-primary)' }}> ALICIA EDITH PONCE</span>
            </h3>
            <p style={{
              fontSize: 'var(--font-size-md)',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              marginBottom: '20px',
              fontWeight: 300
            }}>
              Kinesiología y fisiatría especializada en rehabilitación de suelo pélvico, preparación prenatal y recuperación post parto.
            </p>

            {/* Redes sociales */}
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              {socialLinks.map(social => (
                <a key={social}
                  href={`#${social}`}
                  className="social-link"
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(174, 127, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              fontWeight: 700,
              marginBottom: '20px',
              color: 'var(--color-text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Tratamientos</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link) => (
                <li key={link} style={{ marginBottom: '10px' }}>
                  <a href="#"
                    className="footer-link"
                    style={{
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      fontSize: 'var(--font-size-sm)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      position: 'relative'
                    }}
                  >
                    {link}
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: 0,
                      height: '1px',
                      backgroundColor: 'var(--color-primary)',
                      transition: 'width 0.3s ease'
                    }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              fontWeight: 700,
              marginBottom: '20px',
              color: 'var(--color-text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Contacto</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <i className="fab fa-whatsapp" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                <a href="https://wa.me/5491131456352" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>
                WhatsApp para turnos
                </a>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-mobile-alt" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                Teléfono de contacto: 11 3145-6352
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--color-primary)', marginRight: '10px' }}></i>
                <a href="mailto:info@aliciaponce.com" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>
                  info@aliciaponce.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div style={{
          borderTop: 'var(--border-light)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            © 2025 Lic. Alicia Edith Ponce. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;