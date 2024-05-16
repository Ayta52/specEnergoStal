import React, { useContext, useState, ReactNode } from "react";

// Create the context for the active tab
interface ActiveTabContextType {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveTabContext = React.createContext<ActiveTabContextType | undefined>(undefined);

// Create the context provider for the active tab
export const ActiveTabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

// Create the context consumer for the active tab
export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};