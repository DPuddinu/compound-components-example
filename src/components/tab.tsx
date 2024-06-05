import React, { ReactNode, useContext } from 'react';
import { TabsContext } from './tabs';

interface TabProps {
  children: ReactNode;
  index: number;
}

const Tab: React.FC<TabProps> = ({ children, index }) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tab must be used within a Tabs component');
  }

  const { activeTab, setActiveTab } = context;

  return (
    <button style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }} onClick={() => setActiveTab(index)}>
      {children}
    </button>
  );
};

export default Tab;
