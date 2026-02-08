import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { mail } from 'react-icons-kit/feather/mail';
import { send } from 'react-icons-kit/feather/send';
import { checkCircle } from 'react-icons-kit/feather/checkCircle';
import { alertCircle } from 'react-icons-kit/feather/alertCircle';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Section, { 
  SectionHeading, 
  ContactForm, 
  FormRow, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormTextarea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
  LoadingSpinner
} from './pricing.style';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar mensaje de error al escribir
    if (submitStatus === 'error') {
      setSubmitStatus(null);
    }
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      return 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      return 'El email es requerido';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'El email no es válido';
    }
    if (!formData.mensaje.trim()) {
      return 'El mensaje es requerido';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://n8n.chilsmart.com:5678/webhook-test/contacto-chilsmart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || null,
          empresa: formData.empresa || null,
          mensaje: formData.mensaje,
          fecha: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contacto">
      <Container width="1400px">
        <Fade direction="up" triggerOnce>
          <SectionHeading>
            <Heading content="Contáctanos" style={{fontSize: "3rem", color: "#fff"}}/>
            <Text 
              content="Cuéntanos sobre tu proyecto y te responderemos lo antes posible" 
              style={{color: "#e2e8f0", fontSize: "18px", marginTop: "16px"}} 
            />
          </SectionHeading>
        </Fade>

        <Fade direction="up" triggerOnce delay={200}>
          <ContactForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="nombre">Nombre *</FormLabel>
                <FormInput
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                <FormInput
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+56 9 1234 5678"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="empresa">Empresa</FormLabel>
                <FormInput
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel htmlFor="mensaje">Mensaje *</FormLabel>
              <FormTextarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntanos sobre tu proyecto, necesidades o consultas..."
              />
            </FormGroup>

            {submitStatus === 'success' && (
              <SuccessMessage>
                <Icon icon={checkCircle} size={20} />
                <span>¡Mensaje enviado con éxito! Te contactaremos pronto.</span>
              </SuccessMessage>
            )}

            {submitStatus === 'error' && (
              <ErrorMessage>
                <Icon icon={alertCircle} size={20} />
                <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
              </ErrorMessage>
            )}

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoadingSpinner />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Icon icon={send} size={18} />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </Fade>
      </Container>
    </Section>
  );
};

export default Contact;
