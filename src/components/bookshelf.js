import React from "react";
import BookCategoryRow from "./bookcategoryrow";

export default function Bookshelf(props) {
  const currentlyReading = [];
  const none = [];
  const wantToRead = [];
  const read = [];

  // let lastCategory = null;

  this.props.books.forEach((book) => {
    console.log(book);
    // if (book.)
    //   if (book.category !== lastCategory) {
    //   rows.push(
    //       <BookCategoryRow category={book.category} key={book.category} />
    //     );
    //   }
    //   rows.push(<BookRow book={book} key={book.name} />);
    //   lastCategory = book.category;
  });

  return (
    <div>
      <BookCategoryRow
        displayName="Currently Reading"
        books={currentlyReading}
      />
      <BookCategoryRow displayName="Want to Read" books={wantToRead} />
      <BookCategoryRow displayName="Read" books={read} />

      <BookCategoryRow displayName="None" books={none} />
    </div>
  );
}
