'use client';
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollCompleltion = () => {
      const scrollHeight = document.documentElement.scrollTop;
      const leftHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress(Number((scrollHeight / leftHeight).toFixed(2)) * 100);
    };

    window.addEventListener('scroll', updateScrollCompleltion);
    return () => {
      window.removeEventListener('scroll', updateScrollCompleltion);
    };
  }, []);

  return (
    <div>
      <span
        style={{
          width: `${progress}%`,
        }}
        className="fixed bg-yellow-400 h-1 top-0"
      />
    </div>
  );
}
