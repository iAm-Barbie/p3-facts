import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./Routes";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  Button,
  CardFooter
} from "reactstrap";
import DataCard from "./components/DataCard/DataCard";
import NavBarMain from "./components/NavBar/Navbar";
import ScrapeButton from "./components/ScrapeButton/ScrapeButton";
import "./App.css";


class App extends Component {
  // new code
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:4000/scrape")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  // end code
  render() {
    console.log(this.state);
    return (
      <>

      
        <div style={{ backgroundColor: "black", position:"0" }}>
          
          <Button style={{ backgroundColor: "gray" ,}}> Home </Button>
          <Button style={{ backgroundColor: "gray" ,}}> Saved </Button>
          <Button style={{ backgroundColor: "gray" ,}}> Articles </Button>
        </div>

        <Container style={{ width: 3000, height: 700, paddingTop:"20px" }}>
          <div></div>
          
          <div style={{ width: "100%", height: 250, backgroundColor: "#444" , textAlign: "right"}}>
          <h1 style={{ color: "white",paddingRight:"80px",paddingTop:"30px",fontSize:80 }}>Just The Facts </h1>
          
          
          </div>
          <br />

          <Jumbotron>
            <h1>Articles Column!</h1>
            <br />

            <ScrapeButton></ScrapeButton>
            <br />
            
            <p className=" App-intro">
              {this.state.apiResponse.map(item => {
                return (
                  <>
                    <a>{item.link}</a>
                    <div>{item.title}</div>
                    <div>{item.img}</div>
                    <div>{item.a}</div>
                    <br />
                    <Button style={{ backgroundColor: "gray" ,}}> Save </Button>
                    <br />
                  </>
                );
              })}
            </p>
          </Jumbotron>
          <div>
            
           
            {/* <p>typing things </p> */}
            <CardFooter
              style={{
                
              }}
            >
              {" "}
              <h3> gitLords 2019 </h3>
            </CardFooter>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
