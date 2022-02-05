import React from 'react';
import PlantItem from './PlantItem';
export default function PlantsList({ planty }) {
  return <div>
    <h2 className="plant-info"> Check out these plants!</h2>
    {planty.map((plant, i) => 
      <PlantItem
        plant={plant}
        key={`${plant}-${i}`} 
      />
    )}
  </div>;
}

