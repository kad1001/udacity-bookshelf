import React from "react";
import BookRow from "./bookrow";

export default function BookCategoryRow(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>

      {/* {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      } */}
      <BookRow books={this.props.books} />
    </div>
  );
}
