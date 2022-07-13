import React, { useState, useEffect } from "react";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import { Routes, Route } from "react-router-dom";
import Particlejs from "./Components/Particlejs/Particlejs";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
// import BounceLoader from "react-spinners/BounceLoader";
// import { css } from "@emotion/react";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Particlejs />
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
