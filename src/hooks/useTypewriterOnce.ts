import { useState, useEffect } from 'react';

interface TypewriterOnceOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export const useTypewriterOnce = ({
  text,
  speed = 100,
  startDelay = 500,
}: TypewriterOnceOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted || !text) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, hasStarted]);

  return {
    text: displayText,
    isComplete,
    hasStarted,
  };
};