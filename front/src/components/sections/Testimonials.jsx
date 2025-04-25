import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "La rehabilitación con la Lic. Ponce transformó mi vida. Después del parto sufría de incontinencia, pero gracias a su profesionalismo y técnicas personalizadas, recuperé por completo el control. Su enfoque educativo me ayudó a entender mi cuerpo.",
      author: "María L.",
      position: "Paciente desde 2022",
      image: "/images/testimonial-1.png"
    },
    {
      quote: "La preparación prenatal que recibí me dio herramientas fundamentales para un parto más llevadero. El enfoque minimalista pero efectivo de Alicia me permitió aplicar todo lo aprendido cuando realmente lo necesité. Totalmente recomendable.",
      author: "Luciana R.",
      position: "Paciente desde 2023",
      image: "/images/testimonial-2.png"
    }
  ];

  return (
    <section className="testimonials-section" style={{
      padding: '120px 0',
      background: 'linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg-primary))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        right: '0',
        top: '0',
        width: '50%',
        height: '100%',
        backgroundColor: 'rgba(174, 127, 255, 0.03)',
        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        zIndex: 0
      }} />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
        position: 'relative',
        zIndex: 2
      }}>
        <SectionTitle 
          title="EXPERIENCIAS"
          highlight="DE PACIENTES"
          alignment="center"
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;