
import React from 'react';

export default function CatItem({ cat }) {
  return <div>
    <p>{cat.name}</p>
    <p>{cat.age}</p>
    <p>{cat.breed}</p>
    <p>{cat.bio}</p>
  </div>;
}
