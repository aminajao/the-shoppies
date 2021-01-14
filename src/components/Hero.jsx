import React, { useState } from 'react';
import IllustrationSmall from "../assets/images/illustration-1.svg"
import IllustrationLarge from "../assets/images/illustration-2.svg"


function Hero(props) {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div className="hero">
            <h1 className="hero__header">
                Nominate Your Favourite <br /> Movies
            </h1>
            <div className="hero__search">
                <form onSubmit={callSearchFunction}>
                    <input value={searchValue} onChange={handleSearchInputChanges} type="search" placeholder="Search for movies" className="hero__search--input" />
                    <input type="submit" className="hero__search--button" value="Search" />
                </form>
            </div>

            <img className="illustration__small" src={IllustrationSmall} />
            <img className="illustration__large" src={IllustrationLarge} />
        </div>
    )
}

export default Hero;
