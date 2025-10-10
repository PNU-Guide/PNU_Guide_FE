import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <div className="bg-pgSky text-white p-4 rounded-xl">
        Hello Tailwind!
      </div>{' '}
    </>
  );
}

export default App;
