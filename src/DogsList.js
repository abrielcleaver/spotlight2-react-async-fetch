import React from 'react';
import DogItem from './DogItem';

export default function DogsList({ doggies }) {
  return <div>
    <h2>Welcome to the DogsList</h2>
    {doggies.map((dog, i) => <DogItem dog={dog} key={`dog}-${i}`}/>)}
  </div>;
}