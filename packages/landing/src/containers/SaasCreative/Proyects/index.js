import React, { useState, useEffect } from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { externalLink } from "react-icons-kit/feather/externalLink";

import SectionWrapper, {
  SectionHeader,
  Highlight,
  ProjectsCarousel,
  ProjectsGrid,
  ProjectCard,
  ProjectImageWrapper,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  ProjectType,
  ProjectDescription,
  TechnologiesWrapper,
  TechTag,
  ProjectLink,
  CarouselControls,
  ControlButton,
  CarouselDots,
  Dot,
} from "./proyects.style";

// Importar imágenes de clientes
import seccoImage from "common/assets/image/clients/secco.png";
import connieImage from "common/assets/image/clients/connie.png";
import mgiImage from "common/assets/image/clients/mgi.png";
import adafImage from "common/assets/image/clients/adaf.png";
import teslectrikImage from "common/assets/image/clients/teslectrick.png";

const projects = [
  {
    id: 1,
    name: "SECCO Automotriz",
    url: "https://www.seccoautomotriz.cl/",
    type: "Plataforma de Reservas",
    image: seccoImage,
    description: "Desarrollamos una plataforma completa para gestionar las reservas de servicios de inspección automotriz, permitiendo a los clientes agendar citas de forma sencilla y eficiente.",
    technologies: ["Sistema de Reservas", "Gestión de Servicios", "Plataforma Web"],
  },
  {
    id: 2,
    name: "Connie Edelai",
    url: "https://www.connieedelai.com/",
    type: "Plataforma de Entrenamiento y Nutrición",
    image: connieImage,
    description: "Creamos una plataforma integral de entrenamientos y nutrición junto con su landing page, permitiendo a los usuarios acceder a rutinas personalizadas, planes alimenticios y contenido exclusivo.",
    technologies: ["Plataforma SaaS", "Landing Page", "Sistema de Membresías"],
  },
  {
    id: 3,
    name: "MGI Asesorías",
    url: "https://www.mgiasesorias.com/",
    type: "Plataforma de Auditorías",
    image: mgiImage,
    description: "Desarrollamos una plataforma donde los clientes pueden visualizar sus auditorías y reportes realizados, facilitando el acceso a información crítica de forma organizada y segura.",
    technologies: ["Dashboard de Reportes", "Gestión de Auditorías", "Visualización de Datos"],
  },
  {
    id: 4,
    name: "ADAF",
    url: "https://adaf.cl/",
    type: "APIs y Desarrollo a Medida",
    image: adafImage,
    description: "Implementamos APIs internas para sus clientes y otros desarrollos a medida, optimizando procesos internos y mejorando la integración entre sistemas.",
    technologies: ["APIs REST", "Desarrollo a Medida", "Integración de Sistemas"],
  },
  {
    id: 5,
    name: "Teslectrik",
    url: "https://www.teslectrik.cl/",
    type: "Landing Page",
    image: teslectrikImage,
    description: "Desarrollamos una landing page moderna y profesional que presenta los servicios de la empresa de manera clara y atractiva, optimizada para conversión.",
    technologies: ["Landing Page", "Diseño Responsive", "SEO Optimizado"],
  },
];

const Proyects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Número de cards visibles según el tamaño de pantalla
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + visibleCards;
        return next >= projects.length ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCards]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - visibleCards;
      return newIndex < 0 ? Math.max(0, projects.length - visibleCards) : newIndex;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + visibleCards;
      return next >= projects.length ? 0 : next;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Obtener los proyectos visibles
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <SectionWrapper id="proyectos">
      <Container width="1400px">
        <SectionHeader>
          <Highlight>Casos de Éxito</Highlight>
          <Heading content="Proyectos Desarrollados" />
          <Text
            content="Hemos trabajado con empresas de diferentes industrias, desarrollando soluciones digitales que ordenan su operación y convierten sus datos en decisiones accionables."
          />
        </SectionHeader>

        <ProjectsCarousel>
          <ProjectsGrid visibleCards={visibleCards}>
            {getVisibleProjects().map((project) => (
              <ProjectCard
                key={project.id}
                className="project-card-active"
              >
                <ProjectImageWrapper>
                  <NextImage
                    src={project.image}
                    alt={`Captura de pantalla de ${project.name}`}
                    width={400}
                    height={600}
                    quality={100}
                  />
                </ProjectImageWrapper>
                <ProjectContent>
                  <ProjectHeader>
                    <div>
                      <ProjectTitle>{project.name}</ProjectTitle>
                      <ProjectType>{project.type}</ProjectType>
                    </div>
                  </ProjectHeader>
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>
                  <TechnologiesWrapper>
                    {project.technologies.map((tech, idx) => (
                      <TechTag key={idx}>
                        {tech}
                      </TechTag>
                    ))}
                  </TechnologiesWrapper>
                  <ProjectLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto en vivo
                    <Icon icon={externalLink} size={16} style={{ marginLeft: "8px" }} />
                  </ProjectLink>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <CarouselControls>
            <ControlButton onClick={goToPrevious} aria-label="Proyectos anteriores">
              <Icon icon={arrowRight} size={20} style={{ transform: "rotate(180deg)" }} />
            </ControlButton>
            <CarouselDots>
              {Array.from({ length: Math.ceil(projects.length / visibleCards) }).map((_, groupIndex) => {
                const startIndex = groupIndex * visibleCards;
                const isActive = currentIndex >= startIndex && currentIndex < startIndex + visibleCards;
                return (
                  <Dot
                    key={groupIndex}
                    active={isActive}
                    onClick={() => goToSlide(startIndex)}
                    aria-label={`Ir al grupo ${groupIndex + 1}`}
                  />
                );
              })}
            </CarouselDots>
            <ControlButton onClick={goToNext} aria-label="Siguientes proyectos">
              <Icon icon={arrowRight} size={20} />
            </ControlButton>
          </CarouselControls>
        </ProjectsCarousel>
      </Container>
    </SectionWrapper>
  );
};

export default Proyects;
