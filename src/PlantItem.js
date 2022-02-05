import React from 'react';

// name, water, sun, & toxicity 
export default function PlantItem({ plant }) {
  return <div>
    <p>{plant.name}</p>
    <p>{plant.water}</p>
    <p>{plant.sun}</p>
    <p>{plant.toxic}</p>
  </div>;
}
