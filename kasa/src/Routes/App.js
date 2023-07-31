import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Appart from "../pages/Appart";


const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path='/ProjetKasa' element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/Appart/:id" element={<Appart />} />
    </Routes>
    </HashRouter>
  );
};

export default App;