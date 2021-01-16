import React from 'react';
import MovieCard from "./MovieCard";

const Nominations = ({ limit, nominations, removeNomination }) => {
    return (
        <div className="nomination__container">
            <p className="result__container--header">Nominations : {" "}  <span className="limit__value">You have {limit} nominations left</span></p>

            <hr />
            {
                nominations.map((movie) => (
                    <MovieCard
                        removeNomination
                        key={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        img={movie.Poster}
                        movie={movie}
                        clickEvent={removeNomination}
                        text="Remove"
                    />
                ))
            }
        </div>
    )
}

export default Nominations;
