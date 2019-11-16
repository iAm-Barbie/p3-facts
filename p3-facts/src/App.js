import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "reactstrap"; 
import DataCard from './components/DataCard/DataCard';
import NavBarMain from './components/NavBar/Navbar';
import ScrapeButton from './components/ScrapeButton/ScrapeButton';
import './App.css';

function App() {
  return (
    <Container>
    <h1>NavBar</h1>
    <ScrapeButton />
    <DataCard />
    </Container>
  );
}

export default App;
