import React from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel";
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <Header />
          <NavTabs />
          <Carousel />
          <Footer />
          



      </div>
    </Router>
  );
}

export default App;
