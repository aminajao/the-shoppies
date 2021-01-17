import React from 'react';
import Button from "./Button";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function MovieCard({ nominationStatus, btnClass, text, title, year, img, movie, clickEvent, removeNomination }) {
    return (
        <div className="movie__card">
            <div className="movie__card--left">
                <div className="movie__card--image-container">
                    <img className="movie__card--image" src={img === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : img} />
                </div>
                <div>
                    <h4 className="movie__card--header">
                        {title}
                    </h4>
                    <p className="movie__card--year">{year}</p>
                </div>
            </div>
            <Button
                text={text}
                removeNomination={removeNomination}
                clickEvent={() => clickEvent(movie)}
                // nominationStatus={nominationStatus}
                btnClass={btnClass}
            />
        </div>
    )
}

export default MovieCard;
