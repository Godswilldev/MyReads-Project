import React, { Component } from "react";
import Navbar from "./Navbar";
// import Books from "./Books";
import MyReadsApp from "./MyReadsApp";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MyReadsApp />
      </div>
    );
  }
}

export default Home;
