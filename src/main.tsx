import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@fontsource/pretendard';
import '@/index.css';
import App from '@/App.tsx';

const router = createBrowserRouter([{ path: '/', element: <App /> }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
