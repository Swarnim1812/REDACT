import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Roadmap from "./components/Roadmap.jsx";


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tool" element={<Roadmap />} />
      </Routes>

  );
};

export default App;


