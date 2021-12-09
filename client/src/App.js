import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
// import Nav from './Components/Nav';
// import CountryDetail from './components/Detail';
import Form from './components/Form';
import GlobalState from './contexts/GlobalState';
// import Loading from './components/Loading';

function App() {
  return (
    <GlobalState>
      {/* <Loading />  */}
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Nav />}/> */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/home/:id" element={<CountryDetail />} /> */}
          <Route path="/activity" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
    </GlobalState>
  );
}

export default App;
