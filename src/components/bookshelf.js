import React from "react";
import BookCategoryRow from "./bookcategoryrow";
// import { render } from "@testing-library/react";

// class Bookshelf extends React.Component {
//   // constructor(props) {
//   // super(props);
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentlyReading: [],
//       none: [],
//       wantToRead: [],
//       read: [],
//       books: []
//       // allBooks: this.props.b
//     };
//   }
// export default function Bookshelf(props) {
//   //  joined = this.state.books.concat(this.props.books);
//   // this.setState({ myArray: joined })
//   // render() {
//   // let joined = this.state.books.concat(this.props.books);
//   // this.setState({ books: this.props.books });
//   // console.log(this.state);

//   const books = props.books;
//   const wantToRead = [];
//   const read = [];
//   const none = [];
//   const currentlyReading = [];

//   books.forEach((book) => {
//     // console.log(book);

//     // console.log(joined);
//     switch (book.shelf) {
//       case "wantToRead":
//         // let j = this.state.wantToRead.concat(book);
//         wantToRead.push(book);
//         // this.setState({ wantToRead: book });
//         break;
//       case "read":
//         read.push(book);
//         break;
//       case "none":
//         none.push(book);
//         break;
//       case "currentlyReading":
//         currentlyReading.push(book);
//         break;
//       default:
//         console.log("no book shelf found");
//     }
//   });

//   // });
//   return (
//     <div>
//       {/* <BookCategoryRow
//           displayName="Currently Reading"
//           books={currentlyReading}
//         /> */}
//       <BookCategoryRow displayName="Want to Read" books={wantToRead} />
//       <BookCategoryRow displayName="Read" books={read} />
//       <BookCategoryRow displayName="None" books={none} /> */}
//     </div>
//   );
// }
