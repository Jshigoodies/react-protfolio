import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/react-protfolio" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
