import React from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Carousel from "./components/Carousel";
import Container from "./components/Container";
import Col from "./components/Col";
import Row from "./components/Row";
import Card from "./components/Card";

import './App.css';

function App() {
  return (
    <Router>
      <div>
          <Header />
          <NavTabs />
          {/* <Carousel /> */}
          <Container />
            <Row />
              <Col />

              <Card />
              
          <Footer />
          



      </div>
    </Router>
  );
}

export default App;
