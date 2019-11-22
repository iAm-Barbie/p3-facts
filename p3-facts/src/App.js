import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./Routes";
import { Container, Row, Col, Jumbotron, Card, Button, CardFooter } from "reactstrap";
import DataCard from "./components/DataCard/DataCard";
import NavBarMain from "./components/NavBar/Navbar";
import ScrapeButton from "./components/ScrapeButton/ScrapeButton";
import "./App.css";





class App extends Component {
// new code
constructor(props) {
  super(props);
  this.state = {apiResponse: ""};
}

callAPI(){
  fetch("http://localhost:4000/scrape")
  .then(res => res.text())
  .then(res => this.setState({ apiResponse: res}));
}

componentWillMount(){
  this.callAPI();
}

// end code
render() {
  return (
    <>
    <div style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "red", }}>Just The Facts </h1>
    </div>
<Container style={{ width:3000, height: 700 }}>
<div> 

</div>

<div style={{ width: 300, height: 300, backgroundColor: '#444'}}>   
<Button style={{backgroundColor: '#f7009d' }}> Press Here </Button></div>

<Jumbotron>
<h1 >Articles Column!</h1>
<p classname =" App-intro">;{this.state.apiResponse}

</p></Jumbotron> 
<div>
<Card body>This is some text within a card body.</Card>
<Card style={{ width:95, height:79, }}>
<Button>Log out </Button>
</Card>
{/* <p>typing things </p> */}
<CardFooter style={{ backgroundColor: "blue", color: "black", text: "center" }}> <h3> gitLords 2019 </h3></CardFooter>

</div>  



</Container>
  
</>
  );
}
}

export default App;
