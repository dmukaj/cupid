"use client";
import { createContext, useContext, useState } from "react";
const MesageContext = createContext();
export const useMessage = () => useContext(MesageContext);

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <MesageContext.Provider value={{ message, setMessage }}>
      {children}
    </MesageContext.Provider>
  );
};
