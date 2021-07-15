import React, { Component } from "react";

class BookshelfBooks extends Component {
  state = {
    shelf: "",
  };

  render() {
    const { books, changeShelf } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 188,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}
                  />

                  <div className="book-shelf-changer">
                    <select
                      value={this.state.shelf}
                      onChange={(evt) => {
                        this.setState({
                          shelf: evt.target.value,
                        });
                        changeShelf(book, evt.target.value);
                      }}
                    >
                      <option disabled>Move to...</option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="">None</option>
                    </select>
                  </div>
                  {/*  */}
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  {book.authors.map((author, index) => (
                    <p key={index}>{author}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BookshelfBooks;
