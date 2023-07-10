import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState(null);

  return (
    <AppContext.Provider value={{ currentLesson, setCurrentLesson }}>
      {children}
    </AppContext.Provider>
  );
};
