import React from "react";
import { Route } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./components/bookshelf";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
  };

  async componentDidMount() {
    let b = await BooksAPI.getAll(); // api request

    this.setState((prevState) => ({
      books: [...prevState.books, ...b]
    }));
  }

  emptyBooks = () => this.setState({ searchedBooks: [] }); // clear collection of searched books

  searchQuery = async (event) => {
    const query = event.target.value;
    if (query !== "") {
      let searchResults = await BooksAPI.search(query);

      if (!searchResults || searchResults.error) {
        return;
      }

      // sync books by mapping over searchResults, and
      // iterating over this.props.books

      const syncedBooks = searchResults.map((searchResult) => {
        this.state.books.forEach((book) => {
          if (book.id === searchResult.id) searchResult.shelf = book.shelf;
        });
        return searchResult;
      });

      // finally, setState
      this.setState({ searchedBooks: syncedBooks });
    }
  };

  updateShelf = async (book, shelf) => {
    if (shelf === "none") {
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id)
      }));
    }

    if (book.shelf !== shelf) {
      await BooksAPI.update(book, shelf);
      const { books, searchedBooks } = this.state;
      const booksIds = books.map((b) => b.id);
      const searchedBooksIds = books.map((b) => b.id);
      let newBooks = []; //if book already on shelf: reshelf; otherwise, add to books
      let newSearchedBooks = [];

      if (booksIds.includes(book.id) || searchedBooksIds.includes(book.id)) {
        newBooks = books.map((b) =>
          b.id === book.id ? { ...b, shelf } : b
        );
        newSearchedBooks = searchedBooks.map((b) =>
          b.id === book.id ? { ...b, shelf } : b
        );
      } else {
        book.shelf = shelf;
        newBooks = [...books, book];
        newSearchedBooks = [...searchedBooks, book];
      }
      this.setState({ books: books, searchedBooks: newSearchedBooks });
    }
  };

  render() {
    console.log("state in App.js: ", this.state);
    return (
      <div className="app">
        <Route path="/search" exact render={() => (
          <SearchPage emptybooks={this.emptyBooks} searchQuery={this.searchQuery} updateShelf={this.updateShelf} books={this.state.searchedBooks} />
        )} />


          <Route path="/" exact render={() => (


            <Bookshelf updateShelf={this.updateShelf} books={this.state.books} />
          )} />

      </div>
    );
  }
}

export default BooksApp;
