import React from "react";
// import { Link } from "react-router-dom";
// // import ImageInput from './ImageInput'
// import serializeForm from "form-serialize";

// this is the actual search text box
// since it's a component it inherits the function this.updateQuery function from the ListBooks component like sisters sharing clothes
class SearchBook extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>

          {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms in SEARCH_TERMS!!!
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>

        {/* TODO: Delete?? Already in ListBooks p sure */}
        {/* <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div> */}
      </div>
    );
  }
}
export default SearchBook;
