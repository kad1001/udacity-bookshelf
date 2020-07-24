import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/Homepage";

export default class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
  };

  // Initial API request to apply books to state
  async componentDidMount() {
    const b = await BooksAPI.getAll(); // api request
    this.setState({ books: b });
  }

  // Called in <SearchPage />
  emptyBooks = () => this.setState({ searchedBooks: [] }); // clear collection of searched books

  // Called in <SearchPage />
  searchQuery = async (e) => {
    const query = e.target.value;
    if (query !== "") {
      const searchResults = await BooksAPI.search(query);

      // Nothing found for search query
      if (!searchResults || searchResults.error) {
        this.setState({ searchedBooks: [] }); // reset searched books to none
        return;
      }

      // sync books
      const syncedBooks = searchResults.map((searchResult) => {
        this.state.books.forEach((book) => {
          if (book.id === searchResult.id) {
            searchResult.shelf = book.shelf;
          }
        });
        return searchResult;
      });

      // apply the books returned by search to the searched books state
      this.setState({ searchedBooks: syncedBooks });
    }
    else {
      this.setState({ searchedBooks: [] }); // default to empty array if no seached queries
    }
  };

  // Called in <Homepage /> and <SearchPage />
  updateShelf = async (book, shelf) => {
    if (shelf === "none") {
      // Remove from state object / out of display
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id)
      }));
    }

    if (book.shelf !== shelf) {
      // move the book to the correct shelf
      await BooksAPI.update(book, shelf);

      const booksIds = this.state.books.map((b) => b.id);
      const searchedBooksIds = this.state.books.map((b) => b.id);

      // Books to replace the current books in state 
      let myNewReads = [];
      let newSearchedBooks = [];

      if (booksIds.includes(book.id) || searchedBooksIds.includes(book.id)) {
        myNewReads = this.state.books.map((b) => (b.id === book.id ? { ...b, shelf } : b)); // if the id of each book isn't already there, add it
        newSearchedBooks = this.state.searchedBooks.map((b) =>
          b.id === book.id ? { ...b, shelf } : b
        );
      } else {
        book.shelf = shelf;
        myNewReads = [...this.state.books, book];
        newSearchedBooks = [...this.state.searchedBooks, book];
      }

      this.setState({ books: myNewReads, searchedBooks: newSearchedBooks }); // apply new results to the state
    }
  };

  render() {
    console.log("state in App.js: ", this.state);
    return (
      <div className="app">
        <Route
          path="/search"
          exact
          render={() => (
            <SearchPage
              emptybooks={this.emptyBooks}
              searchQuery={this.searchQuery}
              updateShelf={this.updateShelf}
              books={this.state.searchedBooks}
            />
          )}
        />

        <Route
          path="/"
          exact
          render={() => (
            <HomePage updateShelf={this.updateShelf} books={this.state.books} />
          )}
        />
      </div>
    );
  }
}
