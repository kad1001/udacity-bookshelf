import React from "react";
// import Book from "./Book";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };

    this.newShelf = this.newShelf.bind(this);
  }
  newShelf(e) {
    this.setState({ shelf: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="book-shelf-changer">
        <select shelf={this.state.shelf} onChange={this.newShelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
