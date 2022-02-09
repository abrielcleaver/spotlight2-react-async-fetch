// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// Import the fetch function into App.js
import { getBooks, getDogs, getPlants, getCats } from './services/fetch-utils';
// import your arrays here
import DogsList from './DogsList';
import PlantsList from './PlantsList';
import BooksList from './BooksList';
import CatsList from './CatsList';


function App() {
  const [dogs, setDogs] = useState([]);
  const [plants, setPlants] = useState([]);
  const [books, setBooks] = useState([]);
  const [cats, setCats] = useState([]);


  async function fetchAndStoreDogs() {
    const data = await getDogs();
    setDogs(data);
// //useEffect is a hook that gets called on every change
//   // If the array is empty, useEffect is called once on load
//   // if something is in the array, the useEffect callback gets called whenever what's inside the array changes.
  }
  async function fetchAndStorePlants() {
    const data = await getPlants();
    setPlants(data);
  }

  async function fetchAndStoreBooks() {
    const data = await getBooks();
    setBooks(data);
  }

  async function fetchAndStoreCats() {
    const data = await getCats();
    setCats(data);
  }

  useEffect(() => {
    fetchAndStoreDogs();
    fetchAndStorePlants();
    fetchAndStoreBooks();
    fetchAndStoreCats();
  }, []);

  return (
    <div className="App">
      <div>
        <DogsList doggies={dogs}/>
      </div>
      <div>
        <PlantsList planty={plants}/>
      </div>
      <div>
        <BooksList book={books} />
      </div>
      <div>
        <CatsList kittens={cats} />
      </div>
  
    </div>
  );
}

export default App;
