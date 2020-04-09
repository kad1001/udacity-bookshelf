import React from "react";
import BookRow from "./bookrow";
import BookCategoryRow from "./bookcategoryrow";

class Bookshelf extends React.Component {
  render() {
    console.log(this.props.books);
    const rows = [];
    // let lastCategory = null;

    this.props.books.forEach((book) => {
      console.log(book);
      //   if (book.category !== lastCategory) {
      //   rows.push(
      //       <BookCategoryRow category={book.category} key={book.category} />
      //     );
      //   }
      //   rows.push(<BookRow book={book} key={book.name} />);
      //   lastCategory = book.category;
    });

    return (
      <table>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody> */}
      </table>
    );
  }
}

export default Bookshelf;
