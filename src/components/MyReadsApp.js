import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import BookshelfBooks from "./BookshelfBooks";
import SearchButton from "../components/SearchButton";
class MyReadsApp extends Component {
  static defaultProps = {
    shelves: [
      { shelf: "currentlyReading", title: "Currently Reading" },
      { shelf: "wantToRead", title: "Want To Read" },
      { shelf: "read", title: "Read" },
    ],
  };

  state = {
    Books: [],
  };

  componentDidMount() {
    getAll().then((data) => this.setState({ Books: data }));
  }

  changeShelf = (book, newShelf) =>
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

  render() {
    const { Books } = this.state;

    return (
      <>
        {Books.length > 0 && (
          <>
            {this.props.shelves.map((shelf, index) => {
              const shelvesBooks = Books.filter(
                (value) => value.shelf === shelf.shelf
              );
              return (
                <div className="list-books" key={index}>
                  <div className="list-books-content">
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{shelf.title}</h2>
                      <BookshelfBooks
                        books={shelvesBooks}
                        shelf={shelf.shelf}
                        changeShelf={this.changeShelf}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        <SearchButton />
      </>
    );
  }
}

export default MyReadsApp;
