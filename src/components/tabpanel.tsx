import React, { ReactNode, useContext } from 'react';
import { TabsContext } from './tabs';

interface TabPanelProps {
  children: ReactNode;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index }) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabPanel must be used within a Tabs component');
  }

  const { activeTab } = context;

  return activeTab === index ? <div>{children}</div> : null;
};

export default TabPanel;
