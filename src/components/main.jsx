import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './shelf';

const Main = ({books,changeShelf}) => {
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            
            <Shelf section='Currently Reading' books={books} state="currentlyReading" changeShelf={changeShelf}/>
            <Shelf section='Want To Read' books={books} state="wantToRead" changeShelf={changeShelf}/>
            <Shelf section='Read' books={books} state="read" changeShelf={changeShelf}/>           
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-serch__link">Add a book</Link>
        </div>
      </div>
    );
}

export default Main;

