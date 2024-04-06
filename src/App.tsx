import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import HumanDog from './pages/human_dog';
import Cat from './pages/cat';
import Caged from './pages/caged';
import Squirrel from './pages/squirrel';
import Tuna from './pages/tuna';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [activeKey, setActiveKey] = React.useState(null);
  const toggleTheme = (checked: boolean) => {
    console.log(checked);
    setTheme(checked ? 'light' : 'dark');
  };
  console.log(theme);
  React.useEffect(() => {
    console.log(theme);
    document.body.className = `rsuite-${theme}`;
  }, [theme]);
  React.useEffect(() => {
    console.log(activeKey);
  }, [activeKey]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
      <Route
        path="/cat"
        element={
          <Cat
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
      <Route
        path="/squirrel"
        element={
          <Squirrel
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
      <Route
        path="/tuna"
        element={
          <Tuna
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
      <Route
        path="/caged"
        element={
          <Caged
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
      <Route
        path="/human_dog"
        element={
          <HumanDog
            theme={theme}
            toggleTheme={toggleTheme}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        }
      />
    </Routes>
  );
}

export default App;
