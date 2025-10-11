import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Login from './Login.jsx';
    
function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Login />
    </>
  );
}

export default App;
