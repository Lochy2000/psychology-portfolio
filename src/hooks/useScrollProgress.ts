import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollProgressOptions {
  threshold?: number;
  rootMargin?: string;
  element?: HTMLElement | null;
}

export const useScrollProgress = (options: ScrollProgressOptions = {}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / (docHeight || 1), 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      updateScrollProgress();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [updateScrollProgress]);

  return { scrollProgress, isScrolling };
};

export const useSectionScrollProgress = (sectionRef: React.RefObject<HTMLElement>) => {
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const updateSectionProgress = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
    
    // Calculate how much of the section has been scrolled through
    const scrolledPastTop = Math.max(0, -rect.top);
    const progress = Math.min(scrolledPastTop / sectionHeight, 1);
    
    setSectionProgress(progress);
    setIsInView(rect.bottom > 0 && rect.top < windowHeight);
  }, [sectionRef]);

  useEffect(() => {
    const handleScroll = () => updateSectionProgress();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSectionProgress(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateSectionProgress]);

  return { sectionProgress, isInView };
};