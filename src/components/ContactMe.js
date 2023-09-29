import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ContactMe = () => {
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';
  return (
    <ContactContainer isLightTheme={isLightTheme}>
      <HeadingSection>
        <MainHeading isLightTheme={isLightTheme}>Contact Me</MainHeading>
        <SubHeading>Let's Get In Touch</SubHeading>
      </HeadingSection>

      <FormContainer>
        <StyledForm>
          <InputField
            isLightTheme={isLightTheme}
            type="text"
            placeholder="Name"
            required
          />
          <InputField
            isLightTheme={isLightTheme}
            type="email"
            placeholder="Email"
            required
          />
          <MessageField
            isLightTheme={isLightTheme}
            placeholder="Your Message..."
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
      </FormContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid ${({ isLightTheme }) => (isLightTheme ? '#000' : '#fff')};
  background: transparent;
  color: ${({ isLightTheme }) => (isLightTheme ? '#000' : '#fff')};
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #1dc997;
  }
`;

const MessageField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid ${({ isLightTheme }) => (isLightTheme ? '#000' : '#fff')};
  background: transparent;
  color: ${({ isLightTheme }) => (isLightTheme ? '#000' : '#fff')};
  outline: none;
  resize: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #1dc997;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #1dc997;
  color: ${({ isLightTheme }) => (isLightTheme ? '#000' : '#fff')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isLightTheme }) =>
      isLightTheme ? '#e0e0e0' : '#333'};
  }
`;
export default ContactMe;
