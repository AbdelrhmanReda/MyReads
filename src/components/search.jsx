import React from 'react';
import { Link } from 'react-router-dom';
import SearchDisp from './searchDisp';

const Search = ({searchBooks,inputSearch,changeShelf,searchBuffer}) => {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={inputSearch}/>
          </div>
        </div>
        <SearchDisp searchBooks={searchBooks} changeShelf={changeShelf} searchBuffer={searchBuffer}/>
      </div>
    );
}

export default Search;
