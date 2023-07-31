import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Appart from "../pages/Appart";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Projet-Kasa' element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/Appart/:id" element={<Appart />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;