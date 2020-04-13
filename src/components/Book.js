import React from "react";
// import BookData from "../BookData";

class Book extends React.Component {
  state = {
    currentlyReading: false,
    wantToRead: false,
    read: false,
    none: true
  };

  getChangedOption(e) {
    console.log(e.target.value);
    let val = e.target.value;

    switch (val) {
      case "currentlyReading":
        this.setState({
          none: false,
          currentlyReading: true
        });
        break;

      case "wantToRead": {
        this.setState({
          none: false,
          wantToRead: true
        });
        break;
      }

      case "read": {
        this.setState({
          none: false,
          read: true
        });
        break;
      }

      default:
        console.debug("Error in Book component");
    }
  }
  render() {
    const { Book } = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("http://books.google.com/books/content?id=${Book.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={this.getChangedOption}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{Book.title}</div>
        <div className="book-authors">{Book.authors}</div>
      </div>
    );
  }
}

export default Book;
