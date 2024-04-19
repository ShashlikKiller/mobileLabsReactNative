import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import { useNewsTimer } from './timer';

type NewsContextType = {
  unreadNewsCount: number;
  setUnreadNewsCount: Dispatch<SetStateAction<number>>;
  stopTimer: () => void;
  startTimer: () => void;
};

const NewsContext = React.createContext<NewsContextType>({
  unreadNewsCount: 0,
  setUnreadNewsCount: () => {},
  stopTimer: () => {},
  startTimer: () => {},
});

export function NewsProvider({ children }: { children: ReactNode }) {
  const newsTimer = useNewsTimer();

  return (
    <NewsContext.Provider value={newsTimer}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  return React.useContext(NewsContext);
}

export default NewsContext;