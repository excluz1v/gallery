import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Navigation from './components/Navigation/Nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
