import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'TENNIS MATCHUP - FINAL PROJECT',
    image: '/assets/tennisgif.gif',
    description:
      'Tennis Matchup App is a full-stack application designed to connect tennis enthusiasts. It enables users to discover tennis courts, schedule matches, and connect with other players. The app features user authentication, profile management, and an interactive platform for organizing and participating in tennis matches.',
    github: 'https://github.com/RIDagher/TennisMatchup-project',
    link: 'http://example.com/project-one',
  },

  {
    title: 'PROJECT HOLDER',
    image: '/assets/portfolio-bckg4.avif',
    description: 'TO BE DISPALYED',
    github: 'http://github.com/your-repo/project-one',
    link: 'http://example.com/project-one',
  },
  {
    title: 'PROJECT HOLDER',
    image: '/assets/portfolio-bckg4.avif',
    description: 'TO BE DISPALYED',
    github: 'https://github.com/RIDagher/my-version-e-commerce-project',
    link: 'http://example.com/project-one',
  },
  {
    title: 'E-COMMERCE - GROUP PROJECT',
    image: '/assets/e-commerce.gif',
    description:
      'A collaborative full-stack project focused on wearable technology e-commerce. Features include product browsing, cart functionality, and user checkout. Built with React, node.Js, MongoDB.',
    github: 'https://github.com/RIDagher/my-version-e-commerce-project',
    link: 'http://example.com/project-one',
  },
];

const Projects = () => {
  return (
    <ProjectContainer>
      <HeadingSection>
        <MainHeading>PORTFOLIO</MainHeading>
        <SubHeading>My Work</SubHeading>
      </HeadingSection>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectImg src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <LinkGroup>
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </ProjectLink>
                <GithubLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </GithubLink>
              </LinkGroup>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
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

const ProjectGrid = styled.div`
  display: grid;
  text-align: center;

  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  border-radius: 3px;

  // Responsive grid adjustment
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 column for small screens
  }
`;

const ProjectImg = styled.img`
  width: 70%;
  border-radius: 3px;

  transition: transform 0.3s ease; // Added smooth transition

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s;
  font-size: 18px;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  &:hover ${ProjectInfo} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectTitle = styled.h2``;

const ProjectDescription = styled.p``;

const ProjectLink = styled.a`
  background-color: #1dc997;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #16a085;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const GithubLink = styled(ProjectLink)`
  background-color: #333;
  &:hover {
    background-color: #222;
  }
`;

export default Projects;
