import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true,
}: TypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => 
            loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === currentWord) {
          if (loop || currentWordIndex < words.length - 1) {
            setIsPaused(true);
          }
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, speed, deleteSpeed, pauseTime, loop]);

  return {
    text: currentText,
    isDeleting,
    isPaused,
  };
};