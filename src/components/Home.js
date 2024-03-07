import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Cover />
      <Content>
        <Title>Welcome</Title>
        <Subtitle>I'm a Full-Stack Web Developer.</Subtitle>
        <Description>based in Montreal, Canada</Description>
        <StyledLink to="/contactme">Hire Me</StyledLink>
      </Content>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  width: calc(100% - 260px);
  height: 100vh;
  background: url('/assets/portfolio-bckg6.jpg') no-repeat center center fixed;
  background-size: cover;
  margin-left: 260px;
  @media (max-width: 768px) {
    width: 100%; // Resetting to 100% for smaller screens
    margin-left: 0; // Resetting margin for smaller screens
  }
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.h1`
  animation: fadeIn 3s;
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Subtitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 50px;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  max-width: fit-content; // Changed from 100% to fit-content
  animation: ${typing} 3.5s steps(21, end),
    ${blinkCaret} 0.75s step-end infinite;
`;

const Description = styled.p`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: transparent;
  border: 2px solid #1dc997;
  color: white;
  text-decoration: none;
  padding: 14px 24px;
  border-radius: 30px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1dc997;
  }
`;

export default Home;
