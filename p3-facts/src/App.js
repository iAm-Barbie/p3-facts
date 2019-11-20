import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./Routes";
import { Container, Row, Col, Jumbotron, Card, Button } from "reactstrap";
import DataCard from "./components/DataCard/DataCard";
import NavBarMain from "./components/NavBar/Navbar";
import ScrapeButton from "./components/ScrapeButton/ScrapeButton";
import "./App.css";

function App() {
  return (
    <>
    <div style={{ width: 300, height: 300, background: '#444'}}>    I am a square box with black background
    </div>
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p></Jumbotron> 
  
  


  </>
  );
}

export default App;
