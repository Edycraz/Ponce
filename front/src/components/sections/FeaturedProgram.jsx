import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FeaturedProgram = () => {
  const features = [
    'Certificación internacional reconocida',
    'Prácticas en centros coordinadores reales',
    'Simulación de operaciones multipaís',
    'Acceso a red profesional exclusiva'
  ];

  return (
    <section style={{
      padding: 'var(--spacing-xl) 0',
      backgroundColor: 'var(--color-bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 800,
              marginBottom: '30px',
              position: 'relative',
              paddingBottom: '20px'
            }}>
              PROGRAMA <span style={{ color: 'var(--color-primary)' }}>DESTACADO</span>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '60px',
                height: '3px',
                backgroundColor: 'var(--color-primary)'
              }} />
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              marginBottom: '30px',
              fontWeight: 300
            }}>
              Nuestro programa de Coordinador de Evacuaciones Aeromédicas Internacionales (CEAMI) ofrece una formación integral en gestión, coordinación y ejecución de operaciones aeromédicas complejas.
            </p>
            
            <ul style={{
              marginBottom: '40px',
              paddingLeft: 0,
              listStyle: 'none'
            }}>
              {features.map((item, i) => (
                <li 
                  key={i}
                  style={{
                    position: 'relative',
                    paddingLeft: '30px',
                    marginBottom: '15px',
                    fontSize: '1rem',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '15px',
                    height: '15px',
                    backgroundColor: 'rgba(221, 51, 51, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '5px',
                      height: '5px',
                      backgroundColor: 'var(--color-primary)'
                    }} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <Button primary>
              Solicitar Información
            </Button>
          </div>
          
          <div style={{
            position: 'relative',
            height: '500px'
          }}>
            <div style={{
              position: 'absolute',
              inset: '10%',
              overflow: 'hidden',
              zIndex: 1
            }}>
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/images/program.webp")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              border: '1px solid rgba(221, 51, 51, 0.3)',
              zIndex: 0,
              transform: 'translate(20px, 20px)'
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '15px 25px',
              zIndex: 2,
              fontWeight: 700,
              letterSpacing: '1px'
            }}>
              NUEVA EDICIÓN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgram;