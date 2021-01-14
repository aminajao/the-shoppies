import React from 'react';
import Img from "../assets/images/img.jpeg"
import Button from "./Button";

function MovieCard({title, year, img}) {
    console.log(title)
    return (
        <div className="movie__card">
            <div className="movie__card--left">  
                <div className="movie__card--image-container">
                    <img className="movie__card--image" src={img} />
                </div>
                <div>
                    <h4 className="movie__card--header">
                        {title}
                    </h4>
                    <p className="movie__card--year">{year}</p>
                </div>
            </div>
            <Button text="Nominate"/>
        </div>
    )
}

export default MovieCard;
