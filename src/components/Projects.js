import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectContainer>
      <HeadingSection>
        <MainHeading>PORTFOLIO</MainHeading>
        <SubHeading>My Work</SubHeading>
      </HeadingSection>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  position: relative;
  width: calc(100% - 260px);
  height: 100vh;
  margin-left: 260px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const HeadingSection = styled.div`
  position: relative;
  text-align: center;
`;
const MainHeading = styled.h1`
  font-size: 6rem;
  opacity: 0.3;
  color: #dee3e4;
`;

const SubHeading = styled.h2`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
`;
export default Projects;
