import React from 'react';

// name, water, sun, & toxicity 
export default function PlantItem({ plants }) {
  return <div>
    <p>{plants.name}</p>
    <p>{plants.water}</p>
    <p>{plants.sun}</p>
    <p>{plants.toxic}</p>
  </div>;
}
