import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import PageBuilding from "./components/ErrorPages/PageBuilding";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          {/* <Route path="/project" component={Projects} /> */}
          {/* TODO: Update the Projects page */}
          <Route path='/project' element={<PageBuilding/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
