import React from 'react';
import BookItem from './BookItem';

export default function BooksList({ book }) {
  return <div>
    <h2>Some great books to read:</h2>
    {book.map((book, i) => 
      <BookItem book={book} key={`${book}-${i}`} />
    )}
  </div>;
}