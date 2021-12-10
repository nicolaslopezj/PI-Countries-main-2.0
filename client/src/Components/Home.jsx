import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import Paginate from './Paginate';
import { getCountries, addActivity, filterCountriesContinent } from '../actions';
import SearchBar from './SearchBar';
import "./Home.css";
// import GlobalContext from '../contexts/GlobalContext';

export default function Home() {
// const {ui} = useContext(GlobalContext);
    
const dispatch = useDispatch();
const allCountries = useSelector(state => state.allCountries);
console.log("allCountries", allCountries);
  // con useSelector traeme todo lo que esta en el estado de "countries" a la constante "allCountries"

const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(9);

useEffect(() => {
    currentPage === 1 ? setCountriesPerPage(9) : setCountriesPerPage(10);
}, [currentPage]);

const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

const paginated = pageNumber => setCurrentPage(pageNumber);

// const activities = useSelector(state => state.activities);

useEffect(() => {
    // ui.setLoading(true);
    dispatch(getCountries());
    // ui.setLoading(false);
    }, [dispatch]);

function handleClick(e) {
    // ui.setLoading(true);
    e.preventDefault();
    dispatch(getCountries());
    // ui.setLoading(false);
    console.log(getCountries);
}

// const handleFilterContinent = e => {
//     setPage(0)
//     let filter = []
//     if (e.target.value === '---') return setFilter([])
//     if (e.target.value === 'Americas' ||
//         e.target.value === 'Europe' ||
//         e.target.value === 'Asia' ||
//         e.target.value === 'Africa' ||
//         e.target.value === 'Oceania' ||
//         e.target.value === 'Polar') {
//         filter = countries.filter( c => c.region === e.target.value)
//         return setFilter(filter)
//     }
// }

function handleFilterContinent(e) {
    dispatch(filterCountriesContinent(e.target.value));
}

// const [loading, setLoading] = useState(true)

// useEffect(() => {
//     setLoading(false)
// });

    return (
        <div className="home">
            <div className="main_container">
                <h1>Countries around the world!</h1>
                <Link to="/activity">
                <button className="btn">Create new activity</button>
                </Link>
                <button className="btn" onClick={(e) => {handleClick(e) }}>Back</button>
            </div>
            <div className="search-bar">
                <SearchBar />    
            </div>
            <div className="select_container">
                <h2 className="sort-by">Sort by:</h2>
                <select>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value="All">By continent:</option>
                    <option value="Americas"> Americas </option>
                    <option value="Europe"> Europe </option>
                    <option value="Africa"> Africa </option>
                    <option value="Asia"> Asia </option>
                    <option value="Oceania"> Oceania </option>
                    <option value="Polar"> Polar </option>
                </select>
                    <option value="activity">Activity</option>
            </div>
            <div className="paginate">
                <Paginate
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginate={paginated}
                />
            </div>
            <div className="cards">
                {currentCountries.length ? currentCountries.map(country => {
                    console.log(allCountries);
                    return (
                        <div>
                            <Link to={"/home/" + country.id}>
                            <Card className="card"
                                img={country.img}
                                name={country.name}
                                continent={country.continent}
                                />
                            </Link>
                        </div>
                    )}) : "Loading..."}     
            </div>
        </div>

    )
}
