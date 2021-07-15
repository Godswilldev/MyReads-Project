import React, { Component } from "react";
import Books from "./Books";

class BookshelfBooks extends Component {
  render() {
    const { books, changeShelf } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <div key={index}>
              <Books index={index} book={book} changeShelf={changeShelf} />
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default BookshelfBooks;
