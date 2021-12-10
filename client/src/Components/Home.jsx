import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Card from './Card';
import Paginate from './Paginate';
import {
  getCountries,
  addActivity,
  filterCountriesContinent,
  setCountriesSort,
} from '../actions';
import SearchBar from './SearchBar';
import './Home.css';
// import GlobalContext from '../contexts/GlobalContext';

export default function Home() {
  // const {ui} = useContext(GlobalContext);

  const dispatch = useDispatch();
  const countries = useSelector(
    (state) => state.countries,
    () => false
  );

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 9;

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginated = (pageNumber) => setCurrentPage(pageNumber);

  // const activities = useSelector(state => state.activities);

  useEffect(() => {
    // ui.setLoading(true);
    dispatch(getCountries());
    // ui.setLoading(false);
  }, []);

  function handleClick(e) {
    // ui.setLoading(true);
    e.preventDefault();
    dispatch(getCountries());
    // ui.setLoading(false);
    console.log(getCountries);
  }

  function handleSortBy(e) {
    dispatch(setCountriesSort(e.target.value === 'asc'));
    setCurrentPage(1);
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesContinent(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="home">
      <div className="main_container">
        <h1>Countries around the world!</h1>
        <Link to="/activity">
          <button className="btn">Create new activity</button>
        </Link>
        <button
          className="btn"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Back
        </button>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="select_container">
        <h2 className="sort-by">Sort by:</h2>
        <select onChange={(e) => handleSortBy(e)}>
          <option value="asc">Sort By:</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Filter by continent:</option>
          <option value="South America"> South America </option>
          <option value="North America"> North America </option>
          <option value="Europe"> Europe </option>
          <option value="Africa"> Africa </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
        <option value="activity">Activity</option>
      </div>
      <div className="paginate">
        <Paginate
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginate={paginated}
        />
      </div>
      <div className="cards">
        {currentCountries.length
          ? currentCountries.map((country) => {
              return (
                <div key={country.id}>
                  <Link to={'/home/' + country.id}>
                    <Card
                      className="card"
                      img={country.img}
                      name={country.name}
                      continent={country.continent}
                    />
                  </Link>
                </div>
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
}
