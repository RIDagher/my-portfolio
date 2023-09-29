import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { ThemeContext } from './context/ThemeContext';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#212529',
  color: '#fff',
};

const App = () => {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <StyledThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

const Main = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
export default App;
