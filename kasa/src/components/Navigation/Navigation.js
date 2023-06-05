import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/Navigation.css'

const Navigation = () => {

    const currentRoute = window.location.pathname;

    return (
        
        <div className="navigation">
            <ul className='navlist'>
            <li className={currentRoute === '/' ? 'nav-list-item-active' : 'nav-list-item'}>
                <NavLink to="/">
                    Accueil
                </NavLink>
             </li>   
             <li className={currentRoute === '/about' ? 'nav-list-item-active' : 'nav-list-item'}> 
                <NavLink to="/about">
                    A propos
                </NavLink>
            </li>
            </ul>
        </div>
    );
};

export default Navigation;