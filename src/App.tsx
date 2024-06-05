import Tab from "./components/tab";
import TabPanel from "./components/tabpanel";
import Tabs from "./components/tabs";

const App: React.FC = () => {
  return (
    <Tabs>
      <div>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
        <Tab index={2}>Tab 3</Tab>
      </div>
      <TabPanel index={0}>
        <h1>Content for Tab 1</h1>
        <p>This is the content for Tab 1.</p>
      </TabPanel>
      <TabPanel index={1}>
        <h1>Content for Tab 2</h1>
        <p>This is the content for Tab 2.</p>
      </TabPanel>
      <TabPanel index={2}>
        <h1>Content for Tab 3</h1>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
    </Tabs>
  );
};

export default App;
