import React from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '@/theme/theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
