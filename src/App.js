// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// Import the fetch function into App.js
import { getDogs } from './services/fetch-utils';
// import your arrays here
import DogsList from './DogsList';


function App() {
  const [dogs, setDogs] = useState([]);

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

  return (
    <div className="App">
      <DogsList doggies={dogs}/>
    </div>
    
  );
}

export default App;
