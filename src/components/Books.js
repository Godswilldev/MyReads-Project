import React, { Component } from "react";

class Books extends Component {
  render() {
    const { book, index, changeShelf } = this.props;
    return (
      <div className="list-books">
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
        </li>
      </div>
    );
  }
}

export default Books;

/*

         <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 188,
                            backgroundImage:
                              'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Ender's Game</div>
                      <div className="book-authors">Orson Scott Card</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>


*/
