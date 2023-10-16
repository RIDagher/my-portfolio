import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <AboutContainer>
      <HeadingSection>
        <MainHeading>ABOUT ME</MainHeading>
        <SubHeading>Know me better</SubHeading>
      </HeadingSection>

      <Description>
        <p>
          I am a passionate and dedicated web developer based in Montreal,
          Canada. With a relentless pursuit of knowledge, I am always looking
          for the next challenge and opportunity to learn and grow. My mission
          is to create clean, efficient, and scalable solutions that can help
          businesses and individuals achieve their goals.
        </p>
      </Description>
      <TechSection>
        <TechHeeading>Technologies I know:</TechHeeading>
        <TechList>
          <TechItem>HTML</TechItem>
          <TechItem>CSS</TechItem>
          <TechItem>JavaScript</TechItem>
          <TechItem>React</TechItem>
          <TechItem>Node.js</TechItem>
          <TechItem>Express</TechItem>
          <TechItem>MongoDB</TechItem>
        </TechList>
      </TechSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
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

const Description = styled.section`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
`;

const TechSection = styled.section`
  margin-top: 200px;
`;

const TechHeeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechItem = styled.li`
  background-color: #1dc997;
  color: #111418;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 5px;
`;

export default AboutMe;
