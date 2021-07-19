import React from "react";
import { Link } from "react-router-dom";
const FourZeroFour = () => {
  return (
    <div style={{ color: "#fff", margin: "0 auto", textAlign: "center" }}>
      <h1>Opps. This probably isn't the page you expected to see</h1>
      <p>
        Click <Link to="/"> here</Link> to go to our home page
      </p>
    </div>
  );
};

export default FourZeroFour;
