import React from 'react';
import { Route, Routes } from "react-router-dom"

import './App.css';

//Pages
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';

// Components
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';

export default function App() {
  return (
    <div className="app">
      
      <Navbar />


      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    
  <Footer />


    </div>
  );
}
