import React, { useState, useEffect } from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header"
import Hero from "./components/Hero";
import ResultContainer from "./components/ResultContainer";
import NominationContainer from "./components/Nominations";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=39c22b63";

function App() {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };



  return (
    <div className="container">
      <Header />
      <Hero search={search} />
      <div className="content__container">
        {
          loading && !errorMessage ? (
            <span>Loading...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : <ResultContainer movies={movies} />
        }
        <NominationContainer />
      </div>
    </div>
  );
}

export default App;
