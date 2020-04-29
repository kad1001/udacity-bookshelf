import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
// import Bookshelf from "./components/bookshelf";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    let b = await BooksAPI.getAll();
    var joined = this.state.books.concat(b);
    console.log(b);
    console.log(joined);
    this.setState({ books: joined });
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          {/* <Bookshelf books={this.state.books} /> */}
        </div>
      </div>
    );
  }
}

export default BooksApp;
