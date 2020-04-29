import React from "react";
import Book from "./Book";

export default function BookRow(props) {
  return (
    <>
      {props.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          id={book.id}
          authors={book.authors}
          shelf={book.shelf}
        />
      ))}
    </>
  );
}
