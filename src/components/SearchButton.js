import React from "react";
import { Link } from "react-router-dom";

const SearchButton = () => {
  return (
    <Link className="open-search" to="/search">
      Add a book
    </Link>
  );
};

export default SearchButton;
