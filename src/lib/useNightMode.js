import { useState, useEffect } from 'react';

const isNightHour = () => {
  const hour = new Date().getHours();
  return hour >= 22 || hour < 6;
};

export function useNightMode() {
  const [isNight, setIsNight] = useState(isNightHour);

  useEffect(() => {
    const checkTime = () => {
      const nightTime = isNightHour();
      setIsNight(nightTime);
      
      if (nightTime) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleNight = () => {
    setIsNight(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return { isNight, toggleNight };
}