import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// Url that takes an id and renders its image from Google books
const getUrl = (id) =>
  `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api`;

class ListBooks extends Component {
  // These must exist like they're props get it cus propTypes
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  // For the UI -- query means search query so when someone enters text it'll set the state of the query of books to list by filtering the letters get it
  state = {
    query: "",
    shelf: {}
  };

  // this sets the state to a query and if theres a space it's removed
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
  };

  // this sets the state of the query to be BLANK!!!
  clearQuery = () => {
    this.updateQuery("");
  };

  // whatchu gonna do
  render() {
    // could also be like this.state.query
    const { query } = this.state;
    // could also be like this.props.books u know  these r REQUIRED PROPS!!!
    const { books, onUpdateBook } = this.props;

    // what do u have to show bro
    const showingBooks =
      // if query is BLANK
      query === ""
        ? // SHOW ME ALL THE BOOKS
          books
        : // UNLESS the query is NAHT blank then show me the BOOKS that include the query in lower case cus sometimes caps gets stuck.
          books.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              {/* TODO: Sort by shelf in state */}
              <div className="bookshelf-title">
                <h2>Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* Loop thru object that determines which books are shown like looking thru a closet */}
                    {/* show me each showingBooks.-- */}
                    {showingBooks.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover">
                              <img src={getUrl(book.id)} alt={book.title}></img>
                            </div>
                            <div className="book-shelf-changer">
                              <select
                                value={this.state.value}
                                onChange={() => onUpdateBook(book)}
                              >
                                <option value="move" disabled>
                                  Move to...
                                </option>

                                <option value="wantToRead">Want to Read</option>
                                <option value="currentlyReading">
                                  Currently Reading
                                </option>

                                <option value="read">Finished</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.name} </div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
