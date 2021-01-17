import React, { useState, useEffect } from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header"
import Hero from "./components/Hero";
import ResultContainer from "./components/ResultContainer";
import NominationContainer from "./components/Nominations";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=rambo&apikey=39c22b63";

function App() {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [nominations, setNominations] = useState([]);
  const [limit, setLimit] = useState(5);


  useEffect(() => {

    const savedNominations = localStorage.getItem("nominations");

    savedNominations !== null ? setNominations(JSON.parse(savedNominations)) : localStorage.setItem(
      "nominations",
      JSON.stringify(nominations)
    );

    // fetch limit from local storage
    const storedLimit = localStorage.getItem("limit");

    storedLimit === null
      ? localStorage.setItem("limit", 5)
      : setLimit(Number(storedLimit));

       // eslint-disable-line react-hooks/exhaustive-deps
  }, [])


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

  const nominateMovie = (movie) => {
    
    if(nominations.length === 5 ) return;
    const newMoviesArray = [movie, ...nominations];
    setNominations(newMoviesArray);

    // add nomination to loacalstorage
    localStorage.setItem("nominations", JSON.stringify(newMoviesArray));

    // update limit
    setLimit(limit - 1);

    // update local storage limit
    localStorage.setItem("limit", limit - 1);
  };

  function validateNomination(movie) {
    let checkNominations = nominations.some((i) => i.imdbID.includes(movie.imdbID));
    if(checkNominations) {
        alert('Hm, looks like you already nominated this dude.')
    } else {
        nominateMovie(movie)
    }
}

  const removeNomination = (movie) => {
    const availableNominations = nominations.filter(
      (eachItem) => eachItem.imdbID !== movie.imdbID
    );

    // update local storage
    setNominations(availableNominations);
    localStorage.setItem(
      "nominations",
      JSON.stringify(availableNominations)
    );

    // update limit
    setLimit(limit + 1);

    // update local storage limit
    localStorage.setItem("limit", limit + 1);
  };


  return (
    <div className="container">
      <Header />
      {nominations.length >= 5 ? (
        <div className='alert__container' role='banner'>
          <h2>
            You've completed your nominations, Thanks!
          </h2>
        </div>
       ): ""} 
      <Hero
        search={search}
      />
      <div className="content__container">
        {
          loading && !errorMessage ? (
            <span>Loading...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : <ResultContainer
                movies={movies}
                validateNomination={validateNomination}
                limit={limit}
                nominations={nominations}
              />
        }
        <NominationContainer
          nominations={nominations}
          limit={limit}
          removeNomination={removeNomination}
        />
      </div>
    </div>
  );
}

export default App;
