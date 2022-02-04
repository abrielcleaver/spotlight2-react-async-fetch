import React from 'react';
import PlantItem from './PlantItem';

export default function PlantsList({ plants }) {
  return <div>
    <h3 className="plant-info">Check out these plants!</h3>
    <div className="plant-list">
      {plants.map((plant, i) => 
        <PlantItem
          key={`${plant}-${i}`} plants={plants}
        />
      )}
    </div>

  </div>;
}

