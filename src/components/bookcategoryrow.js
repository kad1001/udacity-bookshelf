import React from "react";
// import BookRow from "./bookrow";
import Book from "./Book";

export default function BookCategoryRow(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.displayName}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              id={book.id}
              authors={book.authors}
              shelf={book.shelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
