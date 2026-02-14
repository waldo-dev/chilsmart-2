import React from 'react';
import {
  Section,
  Container,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  Stars,
  TestimonialText,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorRole,
} from './testimonials.style';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'La automatización de nuestro inventario redujo los errores en un 90%. Chilsmart entendió exactamente lo que necesitábamos desde el día uno.',
      author: 'Gerente de Operaciones',
      role: 'Retail Logístico',
    },
    {
      text: 'Desarrollar nuestra plataforma web con ellos fue la mejor decisión. La escalabilidad es impecable y el soporte técnico siempre está presente.',
      author: 'CTO',
      role: 'Fintech Emerging',
    },
    {
      text: 'Sus integraciones nos permitieron conectar 4 sistemas aislados en un solo tablero de control. Ahora tomamos decisiones basadas en datos reales.',
      author: 'Director Ejecutivo',
      role: 'Servicios Industriales',
    },
  ];

  return (
    <Section id="testimonios">
      <Container>
        <SectionTitle>Soluciones creadas para negocios reales</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons">
                    star
                  </span>
                ))}
              </Stars>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <span className="material-icons">person</span>
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Testimonials;

