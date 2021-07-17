import React, { Component } from "react";
import { motion } from "framer-motion";
import Books from "./Books";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

class BookshelfBooks extends Component {
  render() {
    const { books, changeShelf } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <motion.div
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: index / 5 }}
            >
              <Books index={index} book={book} changeShelf={changeShelf} />
            </motion.div>
          ))}
        </ol>
      </div>
    );
  }
}

BookshelfBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func,
};

export default BookshelfBooks;
