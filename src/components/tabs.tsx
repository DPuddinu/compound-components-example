import React, { useState, ReactNode, createContext } from 'react';

interface TabsProps {
  children: ReactNode;
}

interface TabsContextType {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
