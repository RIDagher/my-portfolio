import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './GlobalStyles';

import App from './App';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
