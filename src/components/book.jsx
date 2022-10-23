import React, { Component } from "react";
class Book extends Component {
    updateShelf = (e) => {
        this.props.changeShelf(this.props.book, e.target.value);
      };
  render() {

    return (
      <>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 130,
                  height: 190,
                  backgroundImage: this.props.book.imageLinks
                    ? `url(${this.props.book.imageLinks.smallThumbnail})`
                    : "",
                }}
              />
              <div className="book-shelf-changer">
                <select
                  onChange={this.updateShelf}
                  value={this.props.book.shelf ? this.props.book.shelf : "none"}
                >
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
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
            <div className="book-authors">
              <strong>
                {this.props.book.shelf ? this.props.book.shelf : "none"}
              </strong>
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Book;
