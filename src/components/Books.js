import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    const { book, index, changeShelf } = this.props;
    return (
      <div className="list-books">
        <Link to={`/book/${book.id}`}>
          <li key={index}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 188,
                    backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                  }}
                />

                <div className="book-shelf-changer">
                  <select
                    onChange={(evt) => {
                      this.setState({
                        shelf: evt.target.value,
                      });
                      changeShelf(book, evt.target.value);
                      alert(
                        `${book.title} has been added to ${evt.target.value} shelf`
                      );
                    }}
                  >
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="">None</option>
                  </select>
                </div>
                {/*  */}
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors &&
                  book.authors.map((author, index) => (
                    <p key={index}>{author}</p>
                  ))}
              </div>
            </div>
          </li>{" "}
        </Link>
      </div>
    );
  }
}

export default Books;
