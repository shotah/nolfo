import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {CustomProvider, Container} from 'rsuite';
import Home from './pages';
import HumanDog from './pages/human_dog';
import Cat from './pages/cat';
import Caged from './pages/caged';
import Squirrel from './pages/squirrel';
import Tuna from './pages/tuna';

function App() {
  return (
    <CustomProvider theme={'dark'} disableRipple={false}>
      <Container className="App" data-testid="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/squirrel" element={<Squirrel />} />
          <Route path="/tuna" element={<Tuna />} />
          <Route path="/caged" element={<Caged />} />
          <Route path="/human_dog" element={<HumanDog />} />
        </Routes>
      </Container>
    </CustomProvider>
  );
}

export default App;
