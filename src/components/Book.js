import React from "react";
// import BookData from "../BookData";

class Book extends React.Component {
  state = {
    status: "none"
  };
  render() {
    return <div>{this.state.status}</div>;
  }
}

export default Book;
