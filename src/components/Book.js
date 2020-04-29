import React from "react";
import Dropdown from "./Dropdown";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }
  render() {
    const authors = this.props.authors;

    const joined = authors.join(", ");

    return (
      <div className="book">
        <div className="book-top">
          <Dropdown shelf={this.state.shelf} />
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("http://books.google.com/books/content?id=${this.props.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`
            }}
          ></div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">By {joined}</div>
      </div>
    );
  }
}

export default Book;
