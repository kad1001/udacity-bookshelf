import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./bookshelf";

export default class SearchBook extends Component {
  componentDidMount() {
    this.props.emptybooks();
  }
  render() {
    //console.log(this.state.returnedBooks)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.props.books.string}
              onChange={this.props.searchQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            updateShelf={this.props.updateShelf}
            shelf="Search Results"
            books={this.props.books}
          />
        </div>
      </div>
    );
  }
}