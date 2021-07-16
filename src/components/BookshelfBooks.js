import React, { Component } from "react";
import { motion } from "framer-motion";
import Books from "./Books";

class BookshelfBooks extends Component {
  render() {
    const { books, changeShelf } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <motion.div
              key={index}
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

export default BookshelfBooks;
