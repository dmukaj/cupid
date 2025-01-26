"use client";
import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();
export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  // Track each step's completion
  const [progress, setProgress] = useState({
    details: false,
    message: false,
    surprise: false,
  });

  // Function to update step completion
  const completeStep = (step) => {
    setProgress((prev) => ({ ...prev, [step]: true }));
  };

  return (
    <ProgressContext.Provider value={{ progress, completeStep }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
