import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBars,
} from 'react-icons/fa';

import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && !isNavOpen) setIsNavOpen(true);
      // if (window.innerWidth <= 768 && isNavOpen) setIsNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  return (
    <HeaderContainer isNavOpen={isNavOpen}>
      <TopSection>
        <StyledLink to="/">
          <div>
            <ProfilePicture src="/assets/IMG_3094.jpg" />
            <Heading>RIMA DAGHER</Heading>
          </div>
        </StyledLink>
      </TopSection>
      {isNavOpen && (
        <MiddleSection>
          <NavList>
            <NavItem>
              <StyledLink to="/">HOME</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/aboutme">ABOUT ME</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/projects">PROJECTS</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/contactme">CONTACT ME</StyledLink>
            </NavItem>
          </NavList>
        </MiddleSection>
      )}
      <BottomSection>
        <StyledButton onClick={toggleTheme}>SWITCH THEME</StyledButton>
        <SocialList>
          <SocialListItem>
            <SocialButton
              href="https://www.instagram.com/dagher.rima/"
              target="_blank"
              rel="noopener noreferrer"
              as={SocialButton}
            >
              <FaInstagram />
            </SocialButton>
          </SocialListItem>
          <SocialListItem>
            <SocialButton
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              as={SocialButton}
            >
              <FaTwitter />
            </SocialButton>
          </SocialListItem>
          <SocialListItem>
            <SocialButton
              href="https://github.com/RIDaghe"
              target="_blank"
              rel="noopener noreferrer"
              as={SocialButton}
            >
              <FaGithub />
            </SocialButton>
          </SocialListItem>
          <SocialListItem>
            <SocialButton
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              as={SocialButton}
            >
              <FaLinkedin />
            </SocialButton>
          </SocialListItem>
        </SocialList>
        <MenuIcon onClick={() => setIsNavOpen(!isNavOpen)}>
          <FaBars />
        </MenuIcon>
      </BottomSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: #111418;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.065);
  color: #fff;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.isNavOpen ? 'column' : 'row')};
    height: auto;
    width: 100%;
    /* align-items: ${(props) =>
      props.isNavOpen ? 'flex-start' : 'center'}; */
  }
`;

const TopSection = styled.div`
  text-align: center;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const ProfilePicture = styled.img`
  width: 80%;

  border-radius: 70%;
  object-fit: cover;
  border: 6px solid #343a40;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h2`
  color: #fff;
  text-decoration: none;
  @media (max-width: 768px) {
    display: block;
    width: 40%;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  position: absolute; // Set to absolute
  top: 0; // Position it appropriately
  right: 0; // Position it appropriately
  z-index: 3; // Ensure it’s above other elements

  @media (max-width: 768px) {
    display: block;
  }
`;

const MiddleSection = styled.div`
  display: block;
  text-align: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: block;

    background-color: #020202;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: block;
  margin: 0;

  padding: 16px 0;
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #fff;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: #1dc997;
  }
`;

const BottomSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    position: fixed;
    margin-bottom: 0;
    right: 0;
    top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialButton = styled.a`
  display: flex;
  flex-direction: row;
  color: #9eb1bc;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: #1dc997; // Adjust as needed
  }
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-right: 24px;
  padding-top: 10px;
  display: flex;
  flex-direction: row; // to align the icons in a row
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const SocialListItem = styled.li`
  padding: 0 10px; // or any other value to create space between the icons
  color: #9eb1bc;
`;

const StyledButton = styled.button`
  background-color: #343a40;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1dc997;
  }

  // Add more styles as needed

  @media (max-width: 768px) {
    text-align: center;
    border-radius: 4px;
  }
`;

export default Header;
