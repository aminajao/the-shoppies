import React from 'react';
import MovieCard from "./MovieCard";

function ResultContainer({ movies }) {
    // console.log(movies)
    return (
        <div className="result__container">
            <p className="result__container--header">Search results</p>
            <hr />
            <div >
                {
                    
                    movies.map((movie) => (
                        <MovieCard
                           title={movie.Title}
                           year={movie.Year}
                           img={movie.Poster}
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default ResultContainer;
