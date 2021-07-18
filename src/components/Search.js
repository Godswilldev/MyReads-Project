import React, { Component } from "react";
import { motion } from "framer-motion";
import { getAll, update, search } from "../BooksAPI";
import { Link } from "react-router-dom";
import Books from "./Books";

class Search extends Component {
  state = {
    query: "",
    Books: [],
    searchResult: [],
  };

  componentDidMount() {
    getAll().then((data) => this.setState({ Books: data }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () =>
        this.state.query !== "" &&
        search(this.state.query.toLowerCase()).then((res) =>
          this.bookShelfSync(res)
        )
    );
  };

  changeShelf = (book, newShelf) => {
    update(book, newShelf).then(() => {
      if (newShelf === "") {
        return;
      } else {
        book.shelf = newShelf;
      }

      let currentBooks = this.state.Books.filter((b) => b.id !== book.id);
      currentBooks.push(book);

      this.setState({ Books: currentBooks });
    });
  };

  bookShelfSync = (shelves) => {
    const Books = this.state.Books;
    if (shelves.length > 0) {
      Books.forEach((book) =>
        shelves.forEach((result) => {
          if (book.id === result.id) {
            result.shelf = book.shelf;
          }
        })
      );
    }
    this.setState({ searchResult: shelves });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              name="query"
              type="text"
              placeholder="Search by title or author"
              value={this.state.query.toLowerCase()}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div
          className="display"
          style={{
            display: this.state.query === "" ? "none" : "grid",
          }}
        >
          {this.state.searchResult.error ? (
            <h1 style={{ marginTop: "5rem", color: "#fff" }}>
              No results found for this query
            </h1>
          ) : (
            <div className="search-books-results">
              {/*  */}
              {this.state.searchResult.length > 1 && (
                <ol className="books-grid">
                  {this.state.searchResult.map((book) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, delay: book.id / 5 }}
                    >
                      <Books
                        book={book}
                        index={book.id}
                        changeShelf={this.changeShelf}
                        bookShelfSYnc={this.bookShelfSync}
                      />
                    </motion.div>
                  ))}
                </ol>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
