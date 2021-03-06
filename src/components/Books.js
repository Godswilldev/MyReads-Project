import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    shelf: this.props.book.shelf || "none",
  };

  handleChange = (evt) => {
    this.setState({ shelf: evt.target.value }, () =>
      this.props.changeShelf(this.props.book, evt.target.value)
    );
    evt.target.value === "none"
      ? alert(`${this.props.book.title} has been removed`)
      : alert(
          `${this.props.book.title} has been added to ${evt.target.value} shelf`
        );
  };

  render() {
    const { book, index } = this.props;
    return (
      <div className="list-books">
        <li key={index}>
          <div className="book">
            <div className="book-top">
              <Link to={`/book/${book.id}`}>
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 188,
                    backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                  }}
                />
              </Link>

              <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.handleChange}>
                  <option disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
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
        </li>
      </div>
    );
  }
}

export default Books;

// (evt) => {
//                     !evt.target.value === "" &&
//                       this.setState({ shelf: evt.target.value });
//                     changeShelf(book, evt.target.value);
//                     alert(
//                       `${book.title} has been added to ${
//                         evt.target.value
//                       } shelf`
//                     );
//                   }
