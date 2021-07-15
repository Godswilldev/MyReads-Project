import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SearchButton extends Component {
  render() {
    return (
      <Link className="open-search" to="/search">
        Add a book
      </Link>
    );
  }
}
