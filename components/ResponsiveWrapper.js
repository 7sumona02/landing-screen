'use client';

import { useEffect, useState } from 'react';

export default function ResponsiveWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter">Mobile Only App</h1>
          <p className="text-lg text-muted-foreground">
            This application is designed for mobile devices only. Please access it from your smartphone or tablet.
          </p>
        </div>
      </div>
    );
  }

  return children;
}