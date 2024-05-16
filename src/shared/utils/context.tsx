import React, { useContext, useState, ReactNode } from "react";
interface ActiveTabContextType {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveTabContext = React.createContext<ActiveTabContextType | undefined>(undefined);

export const ActiveTabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};
export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};