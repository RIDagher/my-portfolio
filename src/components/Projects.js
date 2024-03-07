import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'TENNIS MATCHUP',
    image: '/assets/tennisgif.gif',
    description:
      'Inspired by the classic hang im! game, we utilize React propertize, in order to get the database and make different jsx componants in react. The user has up to 10 tries to get the word.',
    github: 'https://github.com/RIDagher/TennisMatchup-project',
    link: 'http://example.com/project-one',
  },
  {
    title: 'Cookie generator game coming through!',
    image: '/assets/project2.png',
    description:
      'Cookie generator game coming through! with the combination of CSS HTML and react, I managed to make this game that generator cookies per second, and in order to increase your CPS, you would need to purchase the items! The goal of this game is to get as many cookies as possible.',
    github: 'http://github.com/your-repo/project-one',
    link: 'http://example.com/project-one',
  },
  {
    title: 'Cookie generator game coming through!',
    image: '/assets/project2.png',
    description:
      'Cookie generator game coming through! with the combination of CSS HTML and react, I managed to make this game that generator cookies per second, and in order to increase your CPS, you would need to purchase the items! The goal of this game is to get as many cookies as possible.',
    github: 'http://github.com/your-repo/project-one',
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
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
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
  margin-top: 20px;
`;

const GithubLink = styled(ProjectLink)`
  background-color: #333;
  &:hover {
    background-color: #222;
  }
`;

export default Projects;
