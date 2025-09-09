import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Routes,Route, Link} from 'react-router'
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeorder/Placeorder";
import Footer from "./Components/Footer/Footer";

export default function App() {


  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}
