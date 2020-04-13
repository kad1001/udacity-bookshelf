import React from "react";
import Book from "./Book";

export default function BookRow(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          {props.books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              id={book.id}
              authors={book.authors}
            />
          ))}
        </li>
      </ol>
    </div>
  );
}
