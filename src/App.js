import SearchBar from './SearchBar/SearchBar.js';
import BusinessList from './BusinessList/BusinessList.js';
import yelpSearch from './utils/api.js';
import React, {useState} from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);

  // const business = {
  //   image: "https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg",
  //   name: 'Papas Pizzeria',
  //   address: '421 E Third St',
  //   city: 'Bloomington',
  //   state: 'IN',
  //   zip: '47401',
  //   type: 'Italian',
  //   rating: '4.5',
  //   reviews: '11'
  // };

  // const list = Array(9).fill(business);

  // const test = yelpSearch(SearchBar.search, SearchBar.location, SearchBar.filter);
  // console.log(typeof(test));

  return (
    <div>
      <header>
        <SearchBar />
      </header>
      <BusinessList list={businesses} />
    </div>
  );
}

export default App;
