import React from 'react';
import Book from './book';

const Shelf = ({section,books,state,changeShelf}) => {
    const bookState = books.filter((book)=> book.shelf === state)
    
    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{section}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {bookState.map((book)=>(

                 <Book key={book.id}  book={book} changeShelf={changeShelf}/>

                 ))}
                </ol>
              </div>
            </div> 
    );
}

export default Shelf;
