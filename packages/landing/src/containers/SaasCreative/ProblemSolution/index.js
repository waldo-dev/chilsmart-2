import React from 'react';
import {
  Section,
  Container,
  ContentGrid,
  ProblemsList,
  ProblemItem,
  ProblemIcon,
  ProblemContent,
  SolutionCard,
  SolutionHeader,
  SolutionTitle,
  SolutionDescription,
  SolutionList,
  SolutionListItem,
} from './problemSolution.style';

const ProblemSolution = () => {
  return (
    <Section>
      <Container>
        <ContentGrid>
          <div>
            <h2>
              Deje de luchar con procesos manuales que frenan su crecimiento
            </h2>
            <ProblemsList>
              <ProblemItem>
                <ProblemIcon>
                  <span className="material-icons">priority_high</span>
                </ProblemIcon>
                <ProblemContent>
                  <h4>Fuga de Recursos</h4>
                  <p>
                    Las tareas repetitivas consumen horas valiosas que su equipo podría dedicar a la innovación.
                  </p>
                </ProblemContent>
              </ProblemItem>
              <ProblemItem>
                <ProblemIcon>
                  <span className="material-icons">error_outline</span>
                </ProblemIcon>
                <ProblemContent>
                  <h4>Errores Operativos</h4>
                  <p>
                    La gestión manual de datos incrementa el riesgo de errores críticos y pérdida de información.
                  </p>
                </ProblemContent>
              </ProblemItem>
            </ProblemsList>
          </div>
          <SolutionCard>
            <SolutionHeader>
              <span className="material-icons">auto_fix_high</span>
            </SolutionHeader>
            <SolutionTitle>Nuestra Solución</SolutionTitle>
            <SolutionDescription>
              Creamos ecosistemas digitales inteligentes que eliminan la fricción operativa. Restauramos la eficiencia mediante la automatización estratégica y el desarrollo de software que se adapta a su flujo de trabajo, no al revés.
            </SolutionDescription>
            <SolutionList>
              <SolutionListItem>
                <span className="material-icons">check_circle</span>
                <span>Aumento de productividad del 40%</span>
              </SolutionListItem>
              <SolutionListItem>
                <span className="material-icons">check_circle</span>
                <span>Reducción de costos operativos</span>
              </SolutionListItem>
              <SolutionListItem>
                <span className="material-icons">check_circle</span>
                <span>Visibilidad de datos en tiempo real</span>
              </SolutionListItem>
            </SolutionList>
          </SolutionCard>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default ProblemSolution;

