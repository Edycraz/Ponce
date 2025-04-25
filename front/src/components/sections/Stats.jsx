import React from 'react';
import StatCounter from '../ui/StatCounter';

const Stats = () => {
  const stats = [
    { number: '95', label: 'TASA DE APROBACIÓN', suffix: '%' },
    { number: '5000', label: 'ALUMNOS GRADUADOS', suffix: '+' },
    { number: '120', label: 'PAÍSES REPRESENTADOS', suffix: '+' },
    { number: '15', label: 'AÑOS DE EXCELENCIA', suffix: '' }
  ];

  return (
    <section className="stats-section" style={{
        padding: '100px 0',
        backgroundColor: 'var(--color-primary)',
        position: 'relative',
        zIndex: 10,
        color: 'white' 
      }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'url("/images/pattern.png")',
        backgroundSize: '200px',
        opacity: 0.05,
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
      <h3 style={{
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    fontWeight: 800,
    marginBottom: '10px',
    color: 'white', // Mantener el texto blanco para contraste
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}></h3>
    </section>
  );
};

export default Stats;