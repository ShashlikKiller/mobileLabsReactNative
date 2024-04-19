import { useState, useEffect, useRef } from 'react';

export function useNewsTimer(initialCount: number = 0, interval: number = 2000) {
    const [unreadNewsCount, setUnreadNewsCount] = useState<number>(initialCount);
    const timerRef = useRef<NodeJS.Timeout | undefined>();
  
    useEffect(() => {
      timerRef.current = setInterval(() => {
        setUnreadNewsCount(prevCount => prevCount + 1);
      }, interval);
  
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }, [interval]);
  
    const stopTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setUnreadNewsCount(prevCount => prevCount + 1);
      }, interval);
    };
  
    return { unreadNewsCount, setUnreadNewsCount, stopTimer, startTimer };
  }