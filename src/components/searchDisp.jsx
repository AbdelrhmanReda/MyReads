import React, { Component } from "react";
import Book from "./book";
class SearchDisp extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Search</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.searchBuffer
              ? this.props.searchBooks.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                ))
              : this.props.searchBooks}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchDisp;
