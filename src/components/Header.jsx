import React from 'react';
import Logo from "../assets/images/logo.svg";

function Header() {
    return (
        <div className="header">
            <img src={Logo} className="header__img"/>
            <ul>
                <li><a href="/">Nominated</a></li>
                <li><a href="/">Winners</a></li>
            </ul>
        </div>
    )
}

export default Header
