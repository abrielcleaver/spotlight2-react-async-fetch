import React from 'react';
import CatItem from './CatItem';

export default function CatsList({ kittens }) {
  return <div>
    <h2>Welcome to the CatsList</h2>
    {kittens.map((cat, i) => 
      <CatItem cat={cat} key={`${cat}-${i}`} />)}
  </div>;
}

