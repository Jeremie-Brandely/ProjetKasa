import React from 'react';
import Navigation from '../Navigation/Navigation';
import "../../style/Header.css"
import logo from "../../images/LOGO.png"

const Header = () => {
    return (
        <header className='header'>
            <img src={logo}/>
        <Navigation />
        </header>
    );
};

export default Header;