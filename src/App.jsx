import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Search from "./components/search";

class App extends Component {
  state = {
    books: [],
    searchBooks: [],
    search: "",
    searchBuffer: false,
  };
  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
  }
  changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
    this.onSearchBook(this.state.search);
  };
  inputSearch = async (book) => {
    await this.setState({
      search: book.target.value,
    });
    console.log(this.state.search);
    this.onSearchBook(this.state.search);
  };
  onSearchBook = async (search) => {
    await BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
        this.setState({
          searchBooks: res.map((booksSearch) => {
            this.state.books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf;
            });
            return booksSearch;
          }),
          searchBuffer: true,
        });
      } else {
        this.setState({
          searchBooks: ` " ${this.state.search} " Not Found , Please Try Again`,
          searchBuffer: false,
        });
      }
    }); // then
    console.log("Search");
    console.log(this.state.searchBooks);
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Main changeShelf={this.changeShelf} books={this.state.books} />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              searchBooks={this.state.searchBooks}
              search={this.state.search}
              searchBuffer={this.state.searchBuffer}
              changeShelf={this.changeShelf}
              inputSearch={this.inputSearch}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
