import React from 'react';

export default function BookItem({ book }) {
  return <div>
    <p>{book.name}</p>
    <p>{book.author}</p>
    <p>{book.date}</p>
    <p>{book.rating}</p>

  </div>;
}

