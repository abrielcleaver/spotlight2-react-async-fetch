// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// Import the fetch function into App.js
import { getDogs, getPlants } from './services/fetch-utils';
// import your arrays here
import DogsList from './DogsList';
import PlantsList from './PlantsList';

function App() {
  const [dogs, setDogs] = useState([]);
  const [plants, setPlants] = useState([]);

  async function fetchAndStoreDogs() {
    const data = await getDogs();
    setDogs(data);
// //useEffect is a hook that gets called on every change
//   // If the array is empty, useEffect is called once on load
//   // if something is in the array, the useEffect callback gets called whenever what's inside the array changes.
  }
  useEffect(() => {
    fetchAndStoreDogs();
  }, []);

  async function fetchAndStorePlants() {
    const data = await getPlants();
    setPlants(data);
  }
  useEffect(() => {
    fetchAndStorePlants;
  
  }, []);
  

  return (
    <div className="App">
      <div>
        <DogsList doggies={dogs}/>
      </div>
      <div>
        <PlantsList plants={plants}/>
      </div>
    </div>
  );
}

export default App;
