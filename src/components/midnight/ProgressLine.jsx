import React, { useState, useEffect } from 'react';

export default function ProgressLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-4 lg:left-8 top-0 bottom-0 w-px bg-border z-40 hidden lg:block">
      <div
        className="w-px bg-primary transition-all duration-150 origin-top"
        style={{ height: `${progress}%` }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary transition-all duration-150"
        style={{ top: `${progress}%` }}
      />
    </div>
  );
}