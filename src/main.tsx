import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import '@fontsource/pretendard';
import '@/index.css';
import App, { GlobalStyle } from '@/App.tsx';
import ChatbotPage from '@/pages/ChatbotPage';
import CoursePage from '@/pages/CoursePage';
import HomePage from '@/pages/HomePage';
import Login from '@/pages/Login';
import theme from '@/theme/theme';

const withTheme = (node: React.ReactElement) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {node}
  </ThemeProvider>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withTheme(<Login />),
  },
  {
    // App 컴포넌트는 이제 /home, /course 등 하단 네비게이션 바가 필요한 페이지들의
    // 공통 레이아웃 역할을 합니다.
    element: <App />, // App 컴포넌트가 보호된 라우트를 관리합니다.
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'course', element: <CoursePage /> },
      { path: 'chatbot', element: <ChatbotPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
