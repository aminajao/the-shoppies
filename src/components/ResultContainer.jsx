import React from 'react';
import MovieCard from "./MovieCard";


function ResultContainer({ nominations, limit, movies, validateNomination }) {
    const nominationStatus = () => {
        const isNominated = nominations.filter(nominated => nominated.imdbID === movies.imdbID
        );

        return isNominated.length > 0;
    };

    const btnClass = () => {
        const check = nominationStatus();

        if (check) {
            return "disabled";
        } else if (limit === 0) {
            return " disabled limit-reached";
        } else {
            return "";
        }
    };
    // const btnValue = () => {
    //     const check = nominationStatus();
    //     if (check) {
    //         return "Nominated";
    //     } else return "Nominate"
    // };

    return (

        <div className="result__container">
            <p className="result__container--header">Search results</p>
            <hr />
            <div >
                {

                    movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            img={movie.Poster}
                            clickEvent={validateNomination}
                            movie={movie}
                            text="Nominate"
                            // btnClass={btnClass}
                            // btnValue={btnValue}
                            nominationStatus={nominationStatus}
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default ResultContainer;
